"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumb } from "@/components/Breadcrumb"
import { gemstoneFaqs } from "@/lib/aeoContent"
import { gemstoneTypes } from "@/lib/siteData"

export function GemstonesContent() {
  return (
    <>
      <JsonLd
        faqs={gemstoneFaqs}
        pageName="Exceptional African Gemstones — AL AIN Metals"
        pageDescription="Tanzanite, ruby, emerald, and sapphire from African origins. GIA/GRS certified. Tanzanite from the world's only commercial source."
        pageUrl="https://alainmetalscorp.com/gemstones"
        pageType="gemstones"
        breadcrumbs={[
          { name: "Home", url: "https://alainmetalscorp.com" },
          { name: "Gemstones", url: "https://alainmetalscorp.com/gemstones" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Gemstones" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Rare Gemstones</span>
            <h1 className="editorial-headline-sm mb-4">
              What Gemstones Does AL AIN Metals Offer?
            </h1>
            <p className="editorial-subhead max-w-xl">
              AL AIN Metals offers tanzanite, ruby, emerald, and sapphire sourced from African origins. Tanzanite comes exclusively from the Merelani Hills of Tanzania — the world&apos;s only commercial tanzanite source, estimated to be 585 million years old and approximately 1,000 times rarer than diamond. All gemstones are GIA or GRS certified.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Image + Gemstone List */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <ScrollReveal>
              <div className="aspect-square overflow-hidden">
                <img
                  src="/assets/images/premium-tanzanite-gemstones.webp"
                  alt="Exceptional African tanzanite gemstones from the Merelani Hills — the world's only commercial tanzanite source, 585 million years old"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Gemstone List */}
            <ScrollReveal delay={200}>
              <div className="space-y-0">
                {gemstoneTypes.map((stone) => (
                  <div
                    key={stone.slug}
                    className="py-5 border-b border-border group cursor-pointer hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-cream text-base sm:text-lg font-light tracking-wide group-hover:text-gold transition-colors">
                        {stone.name}
                      </h3>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-gray-500 group-hover:text-gold transition-colors flex-shrink-0"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {stone.description}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <span className="text-gray-500 text-[10px] tracking-[0.1em] uppercase">Origin: {stone.origin}</span>
                      <span className="text-gray-500 text-[10px] tracking-[0.1em] uppercase">Cert: {stone.certification}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="editorial-headline-sm text-center mb-10">
                How Does AL AIN Metals Verify Gemstones?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Tanzanite — World's Only Commercial Source",
                    desc: "Found exclusively in the Merelani Hills of northern Tanzania. The deposit formed 585 million years ago. Tanzanite is approximately 1,000 times rarer than diamond and is expected to be depleted within decades.",
                  },
                  {
                    title: "GIA & GRS Certification",
                    desc: "Every gemstone is accompanied by certification from the Gemological Institute of America (GIA) or GemResearch Swisslab (GRS), confirming authenticity, quality grade, origin, and treatment status.",
                  },
                  {
                    title: "Documented Provenance",
                    desc: "Complete chain of custody documentation from extraction to delivery. GPS-tagged traceability for tanzanite. Independent verification of origin, quality, and authenticity for all gemstones.",
                  },
                  {
                    title: "Private Acquisition Only",
                    desc: "Gemstones are available exclusively through private consultation for qualified buyers. No retail sales or mass-market distribution. Each acquisition is handled with discretion and personalized service.",
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-6">
                    <h3 className="text-cream text-sm font-light mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 bg-black-deep">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <div className="glass-card inline-block px-10 py-6">
              <p className="text-cream text-sm tracking-[0.15em] uppercase font-light">
                Natural Beauty.<span className="text-gold ml-2">Lasting Value.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection title="Gemstones — Frequently Asked Questions" faqs={gemstoneFaqs} />

      {/* CTA */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-6">Request Private Access to Gemstones</h2>
            <p className="editorial-subhead max-w-md mx-auto mb-8">
              Private consultations are available for qualified buyers seeking rare African gemstones with GIA/GRS certification.
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
