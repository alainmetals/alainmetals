"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { timelineSteps } from "@/lib/siteData"

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`transition-transform duration-250 ease-out ${expanded ? "rotate-180" : ""}`}
    >
      <path
        d="M3 5.5L7 9.5L11 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ExportProcess() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggle = (step: number) => {
    setExpanded((prev) => (prev === step ? null : step))
  }

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
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
            {timelineSteps.map((step) => {
              const isOpen = expanded === step.step
              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col border border-gold/[0.15] bg-white/[0.04] backdrop-blur-sm rounded-lg hover:border-gold/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-serif text-3xl font-extralight text-gold leading-none block mb-4">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-medium text-sm mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed font-light">
                      {step.summary}
                    </p>

                    <button
                      onClick={() => toggle(step.step)}
                      className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-medium text-gold/70 hover:text-gold transition-colors duration-250 self-start cursor-pointer"
                    >
                      {isOpen ? "Read Less" : "Read More"}
                      <ChevronIcon expanded={isOpen} />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gold/[0.08]">
                          <p className="text-white/70 text-xs leading-relaxed font-light pt-4">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Mobile/Tablet: stacked glass cards */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
            {timelineSteps.map((step) => {
              const isOpen = expanded === step.step
              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col border border-gold/[0.15] bg-white/[0.04] backdrop-blur-sm rounded-lg hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="p-5 flex flex-col flex-1">
                    <span className="font-serif text-2xl font-extralight text-gold leading-none block mb-3">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-medium text-sm mb-1.5 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed font-light">
                      {step.summary}
                    </p>

                    <button
                      onClick={() => toggle(step.step)}
                      className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-medium text-gold/70 hover:text-gold transition-colors duration-250 self-start cursor-pointer"
                    >
                      {isOpen ? "Read Less" : "Read More"}
                      <ChevronIcon expanded={isOpen} />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-gold/[0.08]">
                          <p className="text-white/70 text-xs leading-relaxed font-light pt-4">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
