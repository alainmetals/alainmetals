"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { whyBuyersChooseUs } from "@/lib/siteData"
import Link from "next/link"

export function WhyBuyersChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-gold/[0.015] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div>
              <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
                Why International Buyers Choose Us
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-6">
            Built for{" "}
            <span className="text-gradient-gold font-semibold">Global Buyers</span>
          </h2>
              <div className="gold-divider mb-8" />
              <p className="text-white/95 text-base lg:text-lg leading-[1.7] mb-6 font-light">
                International refineries, bullion dealers, banks and institutional investors
                partner with us for our commitment to compliance, transparency and reliable
                delivery across African markets.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-gold hover:text-gold-light transition-colors"
              >
                Learn More About Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ul className="space-y-5">
              {whyBuyersChooseUs.map((reason, index) => (
                <li key={index} className="glass-card-hover rounded-3xl flex gap-4 items-start group p-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center mt-0.5 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light group-hover:text-white transition-colors duration-500">
                    {reason}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
