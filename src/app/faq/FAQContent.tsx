"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { faqItems } from "@/lib/siteData"
import Link from "next/link"

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            FAQ
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Frequently Asked{" "}
            <span className="text-gradient-gold font-semibold">Questions</span>
          </h1>
          <div className="gold-divider mx-auto" />
        </ScrollReveal>

        <div className="space-y-2.5">
          {faqItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.04}>
              <div className="glass-card-hover rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left transition-colors cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white/90 text-sm font-medium pr-4 leading-snug">
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-gold flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                        <div className="w-8 h-px bg-gold/30 mb-4" />
                        <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">
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

        <ScrollReveal className="mt-12">
          <div className="text-center glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-xl font-semibold text-white mb-3 font-serif">
              Still Have Questions?
            </h2>
            <p className="text-white/95 text-sm lg:text-base leading-[1.7] mb-6 font-light">
              Our trading desk is ready to assist with any additional inquiries.
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
