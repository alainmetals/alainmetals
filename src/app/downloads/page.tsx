import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { downloadItems } from "@/lib/data/downloads"

export const metadata: Metadata = {
  title: "Download Center | Company Profile, Product Catalogues & Guides",
  description: "Download AL AIN METALS company profile, product catalogues, export guides, compliance documentation and buyer resources.",
  openGraph: {
    title: "Download Center | AL AIN METALS",
    description: "Download company profile, product catalogues, export guides and compliance documentation.",
    url: "https://alainmetals.com/downloads",
    siteName: "AL AIN METALS CORPORATION LIMITED",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://alainmetals.com/downloads",
  },
}

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Download Center"
        subtitle="Access company profiles, product catalogues, export guides and compliance documentation."
        image="/assets/images/luxury-commodity-trading-headquarters.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Downloads" }]}
      />

      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-4">
            {downloadItems.map((item) => (
              <div
                key={item.slug}
                className="group bg-charcoal border border-gold/10 p-6 sm:p-8 hover:border-gold/20 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </h2>
                    <span className="text-[10px] tracking-wider uppercase text-gold/50 border border-gold/10 px-2 py-0.5">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>{item.format}</span>
                    <span className="w-1 h-1 bg-gold/30 rounded-full" />
                    <span>{item.fileSize}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-gold text-black text-xs tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors shrink-0">
                  Download
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-charcoal border border-gold/10">
            <h3 className="text-lg font-semibold text-white mb-4">Request Custom Documentation</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Need specific product specifications, compliance certificates or custom documentation? Our team can prepare tailored materials for your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.15em] uppercase font-semibold hover:bg-gold/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
