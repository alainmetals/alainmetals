"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumb } from "@/components/Breadcrumb"
import { goldFaqs } from "@/lib/aeoContent"

const tabs = ["Bars", "Nuggets", "Dust"] as const
type Tab = (typeof tabs)[number]

const tabContent: Record<Tab, { image: string; title: string; description: string; specs: { label: string; value: string }[]; features: string[] }> = {
  Bars: {
    image: "/assets/images/investment-grade-gold-bars.webp",
    title: "Investment-Grade Gold Bars",
    description:
      "AL AIN Metals supplies investment-grade gold bars sourced from licensed artisanal mining operations in the Kilimanjaro Gold Belt of Tanzania. Each bar is independently assayed by SGS or Bureau Veritas to confirm purity of 99.5% to 99.99%, with full provenance documentation and assay certificate included.",
    specs: [
      { label: "Purity", value: "99.5% – 99.99%" },
      { label: "Assay Labs", value: "SGS, Bureau Veritas" },
      { label: "Source", value: "Kilimanjaro Gold Belt, Tanzania" },
      { label: "Documentation", value: "Assay certificate + provenance" },
      { label: "Insurance", value: "Lloyd's of London" },
    ],
    features: [
      "Independently assayed to 99.5%–99.99% purity",
      "Full provenance documentation from licensed operations",
      "SGS and Bureau Veritas laboratory certification",
      "Lloyd's-of-London-insured delivery via Brink's or Loomis",
    ],
  },
  Nuggets: {
    image: "/assets/images/natural-african-gold-nuggets.webp",
    title: "Natural Gold Nuggets",
    description:
      "Authentic African gold nuggets naturally formed in the Kilimanjaro Gold Belt. Each nugget is independently tested for purity and verified for origin through GPS-tagged traceability from licensed artisanal mining operations.",
    specs: [
      { label: "Formation", value: "Natural alluvial" },
      { label: "Purity", value: "Varies (typically 85%–95%)" },
      { label: "Source", value: "Kilimanjaro Gold Belt, Tanzania" },
      { label: "Verification", value: "Independent testing" },
      { label: "Documentation", value: "Origin certificate" },
    ],
    features: [
      "Naturally formed in the Kilimanjaro Gold Belt",
      "Independently tested for purity and origin",
      "GPS-tagged traceability from licensed mining",
      "Available in various sizes and weights",
    ],
  },
  Dust: {
    image: "/assets/images/premium-gold-dust-supplier.webp",
    title: "Premium Gold Dust",
    description:
      "Finely recovered gold dust from licensed artisanal mining operations in Tanzania. Each batch is independently tested to confirm purity and grade, with full documentation of source and processing methodology.",
    specs: [
      { label: "Form", value: "Fine particles" },
      { label: "Purity", value: "Independently tested" },
      { label: "Source", value: "Licensed artisanal mining, Tanzania" },
      { label: "Verification", value: "SGS / Bureau Veritas" },
      { label: "Quantities", value: "Various available" },
    ],
    features: [
      "Independently tested for purity and grade",
      "Sourced from licensed artisanal operations",
      "Full documentation of source and processing",
      "Available in various quantities",
    ],
  },
}

export function GoldContent() {
  const [activeTab, setActiveTab] = useState<Tab>("Bars")
  const content = tabContent[activeTab]

  return (
    <>
      <JsonLd
        faqs={goldFaqs}
        pageName="Gold for Private Clients — AL AIN Metals"
        pageDescription="Investment-grade physical gold bars, nuggets, and dust from the Kilimanjaro Gold Belt. Independently assayed to 99.5%–99.99% purity. Minimum allocation $250,000."
        pageUrl="https://alainmetalscorp.com/gold"
        pageType="gold"
        breadcrumbs={[
          { name: "Home", url: "https://alainmetalscorp.com" },
          { name: "Gold", url: "https://alainmetalscorp.com/gold" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Gold" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Physical Gold</span>
            <h1 className="editorial-headline-sm mb-4">
              What Types of Gold Does AL AIN Metals Sell?
            </h1>
            <p className="editorial-subhead max-w-xl">
              AL AIN Metals supplies investment-grade physical gold in three forms — bars, nuggets, and dust — sourced from licensed artisanal mining operations in the Kilimanjaro Gold Belt of Tanzania. All gold is independently assayed to 99.5%–99.99% purity by SGS and Bureau Veritas, with full provenance documentation included.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs + Image + Content */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <ScrollReveal>
            {/* Tabs */}
            <div className="flex gap-6 sm:gap-8 mb-8 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-[11px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 border-b-2 -mb-px ${
                    activeTab === tab
                      ? "text-gold border-gold"
                      : "text-gray-400 border-transparent hover:text-cream"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image */}
            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden mb-8">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Content */}
            <div className="max-w-2xl">
              <h2 className="editorial-headline-sm mb-4">{content.title}</h2>
              <p className="editorial-subhead mb-6">{content.description}</p>

              {/* Specs Table */}
              <div className="mb-8">
                <h3 className="text-cream text-xs tracking-[0.15em] uppercase mb-4">Specifications</h3>
                <div className="glass-card overflow-hidden">
                  {content.specs.map((spec, i) => (
                    <div key={spec.label} className={`flex justify-between items-center py-3 px-5 ${i < content.specs.length - 1 ? 'border-b border-border' : ''}`}>
                      <span className="text-gray-400 text-xs">{spec.label}</span>
                      <span className="text-cream text-xs font-light">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {content.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="editorial-headline-sm mb-6">
                How Is Gold Verified and Delivered?
              </h2>
              <p className="editorial-subhead max-w-xl mx-auto mb-8">
                Every gold acquisition undergoes independent assaying by SGS or Bureau Veritas. Documentation includes assay certificates, provenance records, and chain of custody verification. Delivery is handled by Brink&apos;s or Loomis, insured by Lloyd&apos;s of London.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "SGS Assay", desc: "International laboratory testing for 99.5%–99.99% purity" },
                  { title: "Bureau Veritas", desc: "Independent certification of weight, purity, and origin" },
                  { title: "Lloyd's Insurance", desc: "Full transit coverage from source to destination" },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-5">
                    <h3 className="text-cream text-sm font-light mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection title="Gold — Frequently Asked Questions" faqs={goldFaqs} />

      {/* CTA */}
      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-6">Request Private Access to Gold</h2>
            <p className="editorial-subhead max-w-md mx-auto mb-8">
              Private consultations are available for qualified buyers seeking physical gold from $250,000 minimum allocation.
            </p>
            <Link href="/inquire" className="btn-primary">
              Request Private Access
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
