"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { images } from "@/lib/siteData"

export function AboutSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh] lg:min-h-[70vh]">
          <div className="lg:col-span-5 relative flex items-center">
            <div className="px-5 sm:px-10 lg:px-16 py-10 sm:py-16 lg:py-24">
              <ScrollReveal>
                <div className="flex items-center gap-2 sm:gap-4 mb-5 sm:mb-10">
                  <div className="gold-divider" />
                  <span className="editorial-caption text-gold/70">
                    About the Company
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4 sm:mb-8" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
                  An East African
                  <br />
                  Leader in
                  <br />
                  <span className="text-gradient-gold">Precious Metals</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="editorial-subhead text-white/60 max-w-md mb-5 sm:mb-10">
                  Through our sourcing network, we supply gold to international
                  refineries, bullion dealers, banks and institutional buyers worldwide.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-gold hover:text-gold-light transition-colors duration-500"
                >
                  <span className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-500" />
                  Learn More
                </Link>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative h-[50vh] lg:h-full">
              <OptimizedImage
                src={images.about}
                alt="Trusted African gold trading company operations"
                fill
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/10 lg:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-rule" />
    </section>
  )
}
