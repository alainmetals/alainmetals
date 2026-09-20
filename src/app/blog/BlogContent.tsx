"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { blogArticles } from "@/lib/data/blog"

export function BlogContent() {
  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Insights
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Industry <span className="text-gradient-gold font-semibold">Blog</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Expert insights on gold trading, gemstone sourcing, compliance and precious metals logistics.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogArticles.map((article, index) => (
            <ScrollReveal key={article.slug} delay={index * 0.08}>
              <Link
                href={`/blog/${article.slug}`}
                className="group glass-card-hover rounded-3xl p-7 lg:p-8 h-full block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-wider uppercase text-gold/60 border border-gold/10 px-2 py-0.5 rounded-sm">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-white/40">{article.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors font-serif">
                  {article.title}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed font-light mb-4">
                  {article.excerpt}
                </p>
                <span className="text-gold/60 text-xs tracking-wider uppercase group-hover:text-gold transition-colors">
                  Read Article â†’
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Need More Information?</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact our team for detailed information about our products, services and compliance framework.
          </p>
          <Link
            href="/inquire"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
