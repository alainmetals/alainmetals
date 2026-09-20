import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Gold Trading | East African Gold Bars, Nuggets & Dust | Al Ain",
  description:
    "Al Ain Metals supplies investment-grade gold bars, nuggets and dust from East Africa to refineries, bullion dealers, banks and institutional buyers. OECD-aligned sourcing with independent assaying.",
  alternates: {
    canonical: "https://alainmetalscorp.com/gold-trading",
  },
  openGraph: {
    title: `Gold Trading | ${company.shortName}`,
    description:
      "Premium gold bars, nuggets and dust sourced from East Africa for international refineries and institutional buyers.",
    url: "https://alainmetalscorp.com/gold-trading",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/investment-grade-gold-bars.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - East African Gold Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gold Trading | ${company.shortName}`,
    description:
      "Premium gold bars, nuggets and dust sourced from East Africa for international refineries and institutional buyers.",
    images: ["/assets/images/investment-grade-gold-bars.webp"],
  },
}

const goldProducts = [
  {
    title: "Gold Bars",
    purity: "99.9% â€“ 99.99%",
    description:
      "Investment-grade gold bars cast to international specifications. Suitable for refineries, bullion dealers, central banks and institutional investors. Each bar is independently assayed and accompanied by full documentation including assay certificate and chain-of-custody records.",
  },
  {
    title: "Gold Nuggets",
    purity: "85% â€“ 95%",
    description:
      "Natural gold nuggets sourced through vetted artisanal and small-scale mining partners. Sought after by jewellery manufacturers and collectors worldwide. Each consignment is verified for weight and purity before export.",
  },
  {
    title: "Gold Dust",
    purity: "80% â€“ 92%",
    description:
      "Fine gold dust recovered from alluvial deposits. Processed, dried and prepared for export to qualified international refineries. Full assay documentation provided with every shipment.",
  },
]

export default function GoldTradingPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Gold Trading", url: "https://alainmetalscorp.com/gold-trading" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Precious Metals
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            <span className="text-gradient-gold font-semibold">Gold</span> Trading
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Premium gold sourced from East Africa and supplied to refineries, bullion dealers, banks and institutional buyers worldwide.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
          {goldProducts.map((product) => (
            <article key={product.title} className="glass-card-hover rounded-3xl p-7 lg:p-8 h-full">
              <h2 className="text-lg font-semibold text-white mb-3 font-serif">{product.title}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold text-sm font-medium">{product.purity}</span>
                <span className="text-white/30 text-xs">Purity</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed font-light">{product.description}</p>
            </article>
          ))}
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Why Source Gold from Al Ain Metals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Our sourcing network spans East and Southern Africa, connecting international buyers with vetted mining operations. We work with artisanal and small-scale mining partners who adhere to responsible sourcing practices and applicable national regulations.
              </p>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Every gold consignment undergoes independent third-party assaying by qualified laboratories. Assay certificates documenting purity, weight and composition are shared with buyers before shipment, ensuring full transparency.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-white/80 text-sm leading-relaxed font-light">
                Our approach is informed by the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. We maintain KYC and AML protocols across all transactions.
              </p>
              <p className="text-white/80 text-sm leading-relaxed font-light">
                From initial inquiry through to delivery, our team provides dedicated relationship management. We handle export documentation, customs clearance, secure transport and coordination with international freight forwarders.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Our Process</h2>
          <div className="space-y-0">
            {[
              { step: "01", title: "Inquiry & Proposal", desc: "Submit your gold sourcing requirements. We respond with availability, indicative pricing and proposed terms." },
              { step: "02", title: "Due Diligence", desc: "Counterparty verification and exchange of corporate documentation. Sale and purchase agreement prepared." },
              { step: "03", title: "Assaying & Verification", desc: "Independent third-party assaying confirms purity and weight. Certificates shared with buyer for confirmation." },
              { step: "04", title: "Payment & Logistics", desc: "Payment through agreed banking channels. Export logistics including customs clearance and freight coordination." },
              { step: "05", title: "Delivery & Settlement", desc: "Insured shipment with tracking. Final settlement upon buyer acceptance per agreed terms." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 py-6 border-b border-gold/[0.06]">
                <span className="font-serif text-3xl font-extralight text-gold/30 shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-white text-base font-medium mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Ready to Source Gold?</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact our trading desk to discuss your gold requirements, including product type, quantity and destination market.
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
            <Link href="/how-it-works" className="text-gold hover:text-gold-light transition-colors">All Services</Link>
            {" Â· "}
            <Link href="/silver-trading" className="text-gold hover:text-gold-light transition-colors">Silver Trading</Link>
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
