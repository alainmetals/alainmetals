"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Breadcrumb } from "@/components/Breadcrumb"

export function InquireContent() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: "",
    country: "",
    interestedIn: "",
    purchaseRange: "",
    timeline: "",
    preferredContact: "",
    additionalInfo: "",
    directBuyer: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.directBuyer) return
    setLoading(true)

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "private-client",
          fullName: form.fullName,
          companyName: "",
          email: "",
          phone: "",
          clientType: "Private Individual",
          allocationSize: form.purchaseRange,
          assetOfInterest: [form.interestedIn],
          vaultLocation: "",
          message: `Country: ${form.country}\nTimeline: ${form.timeline}\nContact: ${form.preferredContact}\n${form.additionalInfo}`,
          directBuyer: form.directBuyer,
          agreeNDA: true,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="pt-28 sm:pt-32 pb-20 bg-black-deep min-h-screen flex items-center">
        <div className="container-luxury text-center">
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
              <polyline points="20,6 9,17 4,12" />
            </svg>
          </div>
          <h1 className="editorial-headline-sm mb-4">Enquiry Received</h1>
          <p className="editorial-subhead max-w-md mx-auto mb-8">
            Thank you for your private client enquiry. We will respond within 48 business hours.
          </p>
          <Link href="/" className="btn-primary inline-flex">
            Return Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="pt-28 sm:pt-32 pb-10 bg-black-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_90%_10%,rgba(212,175,97,.22),transparent_38%)]" />
        <div className="container-luxury relative">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Contact" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Private Client Enquiry</span>
            <h1 className="editorial-headline-sm mb-4">
              Request<br />Private Access
            </h1>
            <p className="editorial-subhead max-w-lg">
              Private consultations are available for qualified buyers seeking physical precious metals and rare African gemstones.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 bg-black-deep">
        <div className="container-luxury">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="luxury-panel max-w-xl p-5 sm:p-8 space-y-3">
              <div>
                <input type="text" name="fullName" placeholder="Full Name" required value={form.fullName} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <input type="text" name="country" placeholder="Country of Residence" required value={form.country} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <select name="interestedIn" required value={form.interestedIn} onChange={handleChange} className="form-select">
                  <option value="" disabled>Interested In</option>
                  <option value="Physical Gold">Physical Gold</option>
                  <option value="Rare Gemstones">Rare Gemstones</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <select name="purchaseRange" required value={form.purchaseRange} onChange={handleChange} className="form-select">
                  <option value="" disabled>Indicative Purchase Range</option>
                  <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                  <option value="$100,000 – $250,000">$100,000 – $250,000</option>
                  <option value="$250,000 – $500,000">$250,000 – $500,000</option>
                  <option value="$500,000 – $1M">$500,000 – $1M</option>
                  <option value="$1M – $5M">$1M – $5M</option>
                  <option value="$5M+">$5M+</option>
                </select>
              </div>
              <div>
                <select name="timeline" value={form.timeline} onChange={handleChange} className="form-select">
                  <option value="" disabled>Expected Purchase Timeline</option>
                  <option value="Immediate">Immediate</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="1–3 Months">1–3 Months</option>
                  <option value="Exploring">Exploring</option>
                </select>
              </div>
              <div>
                <select name="preferredContact" value={form.preferredContact} onChange={handleChange} className="form-select">
                  <option value="" disabled>Preferred Contact</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
              </div>
              <div>
                <textarea name="additionalInfo" placeholder="Additional Information (Optional)" rows={3} value={form.additionalInfo} onChange={handleChange} className="form-input resize-none" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" name="directBuyer" checked={form.directBuyer} onChange={handleChange} className="mt-1 w-4 h-4 accent-[#C9A96E] bg-transparent border border-gold/30 rounded-sm flex-shrink-0" required />
                <label className="text-gray-400 text-xs leading-relaxed">
                  I confirm I am a direct buyer or an authorized professional representative. AL AIN Metals does not engage broker chains or intermediary mandates.
                </label>
              </div>
              <div className="pt-4">
                <button type="submit" disabled={!form.directBuyer || loading} className="btn-primary w-full justify-center disabled:opacity-30 disabled:cursor-not-allowed">
                  {loading ? "Submitting..." : "Request Consultation"}
                  {!loading && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
