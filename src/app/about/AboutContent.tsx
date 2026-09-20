"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Breadcrumb } from "@/components/Breadcrumb"

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <Breadcrumb items={[{ label: "About" }]} />
            <span className="editorial-caption text-gold/70 block mb-4">Our Story</span>
            <h1 className="editorial-headline-sm mb-4">
              Rooted in Africa.<br />Trusted Worldwide.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* African Landscape */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/assets/images/african-gold-mining-operations.webp)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-black/30" />
      </section>

      {/* Story */}
      <section className="section-pad bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="editorial-subhead text-cream/80 mb-6">
                AL AIN Metals is a Tanzanian-based company dedicated to connecting exceptional African precious metals and gemstones with private clients around the world.
              </p>
              <p className="editorial-subhead">
                Our mission is to provide direct, verified access to Africa&apos;s finest natural resources — with integrity, transparency, and professionalism at every stage.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="pb-16 bg-black-deep">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Integrity",
                subtitle: "Our Foundation",
                desc: "We uphold the highest standards of honesty and ethical conduct in every engagement.",
              },
              {
                title: "Quality",
                subtitle: "Our Standard",
                desc: "Every precious metal and gemstone is independently verified for purity and authenticity.",
              },
              {
                title: "Clients",
                subtitle: "Our Focus",
                desc: "We serve private clients with the discretion, professionalism and personal attention they deserve.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 100}>
                <div className="text-center">
                  <h3 className="text-cream text-base sm:text-lg font-light mb-1">{pillar.title}</h3>
                  <p className="text-gold/60 text-[10px] tracking-[0.2em] uppercase mb-3">{pillar.subtitle}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 bg-black relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <div className="gold-divider-wide mx-auto mb-6" />
            <p className="text-cream/60 text-xs tracking-[0.2em] uppercase mb-2">
              African Heritage.
            </p>
            <p className="text-gold/60 text-xs tracking-[0.2em] uppercase">
              Global Opportunity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-black-deep relative">
        <div className="section-rule absolute top-0 left-0 right-0" />
        <div className="container-luxury text-center">
          <ScrollReveal>
            <Link href="/inquire" className="btn-primary">
              Our Story
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
