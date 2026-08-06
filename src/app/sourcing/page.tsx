import type { Metadata } from "next"
import Link from "next/link"
import { countryPages } from "@/lib/data/countries"
import { company } from "@/lib/siteData"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"

export const metadata: Metadata = {
  title: "African Sourcing Network | Precious Metals | Al Ain Metals",
  description:
    "Explore our African sourcing network. We source precious metals, gemstones and strategic minerals from 12+ countries across East, Central, Southern and West Africa.",
  alternates: { canonical: "https://alainmetalscorp.com/sourcing" },
  openGraph: {
    title: "Sourcing Countries | AL AIN METALS",
    description: "African sourcing network across East, Central, Southern and West Africa.",
    url: "https://alainmetalscorp.com/sourcing",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/african-commodity-sourcing-network.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - African Sourcing Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourcing Countries | AL AIN METALS",
    description: "African sourcing network across East, Central, Southern and West Africa.",
    images: ["/assets/images/african-commodity-sourcing-network.webp"],
  },
}

export default function SourcingIndexPage() {
  const regions = [...new Set(countryPages.map((c) => c.region))]

  return (
    <>
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Sourcing", url: "https://alainmetalscorp.com/sourcing" },
          ],
        }}
      />

      <PageHero
        title="African Sourcing Network"
        subtitle="Precious Metals, Gemstones & Strategic Minerals from 12+ Countries"
        image="/assets/images/african-commodity-sourcing-network.webp"
        breadcrumbs={[{ label: "Sourcing" }]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          {regions.map((region) => (
            <ScrollReveal key={region}>
              <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8">{region}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                {countryPages.filter((c) => c.region === region).map((country) => (
                  <Link
                    key={country.slug}
                    href={`/sourcing/${country.slug}`}
                    className="group border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{country.flag}</span>
                      <h3 className="text-white font-semibold text-lg group-hover:text-gold transition-colors">{country.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {country.keyMinerals.slice(0, 4).map((mineral) => (
                        <span key={mineral} className="text-[10px] text-gold/60 border border-gold/10 px-2 py-0.5 rounded-sm">{mineral}</span>
                      ))}
                    </div>
                    <span className="text-gold/60 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">View Details →</span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
