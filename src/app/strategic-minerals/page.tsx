import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Strategic Minerals | Copper, Cobalt & Lithium | Al Ain Metals",
  description:
    "Al Ain Metals supplies copper, nickel, cobalt, tantalum, tin and lithium from African sources to global industrial buyers. Conflict-free, OECD-aligned supply chain with full documentation.",
  alternates: {
    canonical: "https://alainmetalscorp.com/strategic-minerals",
  },
  openGraph: {
    title: `Strategic Minerals | ${company.shortName}`,
    description:
      "Copper, cobalt, nickel, tantalum, tin and lithium sourced from Africa for global industrial buyers.",
    url: "https://alainmetalscorp.com/strategic-minerals",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/strategic-minerals-africa.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - African Strategic Minerals Supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Strategic Minerals | ${company.shortName}`,
    description:
      "Copper, cobalt, nickel, tantalum, tin and lithium sourced from Africa for global industrial buyers.",
    images: ["/assets/images/strategic-minerals-africa.webp"],
  },
}

const minerals = [
  {
    title: "Copper",
    purity: "99.99%",
    description:
      "Copper cathodes and concentrate for industrial manufacturing and electronics. Sourced from established African mining operations with full export documentation.",
  },
  {
    title: "Nickel",
    purity: "Per specification",
    description:
      "Nickel ore and refined products for stainless steel and battery manufacturing. Available in various grades to meet industrial specifications.",
  },
  {
    title: "Cobalt",
    purity: "Per specification",
    description:
      "Cobalt hydroxide and refined cobalt for lithium-ion battery and aerospace industries. Sourced with attention to responsible mining practices.",
  },
  {
    title: "Tantalum",
    purity: "Per specification",
    description:
      "Conflict-free tantalum for electronics, capacitors and aerospace applications. Full traceability from mine to export.",
  },
  {
    title: "Tin",
    purity: "99.9%",
    description:
      "Tin ingots and concentrate for soldering, packaging and industrial applications. Exported with complete documentation and assay certificates.",
  },
  {
    title: "Lithium",
    purity: "Per specification",
    description:
      "Lithium products sourced upon request for battery and energy storage industries. Available subject to sourcing feasibility and regulatory approvals.",
  },
]

export default function StrategicMineralsPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Strategic Minerals", url: "https://alainmetalscorp.com/strategic-minerals" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Industrial Supply
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            <span className="text-gradient-gold font-semibold">Strategic Minerals</span> from Africa
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Copper, cobalt, nickel, tantalum, tin and lithium sourced from African mining regions for global industrial buyers.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Mineral Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {minerals.map((mineral) => (
              <article key={mineral.title} className="glass-card-hover rounded-3xl p-7 h-full">
                <h3 className="text-lg font-semibold text-white mb-2 font-serif">{mineral.title}</h3>
                <p className="text-gold text-xs tracking-wider uppercase mb-3">{mineral.purity}</p>
                <p className="text-white/75 text-sm leading-relaxed font-light">{mineral.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Responsible Sourcing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Our approach to strategic minerals sourcing is informed by the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. We apply due diligence across our supply chain.
              </p>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                We seek to comply with applicable national mining and export laws in the markets where we operate, including relevant permits, licences and regulatory requirements.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Tantalum sourcing follows conflict-free protocols with full traceability from mine to export. We work with licensed suppliers who maintain transparent supply chains.
              </p>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Anti-Money Laundering and Know Your Customer procedures are applied to all transactions, including customer due diligence and transaction monitoring.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Source Strategic Minerals</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact our team for mineral availability, specifications and pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            <Link href="/gold-trading" className="text-gold hover:text-gold-light transition-colors">Gold Trading</Link>
            {" · "}
            <Link href="/gemstones" className="text-gold hover:text-gold-light transition-colors">Gemstones</Link>
            {" · "}
            <Link href="/due-diligence" className="text-gold hover:text-gold-light transition-colors">Due Diligence</Link>
            {" · "}
            <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">Contact</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
