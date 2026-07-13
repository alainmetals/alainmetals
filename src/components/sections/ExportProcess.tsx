"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { timelineSteps } from "@/lib/siteData"

export function ExportProcess() {
  return (
    <section className="bg-black overflow-hidden">
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
            <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-6 sm:mb-10 lg:mb-14 max-w-3xl" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              A Transparent{" "}
              <span className="text-gradient-gold">Export Journey</span>
            </h2>
          </ScrollReveal>

          {/* Desktop: 5-column horizontal timeline */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-0">
            {timelineSteps.map((step, index) => (
              <div key={step.step} className="relative px-6 py-0 border-r border-gold/[0.08] last:border-r-0">
                <div className="flex flex-col items-center mb-6">
                  <span className="font-serif text-4xl font-extralight text-gold leading-none mb-4">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute top-5 left-[calc(50%+24px)] right-0 h-px bg-gradient-to-r from-gold/30 to-gold/10" />
                  )}
                </div>
                <h3 className="text-white font-medium text-base mb-3 group-hover:text-gold transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: stacked vertical cards */}
          <div className="lg:hidden space-y-0">
            {timelineSteps.map((step, index) => (
              <div key={step.step} className="group relative py-5 sm:py-6 border-b border-gold/[0.08] flex gap-4 sm:gap-6 items-start">
                <div className="shrink-0 w-12 sm:w-14 flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl font-extralight text-gold leading-none">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-px flex-1 min-h-[32px] bg-gradient-to-b from-gold/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-white font-medium text-base sm:text-lg mb-2 group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
