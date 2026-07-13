"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { company } from "@/lib/siteData"

export function RequestQuoteCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Get Started
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-6">
            Ready to Source Premium Gold{" "}
            <span className="text-gradient-gold font-semibold">From Africa?</span>
          </h2>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto mb-10 font-light">
            Contact our trading desk to discuss your requirements. We respond to all
            inquiries promptly.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group relative px-9 py-4 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm overflow-hidden transition-all duration-300 hover:bg-gold-light shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              <span className="relative z-10">Request a Quote</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="group px-9 py-4 text-sm uppercase tracking-[0.15em] font-medium rounded-sm border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {company.phone}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
          </div>
          <p className="text-white/95 text-[11px] tracking-wider uppercase mt-6">
            Institutional &amp; trade inquiries welcome
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
