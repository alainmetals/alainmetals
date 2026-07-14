import type { Metadata } from "next"
import Link from "next/link"
import { industryPages } from "@/lib/data/industries"
import { company } from "@/lib/siteData"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"

export const metadata: Metadata = {
  title: "Industries We Serve | Refineries, Banks, Jewellers & More",
  description:
    "AL AIN METALS serves refineries, bullion dealers, banks, jewellery manufacturers, commodity traders and institutional investors worldwide.",
  alternates: { canonical: "https://www.alainmetals.com/industries" },
  openGraph: {
    title: "Industries We Serve | AL AIN METALS",
    description: "Serving refineries, bullion dealers, banks, jewellers and institutional investors.",
    url: "https://www.alainmetals.com/industries",
    siteName: company.name,
    type: "website",
  },
}

export default function IndustriesIndexPage() {
  return (
    <>
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://www.alainmetals.com" },
            { name: "Industries", url: "https://www.alainmetals.com/industries" },
          ],
        }}
      />

      <PageHero
        title="Industries We Serve"
        subtitle="Tailored Solutions for Every Sector"
        image="/assets/images/global-commodity-trading.webp"
        breadcrumbs={[{ label: "Industries" }]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industryPages.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors">{industry.title}</h3>
                  <p className="text-white/50 text-sm font-light line-clamp-2 mb-4">{industry.description[0]}</p>
                  <span className="text-gold/60 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">Learn More →</span>
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
