"use client"

import { timelineSteps } from "@/lib/siteData"
import { ProcessAccordion } from "@/components/ProcessAccordion"

export function ExportProcess() {
  return (
    <section className="bg-black">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
            <div className="gold-divider" />
            <span className="editorial-caption text-gold/70">
              Our Process
            </span>
          </div>

          <h2
            className="font-serif font-light tracking-[-0.03em] text-white mb-6 sm:mb-10 lg:mb-14 max-w-3xl"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}
          >
            A Transparent{" "}
            <span className="text-gradient-gold">Export Journey</span>
          </h2>

          {/* Desktop: 5-column glass cards */}
          <div className="hidden lg:block">
            <ProcessAccordion steps={timelineSteps} layout="grid" />
          </div>

          {/* Mobile/Tablet: stacked glass cards */}
          <div className="lg:hidden">
            <ProcessAccordion steps={timelineSteps} layout="stacked" />
          </div>
        </div>
      </div>
    </section>
  )
}
