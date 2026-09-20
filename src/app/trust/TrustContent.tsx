"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumb } from "@/components/Breadcrumb"
import { trustFaqs } from "@/lib/aeoContent"
import { trustPillars } from "@/lib/siteData"

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  check: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
  document: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  lock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  secure: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  delivery: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16,8 20,8 23,11 23,16 16,16" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
}

export function TrustContent() {
  return (
    <>
      <JsonLd
        faqs={trustFaqs}
        pageName="Trust & Verification — AL AIN Metals"
        pageDescription="Licensing, assaying, insurance, and compliance verification for private precious metals transactions."
        pageUrl="https://alainmetalscorp.com/trust"
        pageType="trust"
        breadcrumbs={[
          { name: "Home", url: "https://alainmetalscorp.com" },
          { name: "Verification", url: "https://alainmetalscorp.com/trust" },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Verification" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Trust &amp; Verification</span>
            <h1 className="editorial-headline-sm mb-4">
              How Does AL AIN Metals Ensure Gold Authenticity?
            </h1>
            <p className="editorial-subhead max-w-xl">
              AL AIN Metals ensures authenticity through independent assaying by SGS and Bureau Veritas (99.5%–99.99% purity), GIA/GRS gemstone certification, Lloyd&apos;s-of-London insurance, and full compliance with Tanzania AML Act 2006, FATF Recommendations, and Kimberley Process standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
            {trustPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 80}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-gold/20 flex items-center justify-center text-gold/70 group-hover:border-gold/40 group-hover:text-gold transition-all duration-300">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="text-cream text-xs sm:text-sm font-light mb-2">{pillar.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed hidden sm:block">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* African Landscape */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/images/african-gold-mining-operations.webp)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-12 sm:pb-16">
            <ScrollReveal>
              <div className="text-center">
                <div className="gold-divider-wide mx-auto mb-6" />
                <p className="text-cream/70 text-xs tracking-[0.2em] uppercase mb-2">Ethical Sourcing.</p>
                <p className="text-gold/60 text-xs tracking-[0.2em] uppercase">A Brighter Tomorrow.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="editorial-headline-sm mb-6">What Licenses Does AL AIN Metals Hold?</h2>
              <p className="editorial-subhead max-w-xl mx-auto mb-10">
                AL AIN Metals is licensed by the Tanzania Mining Commission, registered with BRELA, and holds DMCC registration for Dubai operations. The company maintains current tax clearance certificates and complies with all Tanzanian regulatory requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Tanzania Mining Commission", desc: "Licensed to trade precious metals and gemstones in Tanzania" },
                  { title: "BRELA Registration", desc: "Business Registrations and Licensing Agency, Tanzania" },
                  { title: "DMCC Registration", desc: "Dubai Multi Commodities Centre for international operations" },
                  { title: "Tax Clearance", desc: "Current tax clearance certificate from Tanzania Revenue Authority" },
                  { title: "SGS & Bureau Veritas", desc: "Independent assaying partnerships for gold purity verification" },
                  { title: "Lloyd's of London", desc: "Insurance coverage for all transit and custody arrangements" },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-5 text-left">
                    <h3 className="text-cream text-sm font-light mb-1.5">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2 className="editorial-headline-sm text-center mb-10">Is AL AIN Metals Compliant With Anti-Money Laundering Regulations?</h2>
              <div className="glass-card overflow-hidden">
                {[
                  { standard: "Tanzania AML Act 2006", status: "Full compliance" },
                  { standard: "Tanzania FIA Act 2010", status: "Full compliance" },
                  { standard: "FATF Recommendations", status: "Full compliance" },
                  { standard: "Kimberley Process", status: "Certified" },
                  { standard: "OECD Due Diligence", status: "Full compliance" },
                  { standard: "KYC Requirements", status: "Mandatory for all clients" },
                ].map((row, i, arr) => (
                  <div key={row.standard} className={`flex items-center py-4 px-5 ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
                    <div className="flex-1">
                      <span className="text-cream text-xs font-light">{row.standard}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                      <span className="text-gold/70 text-xs">{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection title="Trust — Frequently Asked Questions" faqs={trustFaqs} />

      {/* CTA */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-6">Request Private Access</h2>
            <p className="editorial-subhead max-w-md mx-auto mb-8">
              For qualified buyers seeking verified precious metals and gemstones with full documentation and compliance.
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
