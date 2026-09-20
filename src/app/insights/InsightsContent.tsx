"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Breadcrumb } from "@/components/Breadcrumb"
import { allArticles } from "@/lib/articles"

export function InsightsContent() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Insights" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Insights</span>
            <h1 className="editorial-headline-sm mb-4">
              Perspectives on<br />Precious Metals
            </h1>
            <p className="editorial-subhead max-w-xl">
              Educational analysis for private clients on physical gold ownership, gemstone verification, and acquisition best practices.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 bg-black-deep">
        <div className="container-luxury">
          <div className="space-y-0">
            {allArticles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 100}>
                <Link href={`/insights/${article.slug}`} className="block py-8 border-b border-border group hover:border-gold/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold/60 text-[10px] tracking-[0.15em] uppercase">{article.category}</span>
                    <span className="text-gray-600 text-[10px]">&middot;</span>
                    <span className="text-gray-500 text-[10px]">{article.date}</span>
                    <span className="text-gray-600 text-[10px]">&middot;</span>
                    <span className="text-gray-500 text-[10px]">{article.readTime}</span>
                  </div>
                  <h2 className="text-cream text-lg sm:text-xl font-light mb-2 group-hover:text-gold transition-colors">{article.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.15em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="text-gray-400 text-sm mb-6">For verified private readers and direct buyers.</p>
            <Link href="/inquire" className="btn-primary">
              Request Private Access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
