import { NavLink, Product, Service, FAQItem, TimelineStep } from "@/types"

export const company = {
  name: "AL AIN METALS CORPORATION LIMITED",
  shortName: "AL AIN METALS",
  tagline: "African Precious Metals Trading Company",
  phone: "+255 790 575 248",
  phoneDisplay: "+255 790 575 248",
  email: "info@alainmetals.com",
  address: "Dar es Salaam, Tanzania",
  whatsapp: "255790575248",
  description:
    "AL AIN METALS CORPORATION LIMITED is an African precious metals sourcing, trading and export company. Through our sourcing network and strategic partnerships, we supply gold bars, gold nuggets and gold dust to international refineries, bullion dealers, banks, institutional buyers and investors worldwide.",
  heroHeadline: "African Precious Metals,&nbsp;Worldwide Delivery",
  heroSubheadline:
    "Through our sourcing network and strategic partnerships, we supply premium gold to refineries, bullion dealers and institutional buyers worldwide.",
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/export-process" },
  { label: "Compliance", href: "/compliance" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const products: Product[] = [
  {
    title: "Gold Bars",
    description:
      "High-purity refined gold bars cast to international specifications. Sourced through our network of vetted partners. Suitable for refineries, bullion dealers, central banks and institutional investors.",
    purity: "99.9% – 99.99%",
    origin: "Africa",
  },
  {
    title: "Gold Nuggets",
    description:
      "Natural gold nuggets sourced through vetted artisanal and small-scale mining partners. Sought after by jewellery manufacturers, collectors and specialty buyers worldwide.",
    purity: "85% – 95%",
    origin: "Africa",
  },
  {
    title: "Gold Dust",
    description:
      "Fine gold dust recovered from alluvial deposits. Processed, dried and prepared for export to qualified international refineries and precious metals processors.",
    purity: "80% – 92%",
    origin: "Africa",
  },
]

export const services: Service[] = [
  {
    title: "Gold Sourcing & Procurement",
    description:
      "We source gold through a network of vetted miners, cooperatives and partners. Our procurement approach is designed to support consistent supply and supply chain traceability from source to destination.",
  },
  {
    title: "Export Logistics & Documentation",
    description:
      "End-to-end export management including regulatory documentation, customs clearance, secure transport and international shipping coordination.",
  },
  {
    title: "Quality Verification & Assaying",
    description:
      "Independent third-party assaying by qualified laboratories. Transparency on purity, weight and valuation before shipment.",
  },
  {
    title: "Market Intelligence & Advisory",
    description:
      "Guidance on precious metals market conditions, pricing trends and trade regulations across multiple African markets to support informed purchasing decisions.",
  },
  {
    title: "Buyer Representation & Due Diligence",
    description:
      "On-ground representation for international buyers including supplier verification, contract negotiation, site visits and inspection coordination.",
  },
  {
    title: "Payment & Trade Finance Coordination",
    description:
      "Structured payment processes via international banking channels. We work with buyers to facilitate SBLC, DLC and other standard trade finance instruments.",
  },
]

export const sourcingCountries = [
  { name: "Tanzania", flag: "TZ", region: "East Africa" },
  { name: "Uganda", flag: "UG", region: "East Africa" },
  { name: "Kenya", flag: "KE", region: "East Africa" },
  { name: "Rwanda", flag: "RW", region: "East Africa" },
  { name: "Burundi", flag: "BI", region: "East Africa" },
  { name: "DRC", flag: "CD", region: "Central Africa" },
]

export const exportDestinations = [
  { name: "United Arab Emirates", flag: "AE" },
  { name: "India", flag: "IN" },
  { name: "China", flag: "CN" },
  { name: "Switzerland", flag: "CH" },
  { name: "United Kingdom", flag: "GB" },
  { name: "Turkey", flag: "TR" },
  { name: "Hong Kong SAR", flag: "HK" },
  { name: "Saudi Arabia", flag: "SA" },
  { name: "South Africa", flag: "ZA" },
  { name: "Oman", flag: "OM" },
]

export const whyBuyersChooseUs: string[] = [
  "Sourcing network across multiple African markets supported by established partner relationships.",
  "Commitment to regulatory compliance in applicable jurisdictions, with reference to OECD Due Diligence Guidance and relevant national laws.",
  "Independent third-party assaying, documentation and supply chain transparency as part of our standard process.",
  "Dedicated relationship management from initial inquiry through to post-delivery.",
  "Partnership models designed to accommodate refineries, bullion dealers, commodity traders and institutional investors.",
  "Regional expertise with on-ground presence enabling supplier verification, quality control and logistics coordination.",
]

export const whyChooseUs: string[] = [
  "Sourcing network across East Africa and select African markets with established partner relationships.",
  "Commitment to ethical sourcing, applicable national laws, OECD Due Diligence Guidance and international trade regulations.",
  "Supply chain visibility from partner source through export documentation to delivery.",
  "Dedicated relationship management throughout the transaction lifecycle.",
  "Partnership models designed for central banks, refineries, bullion dealers, commodity traders and institutional investors.",
]

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Inquiry & Preliminary Proposal",
    summary:
      "Submit your requirements. We respond with availability, pricing and proposed terms.",
    description:
      "Submit your requirements through our contact channel. We respond with a preliminary proposal including product availability, indicative pricing and proposed terms based on your specifications.",
  },
  {
    step: 2,
    title: "Due Diligence & Agreement",
    summary:
      "Counterparty verification and a formal sale and purchase agreement.",
    description:
      "We conduct counterparty due diligence and share corporate documentation. Where mutually agreed, a sale and purchase agreement is prepared outlining specifications, quantities, pricing and delivery terms.",
  },
  {
    step: 3,
    title: "Verification & Quality Assurance",
    summary:
      "Independent third-party assaying and weight verification before shipment.",
    description:
      "Independent assaying is conducted by a third-party laboratory. Assay certificates and weight verification reports are shared with the buyer for confirmation before shipment.",
  },
  {
    step: 4,
    title: "Payment & Logistics",
    summary:
      "Payment through agreed channels. Customs, security and freight coordination.",
    description:
      "Payment is processed through agreed banking channels. Export logistics including customs clearance, security and freight coordination are initiated.",
  },
  {
    step: 5,
    title: "Delivery & Settlement",
    summary:
      "Insured shipment with tracking. Final settlement upon buyer acceptance.",
    description:
      "Goods are shipped to the designated destination with tracking and insurance. Final settlement is completed upon delivery and buyer acceptance per agreed terms.",
  },
]

