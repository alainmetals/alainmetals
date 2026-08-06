"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { blogArticles, type BlogArticle } from "@/lib/data/blog"

export function ArticleContent({ article }: { article: BlogArticle }) {
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2)

  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="mb-8">
            <Link href="/blog" className="text-gold/60 text-sm hover:text-gold transition-colors">
              ← Back to Blog
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-wider uppercase text-gold/60 border border-gold/10 px-2 py-0.5 rounded-sm">
              {article.category}
            </span>
            <span className="text-[11px] text-white/40">{article.date}</span>
          </div>

          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] mb-8 font-serif">
            <span className="text-gradient-gold font-semibold">{article.title}</span>
          </h1>

          <div className="gold-divider mb-10" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <article className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-white/80 text-[15px] leading-[1.8] font-light">
                {paragraph}
              </p>
            ))}
          </article>
        </ScrollReveal>

        {relatedArticles.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="mt-16 pt-10 border-t border-gold/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-6 font-serif">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group glass-card rounded-2xl p-6 hover:border-gold/20 transition-all duration-300"
                  >
                    <span className="text-[10px] tracking-wider uppercase text-gold/60 mb-2 block">
                      {related.category}
                    </span>
                    <h3 className="text-white text-sm font-medium mb-2 group-hover:text-gold transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-white/50 text-xs font-light line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center glass-card rounded-3xl p-10 lg:p-14">
            <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Have Questions?</h2>
            <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
              Contact our team for expert guidance on precious metals, gemstones and strategic minerals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
