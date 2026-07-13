"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { timelineSteps } from "@/lib/siteData"

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

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {timelineSteps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <ScrollReveal key={step.step} delay={index * 0.1}>
                  <div className={`relative flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden md:block flex-1 ${isLeft ? "text-right pr-10" : "text-left pl-10"}`}>
                      <span className="text-gold text-[11px] tracking-[0.25em] uppercase font-medium">
                        Step {String(step.step).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl font-semibold text-white mt-1 mb-3 font-serif">{step.title}</h2>
                      <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">{step.description}</p>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-[46px] h-[46px] rounded-full border-2 border-gold bg-black flex items-center justify-center shadow-xl shadow-gold/10">
                        <span className="text-gold font-bold text-sm font-sans">{step.step}</span>
                      </div>
                    </div>

                    <div className="flex-1 md:hidden">
                      <span className="text-gold text-[11px] tracking-[0.25em] uppercase font-medium">
                        Step {String(step.step).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl font-semibold text-white mt-1 mb-3 font-serif">{step.title}</h2>
                      <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        <ScrollReveal className="mt-16">
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
