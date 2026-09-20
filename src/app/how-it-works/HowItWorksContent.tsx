"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumb } from "@/components/Breadcrumb"
import { howItWorksFaqs } from "@/lib/aeoContent"
import { processSteps } from "@/lib/siteData"

export function HowItWorksContent() {
  return (
    <>
      <JsonLd
        faqs={howItWorksFaqs}
        pageName="How It Works — AL AIN Metals"
        pageDescription="The private gold buying process: consultation, sourcing, independent verification, secure transaction, and Lloyd's-insured delivery."
        pageUrl="https://alainmetalscorp.com/how-it-works"
        pageType="howItWorks"
        breadcrumbs={[
          { name: "Home", url: "https://alainmetalscorp.com" },
          { name: "How It Works", url: "https://alainmetalscorp.com/how-it-works" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "How It Works" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">How It Works</span>
            <h1 className="editorial-headline-sm mb-4">
              How Does the Private Gold Buying Process Work?
            </h1>
            <p className="editorial-subhead max-w-xl">
              The private gold buying process at AL AIN Metals involves five steps: private consultation, sourcing from licensed operations, independent verification by SGS and Bureau Veritas, secure transaction with KYC/AML compliance, and Lloyd&apos;s-insured delivery or custody. Responses begin within 48 business hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20 bg-black-deep">
        <div className="container-luxury">
          <div className="max-w-2xl">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="flex gap-6 sm:gap-8 mb-12 last:mb-0">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center">
                      <span className="text-gold text-base font-light">{step.number}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-3">
                    <h3 className="text-cream text-lg sm:text-xl font-light mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Summary Table */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2 className="editorial-headline-sm text-center mb-10">
                What Happens at Each Stage?
              </h2>
              <div className="glass-card overflow-hidden">
                {[
                  { stage: "Consultation", time: "Within 48 hours", detail: "Discuss objectives, product interest, purchase range" },
                  { stage: "Sourcing", time: "5–15 business days", detail: "Identify suitable gold or gemstones from licensed operations" },
                  { stage: "Verification", time: "3–7 business days", detail: "SGS/Bureau Veritas assay, GIA/GRS certification, provenance docs" },
                  { stage: "Transaction", time: "2–5 business days", detail: "KYC/AML compliance, mutual NDA, documented settlement" },
                  { stage: "Delivery", time: "5–14 business days", detail: "Lloyd's-insured via Brink's/Loomis to your destination" },
                ].map((row, i, arr) => (
                  <div key={row.stage} className={`flex items-center py-4 px-5 ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
                    <div className="w-24 sm:w-32 flex-shrink-0">
                      <span className="text-gold text-xs tracking-[0.1em] uppercase">{row.stage}</span>
                    </div>
                    <div className="w-28 sm:w-36 flex-shrink-0">
                      <span className="text-cream text-xs font-light">{row.time}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-400 text-xs">{row.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection title="Process — Frequently Asked Questions" faqs={howItWorksFaqs} />

      {/* CTA */}
      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-6">Begin Your Private Consultation</h2>
            <p className="editorial-subhead max-w-md mx-auto mb-8">
              Submit a private client enquiry. AL AIN Metals responds within 48 business hours for qualified buyers.
            </p>
            <Link href="/inquire" className="btn-primary">
              Request a Private Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
