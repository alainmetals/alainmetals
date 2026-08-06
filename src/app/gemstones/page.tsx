import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Gemstones | Tanzanite, Diamonds & Rubies | Al Ain Metals",
  description:
    "Al Ain Metals supplies premium tanzanite, rough diamonds, rubies, sapphires and emeralds from East Africa with Kimberley Process certification and gemological laboratory reports.",
  alternates: {
    canonical: "https://alainmetalscorp.com/gemstones",
  },
  openGraph: {
    title: `Gemstones | ${company.shortName}`,
    description:
      "Premium tanzanite, diamonds, rubies, sapphires and emeralds sourced from East Africa with full certification.",
    url: "https://alainmetalscorp.com/gemstones",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/premium-tanzanite-gemstones.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - East African Gemstones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gemstones | ${company.shortName}`,
    description:
      "Premium tanzanite, diamonds, rubies, sapphires and emeralds sourced from East Africa with full certification.",
    images: ["/assets/images/premium-tanzanite-gemstones.webp"],
  },
}

const gemstoneCategories = [
  {
    title: "Tanzanite",
    origin: "Tanzania",
    description:
      "Rare blue-violet gemstone exclusive to East Africa. Supplied in calibrated and bespoke sizes for luxury jewellers. Each tanzanite is authenticated by recognised gemological laboratories with detailed grading reports.",
  },
  {
    title: "Rough Diamonds",
    origin: "Africa",
    description:
      "Uncut diamonds sourced through licensed channels with full Kimberley Process certification. Chain-of-custody documentation ensures conflict-free supply.",
  },
  {
    title: "Polished Diamonds",
    origin: "Global",
    description:
      "Certified polished diamonds in various cuts and grades for jewellery and investment. Grading reports from internationally recognised laboratories accompany each stone.",
  },
  {
    title: "Rubies",
    origin: "Africa",
    description:
      "Premium African rubies prized for their deep red colour and exceptional brilliance. Sourced from established mining regions with full provenance documentation.",
  },
  {
    title: "Sapphires",
    origin: "East Africa",
    description:
      "Natural sapphires in blue, yellow and fancy colours sourced from East African deposits. Each stone is certified by independent gemological laboratories.",
  },
  {
    title: "Emeralds",
    origin: "Africa",
    description:
      "High-quality emeralds with vivid green colour for luxury jewellery applications. Supplied with gemological reports detailing origin, treatment and quality grades.",
  },
  {
    title: "Tsavorite",
    origin: "East Africa",
    description:
      "Rare green garnet found in East Africa. Valued for its vivid colour and brilliance. An increasingly sought-after gemstone for luxury jewellers.",
  },
  {
    title: "Spinel",
    origin: "Africa",
    description:
      "Natural spinel in red, pink and blue hues. An emerging collectors gemstone with growing demand in international markets.",
  },
  {
    title: "Tourmaline",
    origin: "Africa",
    description:
      "Multi-coloured tourmaline in paraiba, rubellite and indicolite varieties. Sourced from established African mining operations.",
  },
]

export default function GemstonesPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Gemstones", url: "https://alainmetalscorp.com/gemstones" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Precious Stones
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            <span className="text-gradient-gold font-semibold">Gemstones</span> from East Africa
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Premium tanzanite, diamonds, rubies, sapphires and emeralds sourced with full certification and Kimberley Process compliance.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Our Gemstone Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gemstoneCategories.map((gem) => (
              <article key={gem.title} className="glass-card-hover rounded-3xl p-7 h-full">
                <h3 className="text-lg font-semibold text-white mb-2 font-serif">{gem.title}</h3>
                <p className="text-gold text-xs tracking-wider uppercase mb-3">{gem.origin}</p>
                <p className="text-white/75 text-sm leading-relaxed font-light">{gem.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Certification & Authentication</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-white text-base font-medium">Kimberley Process Compliance</h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Rough diamond sourcing adheres to the Kimberley Process Certification Scheme, ensuring conflict-free supply with full chain-of-custody documentation. Each rough diamond shipment is accompanied by Kimberley Process certificates.
              </p>
              <h3 className="text-white text-base font-medium">Gemological Laboratory Reports</h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                All gemstones are authenticated and certified by recognised gemological laboratories. Grading reports detail origin, treatment, colour, clarity, carat weight and quality grades for each stone.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-base font-medium">Chain of Custody</h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                We maintain chain-of-custody documentation from source through to export. This includes supplier verification records, mining origin documentation, transportation logs and customs declarations.
              </p>
              <h3 className="text-white text-base font-medium">Independent Verification</h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Independent gemologists verify stone quality before shipment. Discrepancies between initial assessment and final verification are documented and communicated to buyers.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Source Gemstones</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact our team for gemstone availability, certification details and pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Enquire Now
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            <Link href="/gold-trading" className="text-gold hover:text-gold-light transition-colors">Gold Trading</Link>
            {" · "}
            <Link href="/silver-trading" className="text-gold hover:text-gold-light transition-colors">Silver Trading</Link>
            {" · "}
            <Link href="/strategic-minerals" className="text-gold hover:text-gold-light transition-colors">Strategic Minerals</Link>
            {" · "}
            <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">Contact</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