export const complianceHighlights = [
  {
    title: "OECD Due Diligence Guidance",
    description:
      "Our approach is informed by the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
  },
  {
    title: "Multi-Jurisdiction Compliance",
    description:
      "We seek to comply with applicable national laws in the markets where we operate, including relevant permits, licences and regulatory requirements.",
  },
  {
    title: "AML & KYC Protocols",
    description:
      "Anti-Money Laundering and Know Your Customer procedures are applied to transactions, including customer due diligence and transaction monitoring.",
  },
  {
    title: "Export Documentation",
    description:
      "Exports are accompanied by documentation including commercial invoices, packing lists, certificates of origin, assay certificates and customs declarations.",
  },
]

export const certificateItems = [
  {
    label: "Certificate of Origin",
    description: "Official documentation certifying the country of origin for each shipment, issued by relevant authorities.",
  },
  {
    label: "Assay Certificate",
    description: "Laboratory analysis confirming gold purity, weight and composition, issued by independent third-party assayers.",
  },
  {
    label: "Export Permit",
    description: "Export authorisation from relevant national authorities for each shipment.",
  },
  {
    label: "Commercial Invoice",
    description: "Commercial documentation including product description, quantities, pricing and terms of sale.",
  },
  {
    label: "Packing List",
    description: "Itemised packing specification detailing weights, packaging and marks for each shipment.",
  },
  {
    label: "Customs Declaration",
    description: "Customs export declarations filed with relevant national authorities per applicable regulations.",
  },
]

