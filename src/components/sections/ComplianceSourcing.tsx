"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { complianceHighlights, images } from "@/lib/siteData"
import Link from "next/link"

export function ComplianceSourcing() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden mb-16 lg:mb-20 shadow-2xl gold-shadow-lg">
          <OptimizedImage src={images.compliance} alt="Gold export compliance documentation" fill objectPosition="center" />
        </div>
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Compliance
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-4">
            Compliance &amp;{" "}
            <span className="text-gradient-gold font-semibold">Responsible Sourcing</span>
          </h2>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            We maintain rigorous compliance and due diligence standards across our entire African sourcing network.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {complianceHighlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="glass-card-hover rounded-3xl flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/30 transition-all duration-500">
                  <svg className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium text-base mb-2 group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href="/compliance"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-gold hover:text-gold-light transition-colors"
          >
            View Full Compliance Framework
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
