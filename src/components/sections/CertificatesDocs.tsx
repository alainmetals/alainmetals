"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { certificateItems } from "@/lib/siteData"

const docIcons = [
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M9 12h6m-3-3v6m-7 5h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
]

export function CertificatesDocs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Documentation
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-4">
            Certificates &amp;{" "}
            <span className="text-gradient-gold font-semibold">Export Documentation</span>
          </h2>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Every shipment includes complete, verified documentation in accordance with international trade standards.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificateItems.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.06}>
              <div className="glass-card-hover rounded-3xl">
                <div className="w-10 h-10 mb-4 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-500">
                  <svg className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={docIcons[index]} />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-sm mb-2 group-hover:text-gold transition-colors duration-500">
                  {item.label}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
