import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { resourceArticles } from "@/lib/data/resources"

export const metadata: Metadata = {
  title: "Resource Center | Market Insights, Guides & Industry Reports",
  description: "Expert market insights, export guides, compliance resources and industry reports for African precious metals, gemstones and strategic minerals.",
  openGraph: {
    title: "Resource Center | AL AIN METALS",
    description: "Expert market insights, export guides, compliance resources and industry reports.",
    url: "https://alainmetals.com/resources",
    siteName: "AL AIN METALS CORPORATION LIMITED",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://alainmetals.com/resources",
  },
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resource Center"
        subtitle="Expert market insights, export guides, compliance resources and industry reports."
        image="/assets/images/luxury-commodity-trading-headquarters.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group bg-charcoal border border-gold/10 p-8 hover:border-gold/20 transition-all duration-500"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3 block">
                  {article.category.replace(/-/g, " ")}
                </span>
                <h2 className="text-lg font-semibold text-white group-hover:text-gold transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-gold/70 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">
                  <span>Read More</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
