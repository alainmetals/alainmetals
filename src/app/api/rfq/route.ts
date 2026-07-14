import { NextRequest, NextResponse } from "next/server"

interface RFQPayload {
  inquiryType: string
  commodity: string
  quantity: string
  buyerType: string
  country: string
  name: string
  phone: string
  email: string
  message: string
  rfqReference: string
  honeypot: string
  formStartedAt: number
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DISPOSABLE_DOMAINS = ["tempmail.com", "throwaway.com", "guerrillamail.com", "mailinator.com", "yopmail.com"]
const MAX_INPUT_LENGTH = 500
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 5
const MIN_FORM_TIME = 3_000

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  const real = request.headers.get("x-real-ip")
  if (real) return real
  return "unknown"
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim()
    .slice(0, MAX_INPUT_LENGTH)
}

function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  return DISPOSABLE_DOMAINS.includes(domain)
}

function generateRFQReference(): string {
  const now = new Date()
  const year = now.getFullYear().toString().slice(-2)
  const month = (now.getMonth() + 1).toString().padStart(2, "0")
  const random = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `AA-${year}${month}-${random}`
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body: RFQPayload = await request.json()

    if (body.honeypot) {
      return NextResponse.json({ success: true, rfqReference: generateRFQReference() })
    }

    if (body.formStartedAt) {
      const elapsed = Date.now() - body.formStartedAt
      if (elapsed < MIN_FORM_TIME) {
        return NextResponse.json(
          { error: "Please take a moment to review your inquiry." },
          { status: 400 }
        )
      }
    }

    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      )
    }

    if (!body.phone?.trim() && !body.email?.trim()) {
      return NextResponse.json(
        { error: "Phone or email is required." },
        { status: 400 }
      )
    }

    if (body.email?.trim() && !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    if (body.email?.trim() && isDisposableEmail(body.email)) {
      return NextResponse.json(
        { error: "Please use a corporate email address." },
        { status: 400 }
      )
    }

    if (!body.inquiryType || !body.commodity || !body.quantity || !body.buyerType || !body.country) {
      return NextResponse.json(
        { error: "Please complete all required steps." },
        { status: 400 }
      )
    }

    const sanitized = {
      inquiryType: sanitize(body.inquiryType),
      commodity: sanitize(body.commodity),
      quantity: sanitize(body.quantity),
      buyerType: sanitize(body.buyerType),
      country: sanitize(body.country),
      name: sanitize(body.name),
      phone: sanitize(body.phone || ""),
      email: sanitize(body.email || ""),
      message: sanitize(body.message || ""),
    }

    const rfqRecord = {
      ...sanitized,
      rfqReference: generateRFQReference(),
      submittedAt: new Date().toISOString(),
      clientIp: ip,
      status: "new",
    }

    console.log("[RFQ_SUBMISSION]", JSON.stringify(rfqRecord, null, 2))

    return NextResponse.json({
      success: true,
      rfqReference: rfqRecord.rfqReference,
      message: "RFQ submitted successfully. Our trading desk will respond within 24 hours.",
    })
  } catch (error) {
    console.error("[RFQ_ERROR]", error)
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    )
  }
}
