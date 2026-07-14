export interface TrustSection {
  slug: string
  title: string
  subtitle: string
  metaTitle: string
  metaDescription: string
  description: string[]
  keyPoints: { title: string; description: string }[]
  image: string
}

export const trustSections: TrustSection[] = [
  {
    slug: "corporate-governance",
    title: "Corporate Governance",
    subtitle: "Transparency & Accountability",
    metaTitle: "Corporate Governance | AL AIN METALS CORPORATION LIMITED",
    metaDescription: "AL AIN METALS is committed to the highest standards of corporate governance, transparency and accountability in all business operations.",
    description: [
      "AL AIN METALS CORPORATION LIMITED is committed to maintaining the highest standards of corporate governance across all operations. Our governance framework ensures transparency, accountability and ethical conduct in every business decision.",
      "Our governance structure includes clear lines of authority, documented decision-making processes and regular reporting to management. We maintain comprehensive records of all transactions and business relationships, supporting audit readiness and regulatory compliance.",
      "We believe that strong corporate governance is foundational to building trust with buyers, partners and stakeholders. Our governance practices are aligned with international standards and are regularly reviewed to ensure continued effectiveness.",
    ],
    keyPoints: [
      { title: "Board Oversight", description: "Clear management authority and decision-making accountability" },
      { title: "Financial Transparency", description: "Accurate record-keeping and transaction documentation" },
      { title: "Ethical Standards", description: "Code of conduct governing all business relationships" },
      { title: "Regulatory Compliance", description: "Adherence to applicable laws and regulations in all jurisdictions" },
      { title: "Stakeholder Communication", description: "Regular reporting and open communication with partners" },
    ],
    image: "/assets/images/luxury-commodity-trading-headquarters.webp",
  },
  {
    slug: "responsible-sourcing",
    title: "Responsible Sourcing",
    subtitle: "Ethical Supply Chains",
    metaTitle: "Responsible Sourcing | Ethical Mineral Supply Chains",
    metaDescription: "AL AIN METALS implements responsible sourcing practices aligned with OECD Due Diligence Guidance for all precious metals, gemstones and minerals.",
    description: [
      "Responsible sourcing is at the core of AL AIN METALS operations. We implement comprehensive due diligence procedures aligned with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
      "Our responsible sourcing framework covers supplier verification, supply chain mapping, risk assessment and ongoing monitoring. We work only with mining operations and suppliers that meet our standards for ethical conduct, environmental responsibility and social accountability.",
      "We maintain traceability from source through to export, providing buyers with documentation demonstrating responsible sourcing. Our practices support buyer compliance with international regulations including the EU Conflict Minerals Regulation and US Dodd-Frank Act.",
    ],
    keyPoints: [
      { title: "OECD Alignment", description: "Full implementation of the five-step OECD Due Diligence framework" },
      { title: "Supplier Verification", description: "Thorough vetting of all mining partners and suppliers" },
      { title: "Supply Chain Mapping", description: "Documented traceability from source to export" },
      { title: "Risk Assessment", description: "Regular evaluation using OECD risk indicators" },
      { title: "Continuous Improvement", description: "Ongoing enhancement of sourcing practices" },
    ],
    image: "/assets/images/african-commodity-sourcing-network.webp",
  },
  {
    slug: "aml-kyc",
    title: "AML / KYC",
    subtitle: "Anti-Money Laundering & Customer Due Diligence",
    metaTitle: "AML & KYC Compliance | Anti-Money Laundering Procedures",
    metaDescription: "AL AIN METALS implements robust Anti-Money Laundering and Know Your Customer procedures for all transactions and business relationships.",
    description: [
      "AL AIN METALS maintains robust Anti-Money Laundering (AML) and Know Your Customer (KYC) procedures as fundamental components of our compliance framework. These procedures are applied to all transactions and business relationships.",
      "Our AML/KYC framework includes customer identification and verification, beneficial ownership determination, ongoing transaction monitoring and suspicious activity reporting. We conduct enhanced due diligence for high-risk customers and transactions.",
      "We comply with applicable AML regulations in the jurisdictions where we operate and trade. Our procedures are regularly reviewed and updated to reflect changes in regulatory requirements and emerging risks.",
    ],
    keyPoints: [
      { title: "Customer Identification", description: "Comprehensive KYC procedures for all business relationships" },
      { title: "Beneficial Ownership", description: "Verification of ultimate beneficial owners" },
      { title: "Transaction Monitoring", description: "Ongoing monitoring for unusual or suspicious activity" },
      { title: "Risk-Based Approach", description: "Enhanced due diligence for higher-risk relationships" },
      { title: "Regulatory Reporting", description: "Suspicious activity reporting to relevant authorities" },
    ],
    image: "/assets/images/gold-export-compliance-documentation.webp",
  },
  {
    slug: "esg-sustainability",
    title: "ESG & Sustainability",
    subtitle: "Environmental, Social & Governance",
    metaTitle: "ESG & Sustainability | Environmental & Social Responsibility",
    metaDescription: "AL AIN METALS is committed to environmental stewardship, social responsibility and sustainable practices across our operations and supply chain.",
    description: [
      "AL AIN METALS recognises the importance of environmental, social and governance (ESG) factors in sustainable business operations. We are committed to minimising our environmental footprint and contributing positively to the communities where we operate.",
      "Environmental stewardship includes responsible waste management, energy efficiency measures and support for environmentally responsible mining practices among our sourcing partners. We encourage the adoption of environmental management systems throughout our supply chain.",
      "Social responsibility encompasses fair labour practices, community engagement and support for local economic development. We work with mining partners who uphold human rights standards and contribute positively to their communities.",
    ],
    keyPoints: [
      { title: "Environmental Stewardship", description: "Supporting responsible environmental practices in mining" },
      { title: "Community Impact", description: "Contributing to local economic development" },
      { title: "Human Rights", description: "Upholding international human rights standards" },
      { title: "Fair Labour", description: "Supporting safe and fair working conditions" },
      { title: "Sustainable Development", description: "Aligning with UN Sustainable Development Goals" },
    ],
    image: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
  },
  {
    slug: "supply-chain-integrity",
    title: "Supply Chain Integrity",
    subtitle: "Traceability & Verification",
    metaTitle: "Supply Chain Integrity | Full Traceability & Verification",
    metaDescription: "AL AIN METALS maintains full supply chain integrity through documented traceability, independent verification and comprehensive audit trails.",
    description: [
      "Supply chain integrity is essential to maintaining buyer confidence and meeting regulatory requirements. AL AIN METALS implements comprehensive traceability systems that document the journey of every shipment from source to delivery.",
      "Our traceability framework includes source verification, chain-of-custody documentation, independent laboratory testing and comprehensive record-keeping. Every transaction is documented with supporting evidence that can be verified by buyers and auditors.",
      "We maintain audit-ready records of all supply chain activities, supporting buyer compliance with due diligence requirements and regulatory obligations. Our documentation packages provide the transparency that international buyers require.",
    ],
    keyPoints: [
      { title: "Source Verification", description: "Confirmed origin and legitimacy of all sourced materials" },
      { title: "Chain of Custody", description: "Documented handoffs throughout the supply chain" },
      { title: "Independent Testing", description: "Third-party laboratory verification of quality and purity" },
      { title: "Audit Trails", description: "Comprehensive records supporting compliance verification" },
      { title: "Buyer Transparency", description: "Full documentation provided with every shipment" },
    ],
    image: "/assets/images/secure-precious-metals-vault.webp",
  },
]

export function getTrustBySlug(slug: string) {
  return trustSections.find((t) => t.slug === slug)
}
