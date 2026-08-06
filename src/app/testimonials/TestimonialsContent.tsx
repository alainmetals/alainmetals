"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { CTASection } from "@/components/CTASection"

const testimonials = [
  {
    quote: "Al Ain Metals provided consistent gold bars with reliable assay documentation. Their OECD-aligned approach to due diligence and transparent supply chain gives us confidence in every transaction.",
    name: "James Mitchell",
    title: "Director of Procurement",
    company: "European Gold Refineries Ltd",
    location: "Dubai, UAE",
    category: "Gold",
  },
  {
    quote: "Our tanzanite supply chain has been transformed since partnering with Al Ain Metals. The gemological reports and chain-of-custody documentation meet the standards our luxury clients demand.",
    name: "Priya Sharma",
    title: "Head of Gemstone Sourcing",
    company: "Royal Jewellers International",
    location: "Mumbai, India",
    category: "Gemstones",
  },
  {
    quote: "The OECD-aligned due diligence and transparent documentation make Al Ain Metals a reliable partner for our bullion dealing operations. Every consignment arrives with complete verification.",
    name: "David Thornton",
    title: "Managing Director",
    company: "Thornbury Bullion Dealers",
    location: "London, United Kingdom",
    category: "Gold",
  },
  {
    quote: "Their AML/KYC procedures meet our institutional requirements. The compliance framework and documentation provided by Al Ain Metals satisfies our regulatory obligations.",
    name: "Dr. Eva Müller",
    title: "Compliance Officer",
    company: "Swiss Precious Metals Bank",
    location: "Zurich, Switzerland",
    category: "Compliance",
  },
  {
    quote: "The quality and certification of their ruby and sapphire consignments consistently exceed our expectations. Independent gemological reports give our clients complete confidence.",
    name: "Marc De Vries",
    title: "Senior Gemstone Trader",
    company: "Antwerp Diamond & Gemstone Exchange",
    location: "Antwerp, Belgium",
    category: "Gemstones",
  },
  {
    quote: "Their regional expertise and supplier verification capabilities have been invaluable. Al Ain Metals provides the transparency and documentation our investment fund requires.",
    name: "Chen Wei Lin",
    title: "Portfolio Manager",
    company: "Asia Pacific Mining Investments",
    location: "Singapore",
    category: "Strategic Minerals",
  },
  {
    quote: "Cobalt and tantalum sourcing with full traceability. Al Ain Metals understands the ESG requirements of battery manufacturers and provides the documentation we need.",
    name: "Park Joon-ho",
    title: "Procurement Director",
    company: "Seoul Battery Technologies",
    location: "Seoul, South Korea",
    category: "Strategic Minerals",
  },
  {
    quote: "Tanzanite quality and consistency from Al Ain Metals have been exceptional. Their direct sourcing from Tanzania gives us access to the finest stones with complete provenance documentation.",
    name: "Michelle Lam",
    title: "Creative Director",
    company: "Oriental Jade Jewellery",
    location: "Hong Kong SAR",
    category: "Gemstones",
  },
]

export function TestimonialsContent() {
  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Trust
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Client <span className="text-gradient-gold font-semibold">Testimonials</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            What international buyers say about working with Al Ain Metals Corp.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <article className="glass-card-hover rounded-3xl p-7 lg:p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white/80 text-sm leading-relaxed font-light mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gold/[0.08] pt-4">
                  <p className="text-white text-sm font-medium">{testimonial.name}</p>
                  <p className="text-white/60 text-xs font-light">{testimonial.title}</p>
                  <p className="text-gold/60 text-xs font-light mt-1">{testimonial.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[9px] tracking-wider uppercase text-white/40 border border-gold/10 px-1.5 py-0.5 rounded-sm">
                      {testimonial.category}
                    </span>
                    <span className="text-white/30 text-[11px]">{testimonial.location}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center glass-card rounded-3xl p-10 lg:p-14">
            <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Join Our Clients</h2>
            <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
              Contact our trading desk to discuss how we can support your precious metals, gemstones and strategic minerals requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
            >
              Start a Conversation
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
