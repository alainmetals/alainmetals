export type ContactPayload = {
  type: "contact" | "rfq"
  name: string
  email: string
  company?: string
  phone?: string
  product?: string
  quantity?: string
  destination?: string
  message?: string
  website?: string
}

export async function submitContact(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const result = (await response.json().catch(() => null)) as { error?: string } | null
  if (!response.ok) {
    throw new Error(result?.error || "We could not send your inquiry. Please try again or contact us directly.")
  }
}
