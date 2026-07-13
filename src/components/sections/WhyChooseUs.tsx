"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { images } from "@/lib/siteData"
import Link from "next/link"

export function WhyChooseUs() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={images.qualityAssurance}
          alt="Gold quality testing and verification laboratory"
          fill
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="relative z-10 w-full section-pad-lg">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-5 sm:mb-12">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Why Choose Us
              </span>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={0.15}>
              <blockquote>
                <p className="font-serif font-light leading-[1.1] text-white mb-4 sm:mb-10" style={{ fontSize: "clamp(1.5rem, 4.5vw, 4.5rem)" }}>
                  Setting the{" "}
                  <span className="text-gradient-gold">standard</span>
                  {" "}in gold trade{" "}
                  <span className="italic text-white/70">excellence</span>
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="w-10 sm:w-16 h-px bg-gold/30 mb-5 sm:mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 mb-6 sm:mb-12">
                {[
                  "Sourcing network across East Africa with established partner relationships",
                  "OECD Due Diligence Guidance and applicable regulatory compliance",
                  "Supply chain visibility from source through to delivery",
                  "Dedicated relationship management throughout",
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-gold/30 text-lg leading-none mt-0.5 shrink-0">—</span>
                    <p className="text-white/65 text-sm leading-relaxed font-light">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-gold hover:text-gold-light transition-colors duration-500"
              >
                <span className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-500" />
                Learn More About Us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
