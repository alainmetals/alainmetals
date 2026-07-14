"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { timelineSteps } from "@/lib/siteData"
import Link from "next/link"

export function ExportProcess() {
  return (
    <section className="bg-black">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Our Process
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-serif font-light tracking-[-0.03em] text-white mb-6 sm:mb-10 lg:mb-14 max-w-3xl"
              style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}
            >
              A Transparent{" "}
              <span className="text-gradient-gold">Export Journey</span>
            </h2>
          </ScrollReveal>

          {/* Desktop: 5-column grid */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
            {timelineSteps.map((step) => (
              <ScrollReveal key={step.step} delay={0.15 + step.step * 0.08}>
                <div className="group relative flex flex-col border border-gold/[0.15] bg-white/[0.02] rounded-lg min-h-[360px] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-serif text-4xl text-gold leading-none opacity-80">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-px bg-gold/30" />
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gold text-sm font-medium">{step.highlight}</span>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed font-light mb-4">
                      {step.summary}
                    </p>

                    <div className="mt-auto pt-4">
                      <Link
                        href="/export-process"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-medium text-gold/60 hover:text-gold transition-colors duration-300"
                      >
                        Read More
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile/Tablet: stacked grid */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timelineSteps.map((step) => (
              <ScrollReveal key={step.step} delay={0.1 + step.step * 0.06}>
                <div className="group relative flex flex-col border border-gold/[0.15] bg-white/[0.02] rounded-lg min-h-[280px] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-serif text-4xl text-gold leading-none opacity-80">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-px bg-gold/30" />
                    </div>

                    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gold text-sm font-medium">{step.highlight}</span>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed font-light mb-4">
                      {step.summary}
                    </p>

                    <div className="mt-auto pt-4">
                      <Link
                        href="/export-process"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-medium text-gold/60 hover:text-gold transition-colors duration-300"
                      >
                        Read More
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
              <Link
                href="/export-process"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-sm uppercase tracking-[0.15em] font-medium text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
              >
                View the Complete Export Process
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
