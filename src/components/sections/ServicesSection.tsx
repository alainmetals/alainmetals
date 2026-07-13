"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { services, images } from "@/lib/siteData"

export function ServicesSection() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-6">
            <div className="lg:col-span-5 px-5 sm:px-10 lg:px-0">
              <ScrollReveal>
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="gold-divider" />
                  <span className="editorial-caption text-gold/70">
                    Capabilities
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4 sm:mb-8" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
                  Pan-African{" "}
                  <span className="text-gradient-gold">Trade Services</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="editorial-subhead text-white/55 max-w-sm">
                  End-to-end support for international buyers sourcing precious metals from East Africa and across the continent.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0">
                {services.map((service, index) => (
                  <ScrollReveal key={service.title} delay={index * 0.06}>
                    <div className="group py-5 sm:py-8 border-b border-gold/[0.06] flex gap-4 sm:gap-8 items-start">
                      <span className="font-serif text-[clamp(2rem,3vw,2.5rem)] font-extralight text-gold/30 group-hover:text-gold/60 transition-colors duration-700 leading-none shrink-0 mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-white text-base lg:text-lg font-medium mb-2 group-hover:text-gold transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-white/55 text-sm leading-relaxed font-light max-w-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[40vh] lg:h-[60vh] overflow-hidden">
        <OptimizedImage
          src={images.services}
          alt="International gold trade services across Africa"
          fill
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    </section>
  )
}
