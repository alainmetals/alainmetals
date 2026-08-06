import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { industryPages } from "@/lib/data/industries"
import { company } from "@/lib/siteData"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { PageJsonLd } from "@/components/PageJsonLd"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return industryPages.map((ind) => ({ slug: ind.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industryPages.find((i) => i.slug === slug)
  if (!industry) return {}

  const url = `https://alainmetalscorp.com/industries/${industry.slug}`
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      siteName: company.name,
      type: "website",
      images: [{ url: industry.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: [industry.image],
    },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industryPages.find((i) => i.slug === slug)
  if (!industry) notFound()

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=Hello%20${encodeURIComponent(company.name)}%2C%20I%20would%20like%20to%20discuss%20supply%20for%20${encodeURIComponent(industry.title)}.`

  return (
    <>
      <PageJsonLd
        type="article"
        data={{
          title: `${industry.title} Solutions | AL AIN METALS`,
          description: industry.description[0],
          image: industry.image,
        }}
      />
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Industries", url: "https://alainmetalscorp.com/industries" },
            { name: industry.title, url: `https://alainmetalscorp.com/industries/${industry.slug}` },
          ],
        }}
      />
      {industry.faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: industry.faqItems.map((faq) => ({
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
        title={industry.title}
        subtitle="Industry Solutions"
        image={industry.image}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />

      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">About {industry.title}</h2>
                <div className="space-y-4">
                  {industry.description.map((p, i) => (
                    <p key={i} className="text-white/60 leading-relaxed font-light">{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Key Products</h2>
                <div className="flex flex-wrap gap-2">
                  {industry.keyProducts.map((product, i) => (
                    <span key={i} className="px-3 py-1.5 border border-gold/20 text-gold/70 text-xs tracking-wider uppercase rounded-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industry.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-sm font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">Why Choose AL AIN METALS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industry.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <span className="text-gold text-xs mt-1">●</span>
                      <span className="text-white/60 text-sm font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6">FAQ</h2>
                <div className="space-y-4">
                  {industry.faqItems.map((faq, i) => (
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
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Supply for {industry.title}</h3>
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
                    href={`mailto:${company.email}?subject=Inquiry%20-%20${industry.title}`}
                    className="block w-full text-center px-6 py-3 border border-gold/30 text-gold font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold/10 transition-all duration-300"
                  >
                    Email Inquiry
                  </a>
                </div>
              </div>

              {industry.relatedProducts.length > 0 && (
                <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                  <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Related Products</h3>
                  <div className="space-y-2">
                    {industry.relatedProducts.map((slug) => (
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

              {industry.relatedGuides.length > 0 && (
                <div className="border border-gold/[0.12] rounded-lg p-6 bg-white/[0.02]">
                  <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">Related Guides</h3>
                  <div className="space-y-2">
                    {industry.relatedGuides.map((slug) => (
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
