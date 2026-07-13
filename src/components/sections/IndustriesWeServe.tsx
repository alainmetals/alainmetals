"use client"

import { ScrollReveal } from "@/components/ScrollReveal"

const industries = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Refineries",
    description: "Refinery-grade gold bars and dore bars meeting LBMA Good Delivery specifications.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Bullion Dealers",
    description: "Competitive pricing on gold bars, nuggets and dust with flexible lot sizes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Banks & Financial Institutions",
    description: "Reserve-grade gold with full documentation for central bank and institutional portfolios.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Jewellery Manufacturers",
    description: "Gold nuggets and dust suitable for manufacturing, casting and artisanal production.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Commodity Traders",
    description: "Structured trade finance options and volume pricing for active trading desks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Institutional Investors",
    description: "Physical gold holdings for portfolio diversification with secure global logistics.",
  },
]

export function IndustriesWeServe() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Who We Serve
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-serif font-light tracking-[-0.03em] text-white mb-6 sm:mb-10 lg:mb-14 max-w-3xl"
              style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}
            >
              Industries{" "}
              <span className="text-gradient-gold">We Serve</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} delay={0.15 + index * 0.06}>
                <div className="group p-6 lg:p-7 border border-gold/[0.1] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-500 rounded-lg h-full">
                  <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-500 mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-white font-medium text-sm mb-2 group-hover:text-gold transition-colors duration-500">
                    {industry.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-light">
                    {industry.description}
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
