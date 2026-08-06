import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Due Diligence & Responsible Sourcing | Al Ain Metals Corp",
  description:
    "Al Ain Metals applies OECD-aligned due diligence for responsible sourcing of precious metals, gemstones and strategic minerals. KYC, AML and supply chain transparency across all transactions.",
  alternates: {
    canonical: "https://alainmetalscorp.com/due-diligence",
  },
  openGraph: {
    title: `Due Diligence | ${company.shortName}`,
    description:
      "OECD-aligned due diligence for responsible sourcing of precious metals, gemstones and strategic minerals.",
    url: "https://alainmetalscorp.com/due-diligence",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/gold-export-compliance-documentation.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Due Diligence and Responsible Sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Due Diligence | ${company.shortName}`,
    description:
      "OECD-aligned due diligence for responsible sourcing of precious metals, gemstones and strategic minerals.",
    images: ["/assets/images/gold-export-compliance-documentation.webp"],
  },
}

export default function DueDiligencePage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Due Diligence", url: "https://alainmetalscorp.com/due-diligence" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Compliance
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            <span className="text-gradient-gold font-semibold">Due Diligence</span> &amp; Responsible Sourcing
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Our approach is informed by the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Due Diligence Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "OECD Due Diligence Guidance",
                description:
                  "Our practices are informed by the five-step framework for risk-based due diligence: establishing strong company management systems, identifying and assessing risks, designing and implementing risk mitigation strategies, third-party auditing and public reporting.",
              },
              {
                title: "Kimberley Process Compliance",
                description:
                  "Rough diamond sourcing adheres to the Kimberley Process Certification Scheme, ensuring conflict-free supply with full chain-of-custody documentation for each shipment.",
              },
              {
                title: "Multi-Jurisdiction Compliance",
                description:
                  "We seek to comply with applicable national mining and export laws in the markets where we operate, including relevant permits, licences and regulatory requirements across our sourcing jurisdictions.",
              },
              {
                title: "AML & KYC Protocols",
                description:
                  "Anti-Money Laundering and Know Your Customer procedures are applied to all transactions, including customer due diligence, transaction monitoring and suspicious activity reporting.",
              },
            ].map((item) => (
              <article key={item.title} className="glass-card-hover rounded-3xl p-7">
                <h3 className="text-lg font-semibold text-white mb-3 font-serif">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Supply Chain Transparency</h2>
          <div className="space-y-6">
            <p className="text-white/80 text-sm leading-relaxed font-light">
              We maintain visibility across our supply chain from partner source through to export documentation. This includes supplier verification, contract negotiation, site visits and inspection coordination as part of our buyer due diligence services.
            </p>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              Exports are accompanied by documentation including commercial invoices, packing lists, certificates of origin, assay certificates, gemological reports and customs declarations. Each document is verified and maintained for audit purposes.
            </p>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              We navigate country-specific export regulations, permit requirements and bilateral trade agreements across our sourcing jurisdictions, ensuring lawful and transparent international trade.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Compliance Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "OECD Aligned", desc: "Due diligence practices informed by OECD Guidance for responsible supply chains" },
              { title: "Kimberley Process", desc: "Conflict-free rough diamond sourcing with full chain-of-custody documentation" },
              { title: "Licensed Exporter", desc: "Authorised export operations with relevant national permits and licences" },
              { title: "AML/KYC Compliant", desc: "Customer due diligence and transaction monitoring on all trades" },
              { title: "Multi-Jurisdiction", desc: "Compliance with mining and export laws across sourcing countries" },
              { title: "Audit Trail", desc: "Full documentation maintained for third-party audit and verification" },
            ].map((cert) => (
              <div key={cert.title} className="glass-card rounded-3xl p-6">
                <h3 className="text-white text-sm font-medium mb-2">{cert.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Discuss Compliance</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact us to learn more about our due diligence practices and compliance framework.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            <Link href="/compliance" className="text-gold hover:text-gold-light transition-colors">Compliance</Link>
            {" · "}
            <Link href="/assaying-services" className="text-gold hover:text-gold-light transition-colors">Assaying Services</Link>
            {" · "}
            <Link href="/secure-logistics" className="text-gold hover:text-gold-light transition-colors">Secure Logistics</Link>
            {" · "}
            <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">Contact</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
