import type { Metadata } from "next"
import Link from "next/link"
import { guidePages } from "@/lib/data/guides"
import { company } from "@/lib/siteData"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"

export const metadata: Metadata = {
  title: "Knowledge Centre | Guides & Industry Standards | Al Ain Metals",
  description:
    "Expert guides on gold export, diamond certification, OECD due diligence, Kimberley Process, trade finance and precious metals assaying from AL AIN METALS.",
  alternates: { canonical: "https://alainmetalscorp.com/guides" },
  openGraph: {
    title: "Knowledge Centre | AL AIN METALS",
    description: "Expert guides on precious metals trade, compliance and regulations.",
    url: "https://alainmetalscorp.com/guides",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/global-commodity-trading.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Knowledge Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Centre | AL AIN METALS",
    description: "Expert guides on precious metals trade, compliance and regulations.",
    images: ["/assets/images/global-commodity-trading.webp"],
  },
}

export default function GuidesIndexPage() {
  return (
    <>
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Guides", url: "https://alainmetalscorp.com/guides" },
          ],
        }}
      />

      <PageHero
        title="Knowledge Centre"
        subtitle="Expert Guides on Precious Metals, Compliance & Trade"
        image="/assets/images/global-commodity-trading.webp"
        breadcrumbs={[{ label: "Guides" }]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guidePages.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors">{guide.title}</h3>
                  <p className="text-white/50 text-sm font-light line-clamp-2 mb-4">{guide.description}</p>
                  <span className="text-gold/60 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">Read Guide →</span>
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
