"use client"

import { ScrollReveal } from "@/components/ScrollReveal"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title?: string
  faqs: FaqItem[]
}

export function FaqSection({ title = "Frequently Asked Questions", faqs }: FaqSectionProps) {
  return (
    <section className="section-pad bg-black relative" itemScope itemType="https://schema.org/FAQPage">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="container-luxury">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="editorial-headline-sm text-center mb-12">{title}</h2>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-border py-6"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3
                    className="text-cream text-base sm:text-lg font-light mb-3 cursor-default"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="text-gray-400 text-sm leading-relaxed"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
