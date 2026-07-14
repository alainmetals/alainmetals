"use client"

import { ScrollReveal } from "@/components/ScrollReveal"

const stats = [
  {
    value: "Est.",
    label: "Established",
    description: "Trusted track record",
  },
  {
    value: "6+",
    label: "Sourcing Markets",
    description: "Across East Africa",
  },
  {
    value: "10+",
    label: "Export Destinations",
    description: "Global market reach",
  },
  {
    value: "OECD",
    label: "Framework",
    description: "Due diligence aligned",
  },
]

export function TrustBadges() {
  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-black border-y border-gold/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0">
            {stats.map((stat, index) => (
              <div key={stat.value} className="flex flex-col items-center text-center">
                {index > 0 && (
                  <div className="hidden lg:block absolute" />
                )}
                <div className="lg:border-r lg:border-gold/[0.08] lg:last:border-r-0 lg:px-12 w-full">
                  <p className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-extralight text-gold leading-none mb-3">
                    {stat.value}
                  </p>
                  <p className="editorial-caption text-white/60 mb-1.5 text-[10px] sm:text-[11px]">
                    {stat.label}
                  </p>
                  <p className="text-white/30 text-[12px] font-light hidden sm:block">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
