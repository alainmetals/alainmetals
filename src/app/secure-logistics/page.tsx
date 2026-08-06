import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Secure Logistics | Armoured Transport | Al Ain Metals",
  description:
    "Al Ain Metals manages secure logistics for precious metals and gemstones including armoured transport, secure storage, customs clearance and international freight with full insurance coverage.",
  alternates: {
    canonical: "https://alainmetalscorp.com/secure-logistics",
  },
  openGraph: {
    title: `Secure Logistics | ${company.shortName}`,
    description:
      "Armoured transport, secure storage and international freight for precious metals and gemstones.",
    url: "https://alainmetalscorp.com/secure-logistics",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/international-commodity-export-logistics.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Secure Logistics for Precious Metals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Secure Logistics | ${company.shortName}`,
    description:
      "Armoured transport, secure storage and international freight for precious metals and gemstones.",
    images: ["/assets/images/international-commodity-export-logistics.webp"],
  },
}

export default function SecureLogisticsPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Secure Logistics", url: "https://alainmetalscorp.com/secure-logistics" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Logistics
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            <span className="text-gradient-gold font-semibold">Secure Logistics</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Armoured transport, secure storage and international freight coordination with insurance to delivery point.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Logistics Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Secure Transport",
                desc: "Armoured vehicle transport for high-value precious metals and gemstones from source to export hub. GPS tracking and security protocols ensure shipment integrity throughout transit.",
              },
              {
                title: "Secure Storage",
                desc: "Climate-controlled, bonded warehouse facilities for short-term and long-term storage. 24/7 surveillance, access controls and insurance coverage for stored commodities.",
              },
              {
                title: "Customs Clearance",
                desc: "Expert management of export customs procedures including documentation preparation, regulatory compliance and clearance coordination with national authorities.",
              },
              {
                title: "International Freight",
                desc: "Coordination with vetted international freight forwarders for air, sea and land transport. Route optimization and carrier selection based on security and reliability.",
              },
            ].map((service) => (
              <article key={service.title} className="glass-card-hover rounded-3xl p-7">
                <h3 className="text-lg font-semibold text-white mb-3 font-serif">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold white mb-8 font-serif">Insurance Coverage</h2>
          <p className="text-white/80 text-sm leading-relaxed font-light mb-4">
            All shipments are insured from the point of collection through to the agreed delivery point. Insurance coverage is structured based on the commodity type, value and destination, providing buyers with protection throughout the supply chain.
          </p>
          <p className="text-white/80 text-sm leading-relaxed font-light">
            We work with established insurance providers experienced in precious metals and gemstone transit. Policy terms and coverage limits are confirmed prior to shipment, with documentation provided to buyers.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Export Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Commercial Invoice", desc: "Detailed product, quantity and pricing documentation" },
              { title: "Packing List", desc: "Itemised weights, packaging and shipping marks" },
              { title: "Certificate of Origin", desc: "Official country of origin certification" },
              { title: "Customs Declaration", desc: "Export declarations per applicable regulations" },
            ].map((doc) => (
              <div key={doc.title} className="glass-card rounded-3xl p-6">
                <h3 className="text-white text-sm font-medium mb-2">{doc.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">{doc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Discuss Logistics</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact our team to discuss secure logistics requirements for your shipment.
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
            <Link href="/assaying-services" className="text-gold hover:text-gold-light transition-colors">Assaying Services</Link>
            {" · "}
            <Link href="/due-diligence" className="text-gold hover:text-gold-light transition-colors">Due Diligence</Link>
            {" · "}
            <Link href="/services" className="text-gold hover:text-gold-light transition-colors">All Services</Link>
            {" · "}
            <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">Contact</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
