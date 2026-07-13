"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { sourcingCountries } from "@/lib/siteData"

export function SourcingNetwork() {
  return (
    <section className="py-28 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Our Network
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-4">
            African{" "}
            <span className="text-gradient-gold font-semibold">Sourcing Network</span>
          </h2>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-3xl mx-auto font-light">
            Through our sourcing network and partnerships, we engage with miners, cooperatives and partners across multiple African markets. Sourcing is conducted with reference to applicable national laws and international trade regulations.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {sourcingCountries.map((country, index) => (
            <ScrollReveal key={country.name} delay={index * 0.06}>
              <div className="glass-card-hover rounded-3xl text-center p-5">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/30 transition-all duration-500">
                  <svg className="w-6 h-6 text-gold/60 group-hover:text-gold transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-500">
                  {country.name}
                </p>
                <p className="text-white/70 text-[11px] tracking-wider uppercase mt-1">
                  {country.region}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 lg:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">
                We do not own or operate mines. We source through vetted partners with reference to applicable laws.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
