"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { timelineSteps } from "@/lib/siteData"
import Link from "next/link"

export function TradingProcess() {
  return (
    <section className="py-28 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Trading Process
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-4">
            How We{" "}
            <span className="text-gradient-gold font-semibold">Work With You</span>
          </h2>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            A transparent, structured process from initial inquiry through to final delivery.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent hidden md:block" />

          <div className="space-y-10 md:space-y-16">
            {timelineSteps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <ScrollReveal key={step.step} delay={index * 0.1} direction={isLeft ? "left" : "right"}>
                  <div className="relative flex items-start gap-6 md:gap-0">
                    <div className="hidden md:flex md:w-1/2 md:pr-12 md:justify-end">
                      {isLeft && (
                        <div className="text-right">
                          <span className="text-gold text-[11px] tracking-[0.25em] uppercase font-medium">Step {String(step.step).padStart(2,"0")}</span>
                          <h3 className="text-xl font-semibold text-white mt-1 mb-3 font-serif">{step.title}</h3>
                          <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">{step.description}</p>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="w-[46px] h-[46px] rounded-full border-2 border-gold bg-black flex items-center justify-center shadow-xl shadow-gold/10">
                        <span className="text-gold font-bold text-sm font-sans">{step.step}</span>
                      </div>
                    </div>

                    <div className="flex-1 md:w-1/2 md:pl-12">
                      <div className={`${isLeft ? 'md:hidden' : ''}`}>
                        <span className="text-gold text-[11px] tracking-[0.25em] uppercase font-medium">Step {String(step.step).padStart(2,"0")}</span>
                        <h3 className="text-xl font-semibold text-white mt-1 mb-3 font-serif">{step.title}</h3>
                        <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        <ScrollReveal className="mt-16 text-center">
          <Link
            href="/export-process"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-gold hover:text-gold-light transition-colors"
          >
            View Detailed Export Process
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
