"use client"

import { ScrollReveal } from "@/components/ScrollReveal"

const complianceItems = [
  {
    title: "Regulatory Compliance",
    description:
      "We operate with reference to applicable national mining and export laws, including relevant permits and certifications from relevant authorities in the markets where we operate.",
  },
  {
    title: "OECD Due Diligence Guidance",
    description:
      "Our approach is informed by the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas, supporting ethical sourcing practices throughout our network.",
  },
  {
    title: "Anti-Money Laundering (AML)",
    description:
      "Our practices include AML procedures including customer due diligence, transaction monitoring and record-keeping, with reference to applicable international standards and regulatory requirements.",
  },
  {
    title: "Know Your Customer (KYC)",
    description:
      "We apply KYC procedures including corporate documentation review, beneficial ownership identification and source of funds verification where applicable before transactions proceed.",
  },
  {
    title: "Export Documentation & Customs",
    description:
      "Shipments are accompanied by export documentation including commercial invoices, packing lists, certificates of origin, assay certificates and customs declarations as required by applicable regulations.",
  },
  {
    title: "Environmental & Social Responsibility",
    description:
      "We are committed to promoting environmentally responsible practices within our supply chain and work with partners who share this commitment to sustainable resource development.",
  },
]

export function ComplianceContent() {
  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Compliance
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Our Commitment to{" "}
            <span className="text-gradient-gold font-semibold">Compliance</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            We prioritise compliance and due diligence across our operations, from sourcing through to final delivery.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="space-y-5">
          {complianceItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="glass-card-hover rounded-3xl p-6 lg:p-7">
                <h2 className="text-lg font-semibold text-white mb-3 font-serif">
                  {item.title}
                </h2>
                <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12">
          <div className="glass-card rounded-3xl p-8 lg:p-10">
            <h2 className="text-lg font-semibold text-white mb-6 text-center font-serif">
              Compliance Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Applicable Law", desc: "Reference to relevant national mining and export regulations" },
                { title: "OECD Guidance", desc: "Responsible mineral supply chain due diligence framework" },
                { title: "International Trade", desc: "Reference to global trade and financial regulatory frameworks" },
              ].map((item) => (
                <div key={item.title} className="p-5 border border-gold/[0.06] rounded-3xl text-center">
                  <p className="text-gold font-medium text-sm mb-1">{item.title}</p>
                  <p className="text-white/70 text-sm leading-[1.7] font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
