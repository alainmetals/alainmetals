import { NextResponse } from "next/server"
import { cleanContactValue as clean, validateContactIdentity } from "@/lib/contactValidation"

type ContactRequest = {
  type?: "contact" | "rfq"
  name?: string
  email?: string
  company?: string
  phone?: string
  product?: string
  quantity?: string
  destination?: string
  message?: string
  website?: string
}

export async function POST(request: Request) {
  let body: ContactRequest
  try {
    body = (await request.json()) as ContactRequest
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (clean(body.website)) return NextResponse.json({ ok: true })

  const { name, email, valid } = validateContactIdentity(body.name, body.email)
  const message = clean(body.message)
  if (!valid) {
    return NextResponse.json({ error: "Please provide a valid name and email address." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_TO_EMAIL
  const sender = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !recipient || !sender) {
    console.error("Contact email service is not configured.")
    return NextResponse.json(
      { error: "Online inquiries are temporarily unavailable. Please email info@alainmetalscorp.com directly." },
      { status: 503 },
    )
  }

  const fields = [
    ["Name", name], ["Email", email], ["Company", clean(body.company, 200)],
    ["Phone", clean(body.phone, 80)], ["Product", clean(body.product, 120)],
    ["Quantity", clean(body.quantity, 120)], ["Destination", clean(body.destination, 200)],
    ["Message", message],
  ].filter(([, value]) => value)
  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n")
  const subject = body.type === "rfq" ? `Website RFQ — ${clean(body.product, 120) || "General"}` : "Website trade inquiry"

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: sender, to: [recipient], reply_to: email, subject, text }),
  })
  if (!response.ok) {
    console.error("Email provider rejected contact request:", response.status)
    return NextResponse.json({ error: "We could not send your inquiry. Please email us directly." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
