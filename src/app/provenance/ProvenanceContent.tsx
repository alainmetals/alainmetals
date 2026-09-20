"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Breadcrumb } from "@/components/Breadcrumb"

export function ProvenanceContent() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Provenance" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Provenance</span>
            <h1 className="editorial-headline-sm mb-4">
              From the Merelani Hills<br />to Your Vault
            </h1>
            <p className="editorial-subhead max-w-xl">
              Documented chain of custody for every precious metal and gemstone. Ethical extraction. Verified origin.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="editorial-caption text-gold/70 block mb-4">Tanzanite</span>
                <h2 className="editorial-headline-sm mb-4">The Merelani Hills</h2>
                <p className="editorial-subhead mb-6">
                  The world&apos;s only commercial tanzanite deposit, located in the Merelani Hills of northern Tanzania.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Formed over 585 million years ago, tanzanite is estimated to be a thousand times rarer than diamond.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-card p-6 space-y-4">
                {[
                  { label: "Deposit Age", value: "585 Million Years" },
                  { label: "Known Origin", value: "Merelani Hills, Tanzania" },
                  { label: "Certification", value: "GIA / GRS" },
                  { label: "Traceability", value: "GPS-Tagged" },
                  { label: "Scarcity", value: "World's Only Commercial Source" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="text-cream text-xs font-light">{item.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="glass-card p-6 space-y-4 order-2 lg:order-1">
                {[
                  { label: "Gold Belt", value: "Kilimanjaro Region" },
                  { label: "Source", value: "Licensed Artisanal Mining" },
                  { label: "Purity", value: "99.5% – 99.99%" },
                  { label: "Verification", value: "SGS / Bureau Veritas" },
                  { label: "Storage", value: "Allocated, Insured" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="text-cream text-xs font-light">{item.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="order-1 lg:order-2">
                <span className="editorial-caption text-gold/70 block mb-4">Gold</span>
                <h2 className="editorial-headline-sm mb-4">Kilimanjaro Gold Belt</h2>
                <p className="editorial-subhead mb-6">
                  Sourced from the Kilimanjaro Gold Belt, one of East Africa&apos;s most significant gold-producing regions.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All gold is sourced through licensed artisanal mining operations, independently assayed, and documented with full provenance records.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="editorial-headline-sm mb-4">Mine-to-Market Traceability</h2>
              <p className="editorial-subhead max-w-lg mx-auto">
                Every acquisition follows a documented chain of custody from extraction to delivery.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { step: "01", title: "Extraction", desc: "Licensed, verified sourcing" },
              { step: "02", title: "Verification", desc: "Independent assaying" },
              { step: "03", title: "Transfer", desc: "Secure, insured logistics" },
              { step: "04", title: "Allocation", desc: "Private custody or delivery" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold text-sm font-light">{item.step}</span>
                  </div>
                  <h3 className="text-cream text-sm font-light mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-6">Request Private Access</h2>
            <p className="editorial-subhead max-w-md mx-auto mb-8">
              For qualified buyers seeking verified precious metals and gemstones.
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
