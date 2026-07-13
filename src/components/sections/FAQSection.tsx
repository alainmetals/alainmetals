"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { faqItems } from "@/lib/siteData"
import Link from "next/link"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                FAQ
              </span>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-light tracking-[-0.03em] text-white text-center mb-6 sm:mb-12 lg:mb-16" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              Frequently Asked{" "}
              <span className="text-gradient-gold">Questions</span>
            </h2>
          </ScrollReveal>

          <div>
            {faqItems.slice(0, 6).map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.04}>
                <div className="border-b border-gold/[0.06]">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 sm:py-6 lg:py-7 text-left transition-colors cursor-pointer group"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-white/80 text-sm lg:text-base font-light pr-8 leading-relaxed group-hover:text-white/95 transition-colors duration-500">
                      {item.question}
                    </span>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-3.5 h-3.5 text-gold/40 group-hover:text-gold flex-shrink-0 transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 sm:pb-6 lg:pb-7 pl-0">
                          <p className="text-white/55 text-sm lg:text-base leading-[1.8] font-light">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 sm:mt-12 lg:mt-14 text-center">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-gold hover:text-gold-light transition-colors duration-500"
            >
              <span className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-500" />
              View All Questions
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
