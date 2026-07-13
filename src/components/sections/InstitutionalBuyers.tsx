"use client"

import { ScrollReveal } from "@/components/ScrollReveal"

const reasons = [
  {
    number: "01",
    title: "Verified Sourcing",
    description:
      "Every bar traceable to licensed mining operations. Full chain-of-custody documentation from source to shipment.",
  },
  {
    number: "02",
    title: "Independent Assaying",
    description:
      "Third-party laboratory verification. Assay certificates and weight reports shared before payment.",
  },
  {
    number: "03",
    title: "OECD Aligned Process",
    description:
      "Due diligence framework aligned with OECD Guidance for Responsible Supply Chains of Minerals.",
  },
  {
    number: "04",
    title: "Institutional Capacity",
    description:
      "Structured to handle volume. Multi-tonne monthly capacity with logistics for global delivery.",
  },
  {
    number: "05",
    title: "Banking Channels",
    description:
      "Payment through established international banking channels. Escrow and structured settlement options.",
  },
  {
    number: "06",
    title: "Dedicated Desk",
    description:
      "Single point of contact for your account. Response within 24 hours on all inquiries.",
  },
]

export function InstitutionalBuyers() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                For Institutional Buyers
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-serif font-light tracking-[-0.03em] text-white mb-6 sm:mb-10 lg:mb-14 max-w-3xl"
              style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}
            >
              Why Institutional Buyers{" "}
              <span className="text-gradient-gold">Choose AL AIN</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.number} delay={0.15 + index * 0.06}>
                <div className="group p-6 lg:p-7 border border-gold/[0.1] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-500 rounded-lg h-full">
                  <span className="font-serif text-2xl font-extralight text-gold/40 group-hover:text-gold/70 transition-colors duration-500 block mb-4">
                    {reason.number}
                  </span>
                  <h3 className="text-white font-medium text-sm mb-2 group-hover:text-gold transition-colors duration-500">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
