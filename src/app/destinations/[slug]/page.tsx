import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { destinationPages } from "@/lib/data/destinations"
import { company } from "@/lib/siteData"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { PageJsonLd } from "@/components/PageJsonLd"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return destinationPages.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const dest = destinationPages.find((d) => d.slug === slug)
  if (!dest) return {}

  const url = `https://www.alainmetals.com/destinations/${dest.slug}`
  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDescription,
      url,
      siteName: company.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dest.metaTitle,
      description: dest.metaDescription,
    },
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dest = destinationPages.find((d) => d.slug === slug)
  if (!dest) notFound()

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=Hello%20${encodeURIComponent(company.name)}%2C%20I%20would%20like%20to%20inquire%20about%20exports%20to%20${encodeURIComponent(dest.title)}.`

  return (
    <>
      <PageJsonLd
        type="article"
        data={{
          title: `${dest.title} Import & Trade | AL AIN METALS`,
          description: dest.description[0],
          image: dest.image,
        }}
      />
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://www.alainmetals.com" },
            { name: "Destinations", url: "https://www.alainmetals.com/destinations" },
            { name: dest.title, url: `https://www.alainmetals.com/destinations/${dest.slug}` },
          ],
        }}
      />
      {dest.faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: dest.faqItems.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <PageHero
        title={`${dest.title} ${dest.flag}`}
        subtitle="Export Destination"
        image={dest.image}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: dest.title },
        ]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">About {dest.title}</h2>
                <div className="space-y-4">
                  {dest.description.map((p, i) => (
                    <p key={i} className="text-white/60 leading-relaxed font-light">{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Key Products</h2>
                <div className="flex flex-wrap gap-2">
                  {dest.keyProducts.map((product, i) => (
                    <span key={i} className="px-3 py-1.5 border border-gold/20 text-gold/70 text-xs tracking-wider uppercase rounded-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Trade Agreements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dest.tradeAgreements.map((agreement, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <span className="text-gold text-xs mt-1">●</span>
                      <span className="text-white/60 text-sm font-light">{agreement}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Import Requirements</h2>
                <p className="text-white/60 leading-relaxed font-light">{dest.importRequirements}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Market Overview</h2>
                <p className="text-white/60 leading-relaxed font-light">{dest.marketOverview}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">FAQ</h2>
                <div className="space-y-4">
                  {dest.faqItems.map((faq, i) => (
                    <div key={i} className="border border-gold/[0.12] rounded-lg p-5 bg-white/[0.02]">
                      <h3 className="text-white font-medium text-sm mb-3">{faq.question}</h3>
                      <p className="text-white/50 text-sm font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-8">
              <div className="sticky top-28 border border-gold/20 rounded-lg p-6 bg-white/[0.03]">
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Export to {dest.title}</h3>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gold text-black font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300"
                  >
                    Request Quotation
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-[#25D366]/10 transition-all duration-300"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href={`mailto:${company.email}?subject=Inquiry%20-%20Export%20to%20${dest.title}`}
                    className="block w-full text-center px-6 py-3 border border-gold/30 text-gold font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold/10 transition-all duration-300"
                  >
                    Email Inquiry
                  </a>
                </div>
              </div>

              {dest.relatedProducts.length > 0 && (
                <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                  <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Products for {dest.title}</h3>
                  <div className="space-y-2">
                    {dest.relatedProducts.map((slug) => (
                      <Link
                        key={slug}
                        href={`/products/${slug}`}
                        className="flex items-center gap-3 py-2 border-b border-gold/[0.06] hover:border-gold/20 transition-colors"
                      >
                        <span className="text-white/60 text-sm font-light hover:text-gold transition-colors capitalize">{slug.replace(/-/g, " ")}</span>
                        <span className="text-gold/40 text-xs ml-auto">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
