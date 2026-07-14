import type { Metadata } from "next"
import Link from "next/link"
import { productPages } from "@/lib/data/products"
import { company } from "@/lib/siteData"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"

export const metadata: Metadata = {
  title: "Products | Precious Metals, Gemstones & Strategic Minerals",
  description:
    "Explore our full range of African precious metals, gemstones and strategic minerals. Gold bars, nuggets, dust, silver, platinum, tanzanite, diamonds, copper and more.",
  alternates: { canonical: "https://www.alainmetals.com/products" },
  openGraph: {
    title: "Products | AL AIN METALS",
    description: "African precious metals, gemstones and strategic minerals for international buyers.",
    url: "https://www.alainmetals.com/products",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS Products - African Precious Metals & Gemstones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | AL AIN METALS",
    description: "African precious metals, gemstones and strategic minerals for international buyers.",
    images: ["/assets/images/african-precious-metals-gemstones-strategic-minerals.webp"],
  },
}

export default function ProductsIndexPage() {
  return (
    <>
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://www.alainmetals.com" },
            { name: "Products", url: "https://www.alainmetals.com/products" },
          ],
        }}
      />

      <PageHero
        title="Our Products"
        subtitle="Precious Metals, Gemstones & Strategic Minerals from Africa"
        image="/assets/images/african-precious-metals-gemstones-strategic-minerals.webp"
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productPages.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors">{product.title}</h3>
                  <p className="text-white/50 text-sm font-light line-clamp-2 mb-4">{product.subtitle}</p>
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
