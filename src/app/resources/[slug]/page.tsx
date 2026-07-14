import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/PageHero"
import { CTASection } from "@/components/CTASection"
import { PageJsonLd } from "@/components/PageJsonLd"
import { resourceArticles, getResourceBySlug } from "@/lib/data/resources"
import { company } from "@/lib/siteData"
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getResourceBySlug(slug)
  if (!article) return { title: "Not Found" }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://www.alainmetals.com/resources/${slug}`,
      siteName: company.name,
      locale: "en_US",
      type: "article",
      publishedTime: article.datePublished,
      authors: [company.name],
    },
    alternates: {
      canonical: `https://www.alainmetals.com/resources/${slug}`,
    },
  }
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getResourceBySlug(slug)
  if (!article) notFound()

  const relatedArticles = resourceArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  return (
    <>
      <PageJsonLd
        type="article"
        data={{
          title: article.title,
          description: article.description,
          image: article.image,
          url: `https://www.alainmetals.com/resources/${slug}`,
          datePublished: article.datePublished,
        }}
      />
      <PageHero
        title={article.title}
        subtitle={article.description}
        image={article.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: article.title },
        ]}
      />

      <article className="py-20">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-4 mb-8 text-sm text-white/50">
            <span>{company.name}</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full" />
            <span>{new Date(article.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="w-1 h-1 bg-gold/30 rounded-full" />
            <span>{article.readTime}</span>
          </div>

          <div className="prose prose-invert max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-white/70 text-[15px] leading-[1.8] mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 p-8 bg-charcoal border border-gold/10">
              <h3 className="text-lg font-semibold text-gold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/60 border border-gold/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-16 bg-charcoal border-t border-gold/10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-xl font-semibold text-white mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/${related.slug}`}
                  className="group bg-black border border-gold/10 p-6 hover:border-gold/20 transition-all duration-500"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                    {related.category.replace(/-/g, " ")}
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
