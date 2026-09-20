import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Silver Trading | East African Silver Bullion | Al Ain Metals",
  description:
    "Al Ain Metals supplies refined silver bullion from East Africa to industrial buyers, refineries and investors. Independent assaying, secure logistics and OECD-aligned due diligence.",
  alternates: {
    canonical: "https://alainmetalscorp.com/silver-trading",
  },
  openGraph: {
    title: `Silver Trading | ${company.shortName}`,
    description:
      "Refined silver bullion sourced from East Africa for industrial, investment and jewellery manufacturing applications.",
    url: "https://alainmetalscorp.com/silver-trading",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/premium-silver-bullion.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - East African Silver Bullion Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Silver Trading | ${company.shortName}`,
    description:
      "Refined silver bullion sourced from East Africa for industrial, investment and jewellery manufacturing applications.",
    images: ["/assets/images/premium-silver-bullion.webp"],
  },
}

export default function SilverTradingPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Silver Trading", url: "https://alainmetalscorp.com/silver-trading" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Precious Metals
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            <span className="text-gradient-gold font-semibold">Silver</span> Trading
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Refined silver bullion sourced from East Africa for industrial use, investment and jewellery manufacturing.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Silver Bullion Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glass-card-hover rounded-3xl p-7 lg:p-8">
              <h3 className="text-lg font-semibold text-white mb-3 font-serif">Refined Silver Bars</h3>
              <p className="text-gold text-sm font-medium mb-3">99.9% Purity</p>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Investment-grade silver bars refined to international standards. Suitable for institutional investors, industrial buyers and bullion dealers. Each bar is accompanied by an assay certificate confirming purity and weight.
              </p>
            </article>
            <article className="glass-card-hover rounded-3xl p-7 lg:p-8">
              <h3 className="text-lg font-semibold text-white mb-3 font-serif">Silver Grain</h3>
              <p className="text-gold text-sm font-medium mb-3">99.9% Purity</p>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Silver grain and casting material for jewellery manufacturers and industrial applications. Available in various sizes and specifications to meet client requirements.
              </p>
            </article>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Industrial", desc: "Silver is essential in electronics, solar panels, medical devices and chemical processing. Our silver meets industrial-grade specifications." },
              { title: "Investment", desc: "Silver bullion serves as a store of value and portfolio diversifier. We supply bars and coins to institutional and private investors." },
              { title: "Jewellery", desc: "Silver grain and casting materials for jewellery manufacturers. Available in sterling and fine silver specifications." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-3xl p-7">
                <h3 className="text-white text-base font-medium mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Sourcing & Quality</h2>
          <p className="text-white/80 text-sm leading-relaxed font-light mb-4">
            Our silver supply chain originates from vetted mining and recycling operations across East Africa. We maintain traceability from source through to export, with full documentation provided at each stage.
          </p>
          <p className="text-white/80 text-sm leading-relaxed font-light mb-4">
            Independent third-party assaying confirms purity and weight before shipment. Assay certificates are shared with buyers for verification, ensuring complete transparency in every transaction.
          </p>
          <p className="text-white/80 text-sm leading-relaxed font-light">
            Our approach aligns with applicable national laws and international trade regulations. We apply KYC and AML protocols to all transactions and maintain compliance with export regulations across our sourcing jurisdictions.
          </p>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Inquire About Silver</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact our trading desk for silver bullion availability, pricing and terms.
          </p>
          <Link
            href="/inquire"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            <Link href="/gold-trading" className="text-gold hover:text-gold-light transition-colors">Gold Trading</Link>
            {" Â· "}
            <Link href="/how-it-works" className="text-gold hover:text-gold-light transition-colors">All Services</Link>
            {" Â· "}
            <Link href="/gemstones" className="text-gold hover:text-gold-light transition-colors">Gemstones</Link>
            {" Â· "}
            <Link href="/inquire" className="text-gold hover:text-gold-light transition-colors">Contact</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
