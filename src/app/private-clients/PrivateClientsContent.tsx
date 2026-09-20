"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumb } from "@/components/Breadcrumb"
import { privateClientFaqs } from "@/lib/aeoContent"

export function PrivateClientsContent() {
  return (
    <>
      <JsonLd
        faqs={privateClientFaqs}
        pageName="Private Client Services — AL AIN Metals"
        pageDescription="Allocated gold, rare gemstones, and private acquisition services for UHNWIs, family offices, private banks, and sovereign allocators. Minimum $250,000."
        pageUrl="https://alainmetalscorp.com/private-clients"
        pageType="private-clients"
        breadcrumbs={[
          { name: "Home", url: "https://alainmetalscorp.com" },
          { name: "Private Clients", url: "https://alainmetalscorp.com/private-clients" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Private Clients" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Private Clients</span>
            <h1 className="editorial-headline-sm mb-4">
              Who Can Buy Gold and Gemstones From AL AIN Metals?
            </h1>
            <p className="editorial-subhead max-w-xl">
              AL AIN Metals works exclusively with ultra-high-net-worth individuals, family offices, private bank desks, and sovereign allocators. The company does not engage with brokers, intermediary chains, mandates, or commission-based agents. All clients must be direct buyers or authorized professional representatives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <ScrollReveal>
            <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-2">Who We Serve</h2>
            <p className="text-gray-400 text-xs mb-8">AL AIN Metals provides private acquisition services to four core client types.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Ultra-High-Net-Worth Individuals", desc: "Direct private acquisition from $250,000 minimum allocation. Personalized sourcing, verification, and Lloyd's-insured delivery.", detail: "Min. $250,000" },
              { title: "Family Offices", desc: "Portfolio diversification and direct gold allocation. Trial allocations from $50,000 available for verified family offices.", detail: "Trial from $50,000" },
              { title: "Private Bank Desks", desc: "Institutional-grade sourcing with independent assay, full documentation, and secure custody options in Dubai, Singapore, and Geneva.", detail: "Institutional-grade" },
              { title: "Sovereign Allocators", desc: "Government and state-related entities requiring large-volume precious metals with complete compliance documentation.", detail: "Custom allocation" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="glass-card p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-cream text-sm font-light">{item.title}</h3>
                    <span className="text-gold/60 text-[10px] tracking-[0.1em] uppercase flex-shrink-0 ml-3">{item.detail}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-gray-500 text-xs mt-6 text-center sm:text-left">
              AL AIN Metals does not serve brokers, mandates, or intermediaries. Enquiries must come directly from the purchasing principal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-2">What Does AL AIN Metals Offer?</h2>
            <p className="text-gray-400 text-xs mb-8">Three core service offerings for private precious metals acquisition.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Allocated Gold",
                desc: "Independently assayed to 99.5%–99.99% purity by SGS and Bureau Veritas. Full provenance documentation. Lloyd's-insured delivery.",
                min: "$250,000 minimum",
              },
              {
                title: "Rare Gemstones",
                desc: "Tanzanite, ruby, emerald, and sapphire — GIA/GRS certified. Tanzanite from the Merelani Hills, the world's only commercial source.",
                min: "Varies by stone",
              },
              {
                title: "Private Acquisition",
                desc: "End-to-end service: sourcing, independent verification, compliance, documented settlement, and Lloyd's-insured delivery or custody.",
                min: "By consultation",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <h3 className="text-cream text-base font-light mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                  <p className="text-gold/60 text-[10px] tracking-[0.15em] uppercase">{item.min}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-2">The Private Client Process</h2>
            <p className="text-gray-400 text-xs mb-8">Five steps from consultation to delivery, with responses within 48 business hours.</p>
          </ScrollReveal>
          <div className="max-w-2xl">
            {[
              { num: "01", title: "Consultation", desc: "Understand your acquisition objectives, preferred product, and purchase range." },
              { num: "02", title: "Sourcing", desc: "Identify suitable gold or gemstones from licensed operations in Tanzania." },
              { num: "03", title: "Verification", desc: "Independent assaying by SGS/Bureau Veritas and GIA/GRS certification." },
              { num: "04", title: "Secure Transfer", desc: "KYC/AML compliance, mutual NDA, and documented settlement." },
              { num: "05", title: "Delivery or Custody", desc: "Lloyd's-insured delivery via Brink's/Loomis or custody in Dubai, Singapore, Geneva." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                      <span className="text-gold text-sm font-light">{step.num}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-cream text-base font-light mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum Allocation */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-4">What Is the Minimum Investment?</h2>
            <p className="text-gold text-2xl font-light mb-2">USD $250,000</p>
            <p className="text-gray-400 text-sm mb-4">
              Standard minimum allocation for gold and gemstones. Trial allocations from $50,000 are available for verified family offices and private bank desks.
            </p>
            <p className="text-gray-500 text-xs mb-8">No maximum allocation limit for qualified private clients.</p>
            <Link href="/inquire" className="btn-primary">
              Request Private Access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection title="Private Clients — Frequently Asked Questions" faqs={privateClientFaqs} />

      {/* Private Clients Only */}
      <section className="py-12 bg-black-deep">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <div className="glass-card inline-block px-8 py-5">
              <p className="text-cream text-xs tracking-[0.12em] uppercase">
                Direct Buyers.<span className="text-gold ml-2">Private Transactions.</span><span className="text-cream/50 ml-2">Verified Process.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
