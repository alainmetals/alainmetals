"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { timelineSteps } from "@/lib/siteData"
import { ProcessAccordion } from "@/components/ProcessAccordion"

export function ExportProcessContent() {
  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Export Process
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            A Transparent{" "}
            <span className="text-gradient-gold font-semibold">Export Journey</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            A clear, structured process designed for confidence and efficiency at every stage of your gold purchase.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        {/* Desktop: 5-column grid */}
        <div className="hidden lg:block mb-16">
          <ProcessAccordion steps={timelineSteps} layout="grid" />
        </div>

        {/* Mobile/Tablet: stacked cards */}
        <div className="lg:hidden mb-16">
          <ProcessAccordion steps={timelineSteps} layout="stacked" />
        </div>

        <ScrollReveal>
          <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
            <h2 className="text-2xl font-semibold text-white mb-4 font-serif">
              Begin Your Export Journey
            </h2>
            <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
              Contact our trading desk to start the process.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
