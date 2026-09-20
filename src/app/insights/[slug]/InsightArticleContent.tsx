"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumb } from "@/components/Breadcrumb"
import type { InsightArticle } from "@/lib/insightTypes"

interface Props {
  article: InsightArticle
}

export function InsightArticleContent({ article }: Props) {
  return (
    <>
      <JsonLd
        faqs={article.faqs}
        pageName={article.metaTitle}
        pageDescription={article.metaDescription}
        pageUrl={`https://alainmetalscorp.com/insights/${article.slug}`}
        breadcrumbs={[
          { name: "Home", url: "https://alainmetalscorp.com" },
          { name: "Insights", url: "https://alainmetalscorp.com/insights" },
          { name: article.title, url: `https://alainmetalscorp.com/insights/${article.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: article.title }]} />
            <div className="flex items-center gap-3 mb-4">
              <span className="editorial-caption text-gold/70">{article.category}</span>
              <span className="text-gray-600 text-[10px]">&middot;</span>
              <span className="text-gray-500 text-[10px]">{article.date}</span>
              <span className="text-gray-600 text-[10px]">&middot;</span>
              <span className="text-gray-500 text-[10px]">{article.readTime}</span>
            </div>
            <h1 className="editorial-headline-sm mb-6 max-w-2xl">{article.title}</h1>
            <p className="editorial-subhead max-w-xl">{article.excerpt}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="aspect-[16/7] overflow-hidden">
              <img
                src={article.heroImage}
                alt={article.heroAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <div className="max-w-2xl">
            {article.content.map((section, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="mb-10 last:mb-0">
                  <h2 className="text-cream text-lg sm:text-xl font-light mb-4">{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-300 text-sm leading-relaxed mb-4">{p}</p>
                  ))}
                  {section.table && (
                    <div className="glass-card overflow-hidden my-6">
                      <div className="flex bg-charcoal-light/50 px-5 py-3 border-b border-border">
                        {section.table.headers.map((h) => (
                          <div key={h} className="flex-1 text-gold/70 text-[10px] tracking-[0.1em] uppercase">{h}</div>
                        ))}
                      </div>
                      {section.table.rows.map((row, ri) => (
                        <div key={ri} className={`flex px-5 py-3 ${ri < section.table!.rows.length - 1 ? "border-b border-border" : ""}`}>
                          {row.map((cell, ci) => (
                            <div key={ci} className="flex-1 text-gray-300 text-xs">{cell}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {section.list && (
                    <div className="my-6">
                      <h3 className="text-cream text-sm font-light mb-3">{section.list.title}</h3>
                      <ul className="space-y-2">
                        {section.list.items.map((item, li) => (
                          <li key={li} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                              </svg>
                            </div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {section.quote && (
                    <blockquote className="border-l-2 border-gold/30 pl-5 my-6">
                      <p className="text-cream/70 text-sm italic leading-relaxed">{section.quote}</p>
                    </blockquote>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {article.faqs.length > 0 && (
        <FaqSection title="Frequently Asked Questions" faqs={article.faqs} />
      )}

      {/* Related Links */}
      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury">
          <ScrollReveal>
            <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-6">Related</h2>
            <div className="flex flex-wrap gap-4">
              {article.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="glass-card px-5 py-3 text-cream text-sm font-light hover:border-gold/30 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <h2 className="editorial-headline-sm mb-6">Request Private Access</h2>
            <p className="editorial-subhead max-w-md mx-auto mb-8">
              For qualified buyers seeking verified precious metals and gemstones.
            </p>
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
