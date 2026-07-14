import { NavLink, ProductCategory, Service, FAQItem, TimelineStep } from "@/types"

export const company = {
  name: "AL AIN METALS CORPORATION LIMITED",
  shortName: "AL AIN METALS",
  tagline: "African Precious Metals, Gemstones & Strategic Minerals",
  phone: "+255 652 979 692",
  phoneDisplay: "+255 652 979 692",
  email: "info@alainmetals.com",
  address: "Dar es Salaam, Tanzania",
  whatsapp: "255652979692",
  description:
    "AL AIN METALS CORPORATION LIMITED is an African precious metals, gemstones and strategic minerals sourcing, trading and export company. Through our sourcing network and strategic partnerships, we supply gold, silver, platinum group metals, gemstones and industrial minerals to international refineries, bullion dealers, jewellers, banks, institutional buyers and investors worldwide.",
  heroHeadline: "African Precious Metals, Gemstones & Strategic Minerals",
  heroSubheadline:
    "Through our sourcing network and strategic partnerships, we supply premium precious metals, gemstones and strategic minerals to refineries, jewellers, bullion dealers and institutional buyers worldwide.",
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

export const productCategories: ProductCategory[] = [
  {
    title: "Precious Metals",
    items: [
      {
        title: "Gold Bars",
        description:
          "High-purity refined gold bars cast to international specifications. Suitable for refineries, bullion dealers, central banks and institutional investors.",
        purity: "99.9% – 99.99%",
        origin: "Africa",
      },
      {
        title: "Gold Nuggets",
        description:
          "Natural gold nuggets sourced through vetted artisanal and small-scale mining partners. Sought after by jewellery manufacturers and collectors worldwide.",
        purity: "85% – 95%",
        origin: "Africa",
      },
      {
        title: "Gold Dust",
        description:
          "Fine gold dust recovered from alluvial deposits. Processed, dried and prepared for export to qualified international refineries.",
        purity: "80% – 92%",
        origin: "Africa",
      },
      {
        title: "Silver Bullion",
        description:
          "Refined silver bars and bullion products for industrial use, investment and jewellery manufacturing.",
        purity: "99.9%",
        origin: "Africa",
      },
      {
        title: "Platinum Group Metals",
        description:
          "Platinum, palladium and rhodium sourced upon request for specialised industrial and investment applications.",
        purity: "Per specification",
        origin: "Africa",
      },
    ],
  },
  {
    title: "Gemstones",
    items: [
      {
        title: "Tanzanite",
        description:
          "Rare blue-violet gemstone exclusive to East Africa. Supplied in calibrated and bespoke sizes for luxury jewellers.",
        origin: "Tanzania",
      },
      {
        title: "Rough Diamonds",
        description:
          "Uncut diamonds sourced through licensed channels with full Kimberley Process certification.",
        origin: "Africa",
      },
      {
        title: "Polished Diamonds",
        description:
          "Certified polished diamonds in various cuts and grades for jewellery and investment.",
        origin: "Global",
      },
      {
        title: "Rubies",
        description:
          "Premium African rubies prized for their deep red colour and exceptional brilliance.",
        origin: "Africa",
      },
      {
        title: "Sapphires",
        description:
          "Natural sapphires in blue, yellow and fancy colours sourced from East African deposits.",
        origin: "Africa",
      },
      {
        title: "Emeralds",
        description:
          "High-quality emeralds with vivid green colour for luxury jewellery applications.",
        origin: "Africa",
      },
      {
        title: "Tsavorite",
        description:
          "Rare green garnet found in East Africa. Valued for its vivid colour and brilliance.",
        origin: "East Africa",
      },
      {
        title: "Spinel",
        description:
          "Natural spinel in red, pink and blue hues. An emerging collectors gemstone.",
        origin: "Africa",
      },
      {
        title: "Tourmaline",
        description:
          "Multi-coloured tourmaline in paraiba, rubellite and indicolite varieties.",
        origin: "Africa",
      },
    ],
  },
  {
    title: "Strategic Minerals",
    items: [
      {
        title: "Copper",
        description:
          "Copper cathodes and concentrate for industrial manufacturing and electronics.",
        purity: "99.99%",
        origin: "Africa",
      },
      {
        title: "Nickel",
        description:
          "Nickel ore and refined products for stainless steel and battery manufacturing.",
        purity: "Per specification",
        origin: "Africa",
      },
      {
        title: "Cobalt",
        description:
          "Cobalt hydroxide and refined cobalt for lithium-ion battery and aerospace industries.",
        purity: "Per specification",
        origin: "Africa",
      },
      {
        title: "Tantalum",
        description:
          "Conflict-free tantalum for electronics, capacitors and aerospace applications.",
        purity: "Per specification",
        origin: "Africa",
      },
      {
        title: "Tin",
        description:
          "Tin ingots and concentrate for soldering, packaging and industrial applications.",
        purity: "99.9%",
        origin: "Africa",
      },
      {
        title: "Lithium",
        description:
          "Lithium products sourced upon request for battery and energy storage industries.",
        purity: "Per specification",
        origin: "Africa",
      },
    ],
  },
]

export const services: Service[] = [
  {
    title: "Commodity Sourcing & Procurement",
    description:
      "We source precious metals, gemstones and strategic minerals through a network of vetted miners, cooperatives and partners across Africa. Our procurement approach supports consistent supply and full traceability.",
  },
  {
    title: "Precious Metals Trading",
    description:
      "Structured trading in gold, silver and platinum group metals with transparent pricing and settlement through established international banking channels.",
  },
  {
    title: "Gemstone Sourcing",
    description:
      "Direct sourcing of tanzanite, diamonds, rubies, sapphires, emeralds and other gemstones from African mining regions with full chain-of-custody documentation.",
  },
  {
    title: "Strategic Minerals Supply",
    description:
      "Supply of copper, nickel, cobalt, tantalum, tin and lithium from African sources to global industrial buyers and manufacturers.",
  },
  {
    title: "Independent Assaying & Quality Verification",
    description:
      "Independent third-party assaying by qualified laboratories. Transparency on purity, weight and valuation before shipment for all precious metals.",
  },
  {
    title: "Gemstone Authentication & Certification",
    description:
      "Gemstones authenticated and certified by recognised gemological laboratories. Buyers receive detailed grading reports and provenance documentation.",
  },
  {
    title: "Export Documentation",
    description:
      "End-to-end export management including regulatory documentation, certificates of origin, customs clearance and compliance with applicable export regulations.",
  },
  {
    title: "Secure Logistics",
    description:
      "Armoured transport, secure storage and international freight coordination with insurance coverage to the agreed delivery point.",
  },
  {
    title: "Trade Finance Coordination",
    description:
      "Structured payment processes via international banking channels. We work with buyers to facilitate SBLC, DLC, wire transfers and other standard trade finance instruments.",
  },
  {
    title: "Buyer Due Diligence",
    description:
      "On-ground representation for international buyers including supplier verification, contract negotiation, site visits and inspection coordination.",
  },
]

export const sourcingCountries = [
  { name: "Tanzania", flag: "TZ", region: "East Africa" },
  { name: "Uganda", flag: "UG", region: "East Africa" },
  { name: "Kenya", flag: "KE", region: "East Africa" },
  { name: "Rwanda", flag: "RW", region: "East Africa" },
  { name: "Burundi", flag: "BI", region: "East Africa" },
  { name: "DRC", flag: "CD", region: "Central Africa" },
  { name: "Zambia", flag: "ZM", region: "Southern Africa" },
  { name: "Zimbabwe", flag: "ZW", region: "Southern Africa" },
  { name: "Botswana", flag: "BW", region: "Southern Africa" },
  { name: "Namibia", flag: "NA", region: "Southern Africa" },
  { name: "Ghana", flag: "GH", region: "West Africa" },
  { name: "South Africa", flag: "ZA", region: "Southern Africa" },
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
  "Commitment to responsible sourcing, applicable national laws, OECD Due Diligence Guidance and international trade regulations.",
  "Independent third-party assaying, gemstone certification, documentation and supply chain transparency.",
  "Dedicated relationship management from initial inquiry through to post-delivery.",
  "Partnership models designed to accommodate refineries, bullion dealers, jewellers, commodity traders and institutional investors.",
  "Regional expertise with on-ground presence enabling supplier verification, quality control and logistics coordination.",
]

export const whyChooseUs: string[] = [
  "Sourcing network across East and Southern Africa with established partner relationships.",
  "Commitment to responsible sourcing, applicable national laws, OECD Due Diligence Guidance and international trade regulations.",
  "Supply chain visibility from partner source through export documentation to delivery.",
  "Dedicated relationship management throughout the transaction lifecycle.",
  "Partnership models designed for central banks, refineries, bullion dealers, jewellers, commodity traders and institutional investors.",
]

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Inquiry & Preliminary Proposal",
    summary:
      "Submit your sourcing requirements, preferred product, quantity and destination.",
    highlight: "Response within 24 hours",
    description:
      "Submit your requirements through our contact channel. We respond with a preliminary proposal including product availability, indicative pricing and proposed terms based on your specifications.",
  },
  {
    step: 2,
    title: "Due Diligence & Agreement",
    summary:
      "Counterparty verification and a formal sale and purchase agreement.",
    highlight: "Full documentation exchange",
    description:
      "We conduct counterparty due diligence and share corporate documentation. Where mutually agreed, a sale and purchase agreement is prepared outlining specifications, quantities, pricing and delivery terms.",
  },
  {
    step: 3,
    title: "Verification & Quality Assurance",
    summary:
      "Independent third-party assaying and weight verification before shipment.",
    highlight: "Certified lab results shared",
    description:
      "Independent assaying is conducted by a third-party laboratory. Assay certificates and weight verification reports are shared with the buyer for confirmation before shipment.",
  },
  {
    step: 4,
    title: "Payment & Logistics",
    summary:
      "Payment through agreed channels. Customs, security and freight coordination.",
    highlight: "SBLC, DLC & wire transfer accepted",
    description:
      "Payment is processed through agreed banking channels. Export logistics including customs clearance, security and freight coordination are initiated.",
  },
  {
    step: 5,
    title: "Delivery & Settlement",
    summary:
      "Insured shipment with tracking. Final settlement upon buyer acceptance.",
    highlight: "Fully insured global shipping",
    description:
      "Goods are shipped to the designated destination with tracking and insurance. Final settlement is completed upon delivery and buyer acceptance per agreed terms.",
  },
]

