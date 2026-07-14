"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TimelineStep } from "@/types"

interface ProcessAccordionProps {
  steps: TimelineStep[]
  layout?: "grid" | "stacked"
}

export function ProcessAccordion({ steps, layout = "grid" }: ProcessAccordionProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggle = (step: number) => {
    setExpanded((prev) => (prev === step ? null : step))
  }

  if (layout === "stacked") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {steps.map((step) => {
          const isOpen = expanded === step.step
          return (
            <div
              key={step.step}
              className="group relative flex flex-col border border-gold/[0.25] bg-white/[0.04] backdrop-blur-sm rounded-lg min-h-[280px] hover:border-gold/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:gold-shadow-lg transition-all duration-300"
            >
              <div className="p-7 flex flex-col flex-1">
                <span className="font-serif text-5xl opacity-90 text-gold leading-none block mb-5">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <div className="w-12 h-px bg-gold/40 my-4" />
                <p className="text-white/80 text-base leading-relaxed font-light line-clamp-3">
                  {step.summary}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gold/90 text-sm font-light">{step.highlight}</span>
                </div>

                <button
                  onClick={() => toggle(step.step)}
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 border border-gold/40 rounded-md text-xs uppercase tracking-[0.12em] font-medium text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-250 self-start cursor-pointer"
                >
                  {isOpen ? "Read Less" : "Read More"}
                  {isOpen ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
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
                    <div className="px-7 pb-7 border-t border-gold/[0.12]">
                      <p className="text-white/70 text-sm leading-relaxed font-light pt-5">
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
    )
  }

  return (
    <div className="lg:grid lg:grid-cols-5 lg:gap-4">
      {steps.map((step) => {
        const isOpen = expanded === step.step
        return (
          <div
            key={step.step}
            className="group relative flex flex-col border border-gold/[0.25] bg-white/[0.04] backdrop-blur-sm rounded-lg min-h-[340px] hover:border-gold/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:gold-shadow-lg transition-all duration-300"
          >
            <div className="p-7 flex flex-col flex-1">
              <span className="font-serif text-5xl opacity-90 text-gold leading-none block mb-5">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <div className="w-12 h-px bg-gold/40 my-4" />
              <p className="text-white/80 text-base leading-relaxed font-light line-clamp-3">
                {step.summary}
              </p>

              <div className="flex items-center gap-2 mt-4">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gold/90 text-sm font-light">{step.highlight}</span>
              </div>

              <button
                onClick={() => toggle(step.step)}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 border border-gold/40 rounded-md text-xs uppercase tracking-[0.12em] font-medium text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-250 self-start cursor-pointer"
              >
                {isOpen ? "Read Less" : "Read More"}
                {isOpen ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
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
                    <div className="px-7 pb-7 border-t border-gold/[0.12]">
                      <p className="text-white/70 text-sm leading-relaxed font-light pt-5">
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
  )
}
