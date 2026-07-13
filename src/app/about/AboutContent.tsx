"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { company } from "@/lib/siteData"
import Link from "next/link"

export function AboutContent() {
  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            About Us
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            About{" "}
            <span className="text-gradient-gold font-semibold">
              {company.shortName}
            </span>
          </h1>
          <div className="gold-divider mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-24">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 font-serif">
                Our Company
              </h2>
              <p className="text-white/95 text-base lg:text-lg leading-[1.7] mb-6 font-light">
                {company.name} is a Tanzania-based company specialising in the
                export of gold and precious metals. We serve international gold
                buyers, bullion dealers, refineries, investors, and jewellery
                manufacturers worldwide.
              </p>
              <p className="text-white/95 text-base lg:text-lg leading-[1.7] mb-6 font-light">
                Founded on the principles of integrity, transparency, and
                reliability, we bridge the gap between East Africa&apos;s rich
                mineral resources and the global gold market.
              </p>
              <p className="text-white/95 text-base lg:text-lg leading-[1.7] mb-6 font-light">
                Our team combines local expertise with international trade
                standards to provide a professional export experience. We work
                with vetted partners and maintain due diligence throughout our
                supply chain.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-white mb-6 font-serif">
                Core Values
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Integrity",
                    desc: "We conduct our business with honesty and transparency, building lasting relationships with our clients and partners.",
                  },
                  {
                    title: "Excellence",
                    desc: "We maintain the highest standards in quality control, documentation, and service delivery.",
                  },
                  {
                    title: "Compliance",
                    desc: "We adhere strictly to all applicable laws, regulations, and international trade guidelines.",
                  },
                  {
                    title: "Reliability",
                    desc: "We deliver on our commitments with consistency and professionalism.",
                  },
                ].map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-1">{value.title}</p>
                      <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="glass-card rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="text-2xl font-semibold text-white mb-8 font-serif">
              Track Record
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-[32px] font-bold text-gradient-gold font-sans">Est.</p>
                <p className="text-white/80 text-sm mt-1 font-light">Established Company</p>
              </div>
              <div>
                <p className="text-[32px] font-bold text-gradient-gold font-sans">Multi</p>
                <p className="text-white/80 text-sm mt-1 font-light">Country Sourcing</p>
              </div>
              <div>
                <p className="text-[32px] font-bold text-gradient-gold font-sans">Global</p>
                <p className="text-white/80 text-sm mt-1 font-light">Reach</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Start a Conversation
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
