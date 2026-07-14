"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import Link from "next/link"

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
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-10 lg:mb-14">
              <h2
                className="font-serif font-light tracking-[-0.03em] text-white max-w-3xl"
                style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}
              >
                Industries{" "}
                <span className="text-gradient-gold">We Serve</span>
              </h2>
              <Link
                href="/industries"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-medium text-gold/60 hover:text-gold transition-colors duration-300 shrink-0"
              >
                View All
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} delay={0.15 + index * 0.06}>
                <div className="group p-6 lg:p-7 border border-gold/[0.1] bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold/20 transition-all duration-500 h-full">
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
