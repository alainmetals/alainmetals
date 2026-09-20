import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description:
    "Terms and conditions for private client engagements with AL AIN Metals. Principal-to-principal verification required.",
  alternates: {
    canonical: "https://alainmetalscorp.com/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <span className="editorial-caption text-gold/70 block mb-4">Legal</span>
            <h1 className="editorial-headline-sm mb-6">
              Terms of Engagement
            </h1>
            <div className="gold-divider mb-8" />
            <div className="max-w-2xl space-y-8">
              {[
                {
                  title: "Scope of Services",
                  text: "AL AIN Metals provides private acquisition services for precious metals and gemstones. All services are subject to the terms outlined herein.",
                },
                {
                  title: "Client Qualification",
                  text: "Services are available to ultra-high-net-worth individuals, family offices, private bank desks, and sovereign entities. We do not engage with brokers, mandates, or intermediaries.",
                },
                {
                  title: "Minimum Allocation",
                  text: "Standard minimum allocation is USD $250,000. Trial allocations from $50,000 may be available for verified family offices and private bank desks.",
                },
                {
                  title: "Non-Disclosure",
                  text: "A mutual non-disclosure agreement is required prior to any transaction discussion.",
                },
                {
                  title: "Verification & Compliance",
                  text: "Full AML/KYC compliance is mandatory. All clients must provide verifiable identification and source of funds documentation.",
                },
                {
                  title: "Pricing & Availability",
                  text: "All pricing is indicative and subject to market conditions. Availability is not guaranteed until confirmed in writing.",
                },
                {
                  title: "Limitation of Liability",
                  text: "AL AIN Metals liability is limited to the value of the specific transaction in question.",
                },
                {
                  title: "Governing Law",
                  text: "These terms are governed by the laws of Tanzania. Any disputes shall be resolved through arbitration in Dar es Salaam.",
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-3">{section.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{section.text}</p>
                </div>
              ))}

              <p className="text-gray-500 text-[11px]">Last updated: 2025.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
