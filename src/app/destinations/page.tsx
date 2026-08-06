import type { Metadata } from "next"
import Link from "next/link"
import { destinationPages } from "@/lib/data/destinations"
import { company } from "@/lib/siteData"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"

export const metadata: Metadata = {
  title: "Export Destinations | Global Markets | Al Ain Metals Corp",
  description:
    "We export precious metals, gemstones and strategic minerals to major international markets including UAE, Switzerland, India, China, UK, Turkey and Hong Kong from our East African operations.",
  alternates: { canonical: "https://alainmetalscorp.com/destinations" },
  openGraph: {
    title: "Export Destinations | AL AIN METALS",
    description: "Global export destinations for African precious metals and minerals.",
    url: "https://alainmetalscorp.com/destinations",
    siteName: company.name,
    type: "website",
  },
}

export default function DestinationsIndexPage() {
  return (
    <>
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Destinations", url: "https://alainmetalscorp.com/destinations" },
          ],
        }}
      />

      <PageHero
        title="Export Destinations"
        subtitle="Serving International Markets Worldwide"
        image="/assets/images/global-commodity-trading.webp"
        breadcrumbs={[{ label: "Destinations" }]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinationPages.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="group border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{dest.flag}</span>
                    <h3 className="text-white font-semibold text-lg group-hover:text-gold transition-colors">{dest.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {dest.keyProducts.slice(0, 4).map((product) => (
                      <span key={product} className="text-[10px] text-gold/60 border border-gold/10 px-2 py-0.5 rounded-sm">{product}</span>
                    ))}
                  </div>
                  <span className="text-gold/60 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">View Details →</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