export const complianceHighlights = [
  {
    title: "Responsible Sourcing",
    description:
      "Our approach is informed by the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.",
  },
  {
    title: "Kimberley Process Compliance",
    description:
      "Rough diamond sourcing adheres to the Kimberley Process Certification Scheme, ensuring conflict-free diamond supply.",
  },
  {
    title: "Multi-Jurisdiction Compliance",
    description:
      "We seek to comply with applicable national mining and export laws in the markets where we operate, including relevant permits, licences and regulatory requirements.",
  },
  {
    title: "AML & KYC Protocols",
    description:
      "Anti-Money Laundering and Know Your Customer procedures are applied to all transactions, including customer due diligence and transaction monitoring.",
  },
  {
    title: "Export Documentation",
    description:
      "Exports are accompanied by documentation including commercial invoices, packing lists, certificates of origin, assay certificates, gemological reports and customs declarations.",
  },
  {
    title: "Country-Specific Requirements",
    description:
      "We navigate country-specific export regulations, permit requirements and bilateral trade agreements across our sourcing jurisdictions.",
  },
]

export const certificateItems = [
  {
    label: "Certificate of Origin",
    description: "Official documentation certifying the country of origin for each shipment, issued by relevant authorities.",
  },
  {
    label: "Assay Certificate",
    description: "Laboratory analysis confirming precious metal purity, weight and composition, issued by independent third-party assayers.",
  },
  {
    label: "Gemological Report",
    description: "Independent gemstone authentication and grading report from recognised gemological laboratories.",
  },
  {
    label: "Kimberley Process Certificate",
    description: "Certification confirming rough diamonds are sourced through conflict-free channels per the Kimberley Process.",
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
    question: "What products do you supply?",
    answer:
      "We supply precious metals (gold bars, gold nuggets, gold dust, silver bullion, platinum group metals), gemstones (tanzanite, diamonds, rubies, sapphires, emeralds, tsavorite, spinel, tourmaline) and strategic minerals (copper, nickel, cobalt, tantalum, tin, lithium upon request).",
  },
  {
    question: "Which countries do you source from?",
    answer:
      "We source commodities through an established African network, including Tanzania, Uganda, Kenya, Rwanda, Burundi, DRC, Zambia, Zimbabwe, Botswana, Namibia, Ghana and South Africa, among others. Sourcing is conducted with reference to applicable national laws and international trade regulations.",
  },
  {
    question: "How do you verify quality and purity?",
    answer:
      "Precious metals are tested by independent third-party assayers before shipment. Gemstones are authenticated and certified by recognised gemological laboratories. Buyers receive assay certificates and grading reports documenting purity, weight and valuation.",
  },
  {
    question: "Do you handle Kimberley Process certification for diamonds?",
    answer:
      "Yes. Rough diamond sourcing adheres to the Kimberley Process Certification Scheme, ensuring conflict-free supply with full chain-of-custody documentation.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities vary by product type and are discussed during the proposal stage. Please contact our trading desk with your requirements.",
  },
  {
    question: "How do you approach regulatory compliance?",
    answer:
      "We operate with reference to applicable national mining and export laws, the OECD Due Diligence Guidance for Responsible Supply Chains, Kimberley Process Certification and international trade regulations. Our practices include KYC, AML and supply chain due diligence procedures.",
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
      "Shipments are accompanied by documentation including commercial invoice, packing list, certificate of origin, assay certificate, gemological report (where applicable), Kimberley Process certificate (for rough diamonds), customs export declaration and any destination-specific documentation required.",
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
  { src: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp", alt: "African precious metals, gemstones and strategic minerals collection" },
  { src: "/assets/images/investment-grade-gold-bars.webp", alt: "Investment-grade gold bars prepared for international shipment" },
  { src: "/assets/images/natural-african-gold-nuggets.webp", alt: "High-purity natural gold nuggets from African sources" },
  { src: "/assets/images/premium-tanzanite-gemstones.webp", alt: "Premium tanzanite gemstones sourced from East Africa" },
  { src: "/assets/images/certified-diamond-trading.webp", alt: "Certified rough diamonds with Kimberley Process documentation" },
  { src: "/assets/images/premium-silver-bullion.webp", alt: "Refined silver bullion products for investment and industry" },
  { src: "/assets/images/strategic-minerals-africa.webp", alt: "Strategic minerals sourced from African mining regions" },
  { src: "/assets/images/precious-metals-assaying-laboratory.webp", alt: "Independent assaying and quality verification laboratory" },
  { src: "/assets/images/secure-precious-metals-vault.webp", alt: "Secure precious metals storage and vault operations" },
  { src: "/assets/images/african-commodity-sourcing-network.webp", alt: "African commodity sourcing network across multiple countries" },
]

export const images = {
  about: "/assets/images/trusted-african-gold-trading-company.webp",
  products: {
    bars: "/assets/images/investment-grade-gold-bars.webp",
    nuggets: "/assets/images/natural-african-gold-nuggets.webp",
    dust: "/assets/images/premium-gold-dust-supplier.webp",
  },
  services: "/assets/images/global-commodity-trading.webp",
  exportProcess: "/assets/images/international-commodity-export-logistics.webp",
  compliance: "/assets/images/gold-export-compliance-documentation.webp",
  qualityAssurance: "/assets/images/precious-metals-assaying-laboratory.webp",
  sourcingNetwork: "/assets/images/african-commodity-sourcing-network.webp",
  mining: "/assets/images/african-gold-mining-operations.webp",
  globalMarkets: "/assets/images/global-commodity-trading.webp",
  logistics: "/assets/images/international-commodity-export-logistics.webp",
  security: "/assets/images/secure-precious-metals-vault.webp",
  contact: "/assets/images/luxury-commodity-trading-headquarters.webp",
}
