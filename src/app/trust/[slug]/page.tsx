import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/PageHero"
import { PageJsonLd } from "@/components/PageJsonLd"
import { CTASection } from "@/components/CTASection"
import { trustSections, getTrustBySlug } from "@/lib/data/trust"
import { company } from "@/lib/siteData"
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return trustSections.map((section) => ({
    slug: section.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const section = getTrustBySlug(slug)
  if (!section) return { title: "Not Found" }

  return {
    title: section.metaTitle,
    description: section.metaDescription,
    openGraph: {
      title: section.metaTitle,
      description: section.metaDescription,
      url: `https://alainmetalscorp.com/trust/${slug}`,
      siteName: company.name,
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://alainmetalscorp.com/trust/${slug}`,
    },
  }
}

export default async function TrustDetailPage({ params }: Props) {
  const { slug } = await params
  const section = getTrustBySlug(slug)
  if (!section) notFound()

  const relatedSections = trustSections
    .filter((s) => s.slug !== section.slug)
    .slice(0, 3)

  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Trust", url: "https://alainmetalscorp.com/trust" }, { name: section.title, url: `https://alainmetalscorp.com/trust/${slug}` } ] }} />
      <PageHero
        title={section.title}
        subtitle={section.subtitle}
        image={section.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trust", href: "/trust" },
          { label: section.title },
        ]}
      />

      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="space-y-6 mb-12">
            {section.description.map((paragraph, index) => (
              <p key={index} className="text-white/70 text-[15px] leading-[1.8]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="p-8 bg-charcoal border border-gold/10">
            <h3 className="text-lg font-semibold text-gold mb-6">Key Points</h3>
            <div className="space-y-4">
              {section.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{point.title}</h4>
                    <p className="text-white/60 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedSections.length > 0 && (
        <section className="py-16 bg-charcoal border-t border-gold/10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-xl font-semibold text-white mb-8">Related Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSections.map((related) => (
                <Link
                  key={related.slug}
                  href={`/trust/${related.slug}`}
                  className="group bg-black border border-gold/10 p-6 hover:border-gold/20 transition-all duration-500"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                    {related.subtitle}
                  </span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
