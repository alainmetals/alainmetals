import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { productPages } from "@/lib/data/products"
import { company } from "@/lib/siteData"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { PageJsonLd } from "@/components/PageJsonLd"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = productPages.find((p) => p.slug === slug)
  if (!product) return {}

  const url = `https://alainmetalscorp.com/products/${product.slug}`
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url,
      siteName: company.name,
      type: "website",
      images: [{ url: product.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productPages.find((p) => p.slug === slug)
  if (!product) notFound()

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=Hello%20${encodeURIComponent(company.name)}%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(product.title)}.`

  return (
    <>
      <PageJsonLd
        type="product"
        data={{
          title: product.title,
          description: product.description[0],
          image: product.image,
          category: "Precious Metals & Minerals",
        }}
      />
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Products", url: "https://alainmetalscorp.com/products" },
            { name: product.title, url: `https://alainmetalscorp.com/products/${product.slug}` },
          ],
        }}
      />
      {product.faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: product.faqItems.map((faq) => ({
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
        title={product.title}
        subtitle={product.subtitle}
        image={product.image}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Overview</h2>
                <div className="space-y-4">
                  {product.description.map((p, i) => (
                    <p key={i} className="text-white/60 leading-relaxed font-light">{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Specifications */}
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex justify-between items-start py-3 border-b border-gold/[0.08]">
                      <span className="text-white/50 text-sm font-light">{spec.label}</span>
                      <span className="text-white/80 text-sm font-medium text-right ml-4">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Applications */}
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-sm font-light">{app}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Available Forms */}
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Available Forms</h2>
                <div className="space-y-2">
                  {product.availableForms.map((form, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-gold/[0.06]">
                      <span className="text-gold text-xs">●</span>
                      <span className="text-white/60 text-sm font-light">{form}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Export Markets */}
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Export Markets</h2>
                <div className="flex flex-wrap gap-2">
                  {product.exportMarkets.map((market, i) => (
                    <span key={i} className="px-3 py-1.5 border border-gold/20 text-gold/70 text-xs tracking-wider uppercase rounded-sm">
                      {market}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Compliance */}
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Compliance</h2>
                <div className="space-y-2">
                  {product.compliance.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Packaging & Logistics */}
              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-serif text-2xl text-white mb-6">Packaging</h2>
                    <div className="space-y-2">
                      {product.packaging.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 py-2">
                          <span className="text-gold text-xs mt-1">●</span>
                          <span className="text-white/60 text-sm font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl text-white mb-6">Logistics</h2>
                    <div className="space-y-2">
                      {product.logistics.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 py-2">
                          <span className="text-gold text-xs mt-1">●</span>
                          <span className="text-white/60 text-sm font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQ */}
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {product.faqItems.map((faq, i) => (
                    <div key={i} className="border border-gold/[0.12] rounded-lg p-5 bg-white/[0.02]">
                      <h3 className="text-white font-medium text-sm mb-3">{faq.question}</h3>
                      <p className="text-white/50 text-sm font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <div className="sticky top-28 border border-gold/20 rounded-lg p-6 bg-white/[0.03]">
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Enquire About {product.title}</h3>
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
                    href={`mailto:${company.email}?subject=Inquiry%20-%20${product.title}`}
                    className="block w-full text-center px-6 py-3 border border-gold/30 text-gold font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold/10 transition-all duration-300"
                  >
                    Email Inquiry
                  </a>
                </div>
              </div>

              {/* Related Products */}
              {product.relatedProducts.length > 0 && (
                <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                  <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Related Products</h3>
                  <div className="space-y-2">
                    {product.relatedProducts.map((slug) => {
                      const p = productPages.find((x) => x.slug === slug)
                      if (!p) return null
                      return (
                        <Link
                          key={slug}
                          href={`/products/${slug}`}
                          className="flex items-center gap-3 py-2 border-b border-gold/[0.06] hover:border-gold/20 transition-colors"
                        >
                          <span className="text-white/60 text-sm font-light hover:text-gold transition-colors">{p.title}</span>
                          <span className="text-gold/40 text-xs ml-auto">→</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Related Guides */}
              {product.relatedGuides.length > 0 && (
                <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                  <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Related Guides</h3>
                  <div className="space-y-2">
                    {product.relatedGuides.map((slug) => (
                      <Link
                        key={slug}
                        href={`/guides/${slug}`}
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
