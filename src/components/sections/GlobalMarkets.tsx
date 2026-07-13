"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { exportDestinations as markets } from "@/lib/siteData"

export function GlobalMarkets() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Global Reach
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4 sm:mb-8" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              Serving Markets{" "}
              <span className="text-gradient-gold">Worldwide</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="editorial-subhead text-white/60 max-w-lg mb-6 sm:mb-10">
              From East Africa to the world&apos;s leading precious metals hubs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {markets.map((market, index) => (
              <ScrollReveal key={market.name} delay={0.3 + index * 0.04}>
                <div className="flex items-center gap-4 py-4 sm:py-5 border-b border-gold/[0.08] group hover:border-gold/20 transition-colors duration-500">
                  <span className="text-gold/60 text-sm shrink-0 group-hover:text-gold/90 transition-colors duration-500">
                    {market.flag}
                  </span>
                  <span className="text-white/70 text-sm sm:text-base group-hover:text-white/95 transition-colors duration-500 font-light">
                    {market.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
