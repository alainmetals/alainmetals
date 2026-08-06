import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"
import { CTASection } from "@/components/CTASection"
import { trustSections } from "@/lib/data/trust"

export const metadata: Metadata = {
  title: "Trust & Compliance | Responsible Sourcing | Al Ain Metals",
  description: "Learn about AL AIN METALS commitment to corporate governance, responsible sourcing, AML/KYC compliance, ESG sustainability and supply chain integrity.",
  openGraph: {
    title: "Trust & Compliance | AL AIN METALS",
    description: "Corporate governance, responsible sourcing, AML/KYC compliance, ESG sustainability and supply chain integrity.",
    url: "https://alainmetalscorp.com/trust",
    siteName: "AL AIN METALS CORPORATION LIMITED",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/luxury-commodity-trading-headquarters.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Trust & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust & Compliance | AL AIN METALS",
    description: "Corporate governance, responsible sourcing, AML/KYC compliance, ESG sustainability and supply chain integrity.",
    images: ["/assets/images/luxury-commodity-trading-headquarters.webp"],
  },
  alternates: {
    canonical: "https://alainmetalscorp.com/trust",
  },
}

export default function TrustPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Trust", url: "https://alainmetalscorp.com/trust" } ] }} />
      <PageHero
        title="Trust & Compliance"
        subtitle="Our commitment to corporate governance, responsible sourcing, regulatory compliance and sustainability."
        image="/assets/images/luxury-commodity-trading-headquarters.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Trust" }]}
      />

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustSections.map((section) => (
              <Link
                key={section.slug}
                href={`/trust/${section.slug}`}
                className="group bg-charcoal border border-gold/10 p-8 hover:border-gold/20 transition-all duration-500"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3 block">
                  {section.subtitle}
                </span>
                <h2 className="text-xl font-semibold text-white group-hover:text-gold transition-colors mb-4">
                  {section.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {section.description[0]}
                </p>
                <div className="flex items-center gap-2 text-gold/70 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">
                  <span>Learn More</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Compliance Framework</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            AL AIN METALS maintains a comprehensive compliance framework aligned with international standards. Our practices are regularly reviewed to ensure continued effectiveness.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "OECD Due Diligence", abbr: "OECD" },
              { label: "Kimberley Process", abbr: "KP" },
              { label: "AML / KYC", abbr: "AML" },
              { label: "ESG Standards", abbr: "ESG" },
            ].map((item) => (
              <div key={item.abbr} className="bg-black border border-gold/10 p-4">
                <span className="text-gold text-2xl font-bold block mb-1">{item.abbr}</span>
                <span className="text-white/50 text-[11px] tracking-wider uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
