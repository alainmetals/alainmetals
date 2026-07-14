"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { exportDestinations as markets } from "@/lib/siteData"
import { OptimizedImage } from "@/components/OptimizedImage"

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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-start">
            {/* Text + market list */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <ScrollReveal delay={0.2}>
                <p className="editorial-subhead text-white/60 max-w-sm mb-5 sm:mb-8">
                  From East Africa to the world&apos;s leading precious metals hubs.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0">
                {markets.map((market, index) => (
                  <ScrollReveal key={market.name} delay={0.3 + index * 0.03}>
                    <div className="flex items-center gap-3 py-3 border-b border-gold/[0.08] group hover:border-gold/20 transition-colors duration-500">
                      <span className="text-gold/60 text-xs shrink-0 group-hover:text-gold/90 transition-colors duration-500 w-5 text-center font-medium">
                        {market.flag}
                      </span>
                      <span className="text-white/70 text-sm group-hover:text-white/95 transition-colors duration-500 font-light">
                        {market.name}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* World Map Image */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="relative w-full bg-charcoal/30 border border-gold/[0.12] p-3 sm:p-5 lg:p-6 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1] rounded-3xl overflow-hidden gold-shadow-lg">
                  <OptimizedImage
                    src="/assets/images/global-map.png"
                    alt="Global commodity sourcing network across Africa and international markets"
                    fill
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
