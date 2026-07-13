"use client"

import { timelineSteps } from "@/lib/siteData"

export function ExportProcess() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
            <div className="gold-divider" />
            <span className="editorial-caption text-gold/70">
              Our Process
            </span>
          </div>

          <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-6 sm:mb-12 lg:mb-16 max-w-3xl" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
            A Transparent{" "}
            <span className="text-gradient-gold">Export Journey</span>
          </h2>

          <div className="space-y-0">
            {timelineSteps.map((step, index) => (
              <div key={step.step} className="group relative py-5 sm:py-8 border-b border-gold/[0.1] flex gap-4 sm:gap-8 items-start">
                <div className="shrink-0 w-12 sm:w-16 flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-4xl font-extralight text-gold leading-none">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-gold/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-white font-medium text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