export const faqItems: FAQItem[] = [
  {
    question: "What types of gold do you supply?",
    answer:
      "We supply gold bars (99.9% – 99.99% purity), gold nuggets (85% – 95% purity) and gold dust (80% – 92% purity). Products are sourced through our network of vetted partners and undergo independent third-party assaying before shipment.",
  },
  {
    question: "Which countries do you source gold from?",
    answer:
      "Through our sourcing network and partnerships, we engage with sources in multiple African countries including Tanzania, Uganda, Kenya, Rwanda, Burundi and the Democratic Republic of the Congo, among others. Sourcing is conducted with reference to applicable national laws and international trade regulations.",
  },
  {
    question: "How do you verify gold quality and purity?",
    answer:
      "Gold is tested by independent third-party assayers before shipment. Buyers receive assay certificates documenting purity, weight and valuation. Buyer-nominated inspection at origin can be coordinated where agreed.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities vary by product type and are discussed during the proposal stage. Please contact our trading desk with your requirements.",
  },
  {
    question: "How do you approach regulatory compliance?",
    answer:
      "We operate with reference to applicable national mining and export laws in the markets where we source, the OECD Due Diligence Guidance for Responsible Supply Chains, and international trade regulations. Our practices include KYC, AML and supply chain due diligence procedures.",
  },
  {
    question: "What payment terms and methods do you offer?",
    answer:
      "Payment terms are structured on a case-by-case basis. We work with buyers to facilitate wire transfers, SBLC, DLC and other standard trade finance instruments through international banking channels.",
  },
  {
    question: "What is the typical timeline from inquiry to delivery?",
    answer:
      "Timelines depend on product availability, sourcing location, order quantity and destination. We provide estimated timelines during the proposal stage based on the specific requirements of each transaction.",
  },
  {
    question: "What documentation do you provide with shipments?",
    answer:
      "Shipments are accompanied by documentation including commercial invoice, packing list, certificate of origin, assay certificate, customs export declaration and any destination-specific documentation required.",
  },
  {
    question: "Do you handle shipping and logistics?",
    answer:
      "We manage export logistics including secure transport, customs clearance and coordination with international freight forwarders. Shipping can be insured up to the agreed delivery point per the terms of the sale agreement.",
  },
  {
    question: "How do I begin a transaction with AL AIN METALS?",
    answer:
      "Contact us via our website form, email or phone. Our team will respond to discuss your requirements and guide you through our process.",
  },
]

export const stats = [
  { value: "Est.", label: "Established" },
  { value: "Multi", label: "Country Sourcing" },
  { value: "Global", label: "Market Reach" },
  { value: "OECD", label: "Framework Aligned" },
]

export const galleryImages = [
  { src: "/assets/images/investment-grade-gold-bars.webp", alt: "Investment-grade gold bars prepared for international shipment" },
  { src: "/assets/images/natural-african-gold-nuggets.webp", alt: "High-purity natural gold nuggets from African sources" },
  { src: "/assets/images/gold-quality-testing-laboratory.webp", alt: "Gold assaying and quality verification at independent laboratory" },
  { src: "/assets/images/premium-gold-dust-supplier.webp", alt: "Processed premium gold dust ready for export" },
  { src: "/assets/images/secure-gold-storage-vault.webp", alt: "Secure gold storage and vault operations" },
  { src: "/assets/images/african-gold-mining-operations.webp", alt: "Professional gold mining operations across Africa" },
]

export const images = {
  hero: "/assets/images/african-gold-bars-export-company.webp",
  about: "/assets/images/trusted-african-gold-trading-company.webp",
  products: {
    bars: "/assets/images/investment-grade-gold-bars.webp",
    nuggets: "/assets/images/natural-african-gold-nuggets.webp",
    dust: "/assets/images/premium-gold-dust-supplier.webp",
  },
  services: "/assets/images/african-precious-metals-trading.webp",
  exportProcess: "/assets/images/international-gold-export-logistics.webp",
  compliance: "/assets/images/gold-export-compliance-documentation.webp",
  qualityAssurance: "/assets/images/gold-quality-testing-laboratory.webp",
  sourcingNetwork: "/assets/images/african-gold-sourcing-network.webp",
  mining: "/assets/images/african-gold-mining-operations.webp",
  globalMarkets: "/assets/images/global-precious-metals-market.webp",
  logistics: "/assets/images/global-gold-export-port.webp",
  security: "/assets/images/secure-gold-storage-vault.webp",
  contact: "/assets/images/luxury-corporate-headquarters.webp",
}
