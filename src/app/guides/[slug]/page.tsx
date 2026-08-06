import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { guidePages } from "@/lib/data/guides"
import { company } from "@/lib/siteData"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { PageJsonLd } from "@/components/PageJsonLd"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return guidePages.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = guidePages.find((g) => g.slug === slug)
  if (!guide) return {}

  const url = `https://alainmetalscorp.com/guides/${guide.slug}`
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      siteName: company.name,
      type: "article",
      images: [{ url: guide.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [guide.image],
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guidePages.find((g) => g.slug === slug)
  if (!guide) notFound()

  return (
    <>
      <PageJsonLd
        type="article"
        data={{
          title: guide.title,
          description: guide.description,
          image: guide.image,
          url: `https://alainmetalscorp.com/guides/${guide.slug}`,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
        }}
      />
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Guides", url: "https://alainmetalscorp.com/guides" },
            { name: guide.title, url: `https://alainmetalscorp.com/guides/${guide.slug}` },
          ],
        }}
      />
      {guide.faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: guide.faqItems.map((faq) => ({
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
        title={guide.title}
        image={guide.image}
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: guide.title },
        ]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <p className="text-white/60 leading-relaxed font-light text-lg">{guide.description}</p>
              </ScrollReveal>

              {guide.sections.map((section, i) => (
                <ScrollReveal key={i} delay={0.1}>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((p, j) => (
                      <p key={j} className="text-white/60 leading-relaxed font-light">{p}</p>
                    ))}
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Key Takeaways</h2>
                <div className="space-y-3">
                  {guide.keyTakeaways.map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-sm font-light">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">FAQ</h2>
                <div className="space-y-4">
                  {guide.faqItems.map((faq, i) => (
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
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Need Assistance?</h3>
                <p className="text-white/50 text-sm font-light mb-4">Our team can help you with sourcing, compliance and logistics.</p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gold text-black font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=Hello%20${encodeURIComponent(company.name)}%2C%20I%20have%20a%20question%20about%20${encodeURIComponent(guide.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-[#25D366]/10 transition-all duration-300"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {guide.relatedProducts.length > 0 && (
                <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                  <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Related Products</h3>
                  <div className="space-y-2">
                    {guide.relatedProducts.map((slug) => (
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

              <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">All Guides</h3>
                <div className="space-y-2">
                  {guidePages.filter((g) => g.slug !== guide.slug).slice(0, 5).map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="flex items-center gap-3 py-2 border-b border-gold/[0.06] hover:border-gold/20 transition-colors"
                    >
                      <span className="text-white/60 text-sm font-light hover:text-gold transition-colors">{g.title}</span>
                      <span className="text-gold/40 text-xs ml-auto">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
