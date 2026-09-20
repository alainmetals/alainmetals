import { NextRequest, NextResponse } from "next/server"

interface InquirePayload {
  type: string
  fullName: string
  companyName: string
  email: string
  phone: string
  clientType: string
  allocationSize: string
  assetOfInterest: string[]
  vaultLocation: string
  message: string
  directBuyer: boolean
  agreeNDA: boolean
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DISPOSABLE_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "aol.com", "icloud.com", "mail.com", "protonmail.com", "zoho.com",
  "yandex.com", "gmx.com", "fastmail.com",
]
const MAX_INPUT_LENGTH = 500
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 5

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

function generateReference(): string {
  const now = new Date()
  const year = now.getFullYear().toString().slice(-2)
  const month = (now.getMonth() + 1).toString().padStart(2, "0")
  const random = Math.random().toString(36).substring(2, 7).toUpperCase()
  return `AMC-${year}${month}-${random}`
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

    const body: InquirePayload = await request.json()

    if (!body.fullName?.trim()) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 })
    }

    if (!body.companyName?.trim()) {
      return NextResponse.json({ error: "Company name is required." }, { status: 400 })
    }

    if (!body.email?.trim() || !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json({ error: "Valid corporate email is required." }, { status: 400 })
    }

    if (isDisposableEmail(body.email)) {
      return NextResponse.json(
        { error: "Please use a corporate or institutional email domain." },
        { status: 400 }
      )
    }

    if (!body.phone?.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 })
    }

    if (!body.clientType || !body.allocationSize || !body.vaultLocation) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 })
    }

    if (!body.directBuyer) {
      return NextResponse.json(
        { error: "You must confirm you are a direct buyer or authorized representative." },
        { status: 400 }
      )
    }

    if (!body.agreeNDA) {
      return NextResponse.json(
        { error: "You must agree to NDA and KYC procedures." },
        { status: 400 }
      )
    }

    const record = {
      type: "private-client-inquiry",
      fullName: sanitize(body.fullName),
      companyName: sanitize(body.companyName),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      clientType: sanitize(body.clientType),
      allocationSize: sanitize(body.allocationSize),
      assetOfInterest: body.assetOfInterest.map(sanitize),
      vaultLocation: sanitize(body.vaultLocation),
      message: sanitize(body.message || ""),
      reference: generateReference(),
      submittedAt: new Date().toISOString(),
      clientIp: ip,
      status: "new",
    }

    console.log("[PRIVATE_CLIENT_INQUIRY]", JSON.stringify(record, null, 2))

    return NextResponse.json({
      success: true,
      reference: record.reference,
      message: "Your inquiry has been routed to our Private Client Relations team. Response within 48 business hours.",
    })
  } catch (error) {
    console.error("[INQUIRY_ERROR]", error)
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    )
  }
}
