import { businessFacts } from "@/lib/aeoContent"

interface FaqItem {
  question: string
  answer: string
}

interface JsonLdProps {
  faqs?: FaqItem[]
  pageName?: string
  pageDescription?: string
  pageUrl?: string
  breadcrumbs?: { name: string; url: string }[]
  pageType?: "page" | "gold" | "gemstones" | "howItWorks" | "trust" | "about" | "provenance" | "inquire" | "private-clients"
}

export function JsonLd({ faqs, pageName, pageDescription, pageUrl, breadcrumbs, pageType = "page" }: JsonLdProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessFacts.fullName,
    url: businessFacts.website,
    telephone: businessFacts.phone,
    email: businessFacts.email,
    logo: `${businessFacts.website}/assets/images/investment-grade-gold-bars.webp`,
    description: "Private access to African gold and rare gemstones for qualified buyers. Tanzania-based, DMCC-registered, with Lloyd's-insured logistics.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.7924,
      longitude: 39.2083,
    },
    areaServed: "Global",
    knowsAbout: [
      "private gold acquisition",
      "african gemstones",
      "tanzanite",
      "allocated gold bars",
      "precious metals verification",
      "private client precious metals",
      "gold assaying",
      "gemstone certification",
      "Lloyd's insured gold logistics",
      "DMCC gold vaulting",
    ],
    foundingLocation: "Dar es Salaam, Tanzania",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessFacts.phone,
      email: businessFacts.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: businessFacts.website,
    name: businessFacts.fullName,
    publisher: {
      "@type": "Organization",
      name: businessFacts.fullName,
    },
    inLanguage: "en-US",
  }

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Private Client Precious Metals Acquisition",
    provider: {
      "@type": "Organization",
      name: businessFacts.fullName,
    },
    areaServed: "Global",
    description: "Private access to African gold and rare gemstones for qualified buyers. Includes sourcing, independent verification, secure settlement, and Lloyd's-insured delivery.",
    offers: {
      "@type": "Offer",
      price: "250000",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Standard minimum allocation USD $250,000. Trial from $50,000 for verified family offices.",
      },
    },
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessFacts.fullName,
    image: `${businessFacts.website}/assets/images/investment-grade-gold-bars.webp`,
    url: businessFacts.website,
    telephone: businessFacts.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.7924,
      longitude: 39.2083,
    },
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  }

  // Product schemas for gold
  const goldProducts = pageType === "gold" ? [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Investment-Grade Gold Bars",
      description: "Independently assayed gold bars (99.5%–99.99% purity) from the Kilimanjaro Gold Belt, Tanzania. SGS and Bureau Veritas certified.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Gold",
      category: "Precious Metals",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "250000",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Minimum allocation $250,000",
        },
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Natural Gold Nuggets",
      description: "Naturally formed gold nuggets from licensed artisanal mining in the Kilimanjaro Gold Belt. Independently tested for purity and origin.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Gold",
      category: "Precious Metals",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "250000",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Premium Gold Dust",
      description: "Finely recovered gold dust from licensed artisanal mining operations in Tanzania. Independently tested for purity and grade.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Gold",
      category: "Precious Metals",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "250000",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
  ] : []

  // Product schemas for gemstones
  const gemstoneProducts = pageType === "gemstones" ? [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Tanzanite — Merelani Hills",
      description: "Violet-blue tanzanite from the Merelani Hills, Tanzania — the world's only commercial source. 585 million years old, approximately 1,000 times rarer than diamond. GIA/GRS certified.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Tanzanite",
      category: "Gemstones",
      origin: "Merelani Hills, Tanzania",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "African Ruby",
      description: "Deep red corundum sourced from East Africa. Independently verified for color, clarity, and origin. GIA/GRS certified.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Ruby",
      category: "Gemstones",
      origin: "East Africa",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "African Emerald",
      description: "Vivid green beryl of exceptional clarity and color saturation. Sourced from African origins. GIA/GRS certified.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Emerald",
      category: "Gemstones",
      origin: "Africa",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "African Sapphire",
      description: "Blue corundum of remarkable depth and brilliance. Sourced from African deposits. GIA/GRS certified.",
      brand: { "@type": "Brand", name: businessFacts.fullName },
      material: "Sapphire",
      category: "Gemstones",
      origin: "Africa",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: businessFacts.fullName },
      },
    },
  ] : []

  // HowTo schema
  const howTo = pageType === "howItWorks" ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Buy Private Gold from AL AIN Metals",
    description: "A 5-step process for privately acquiring physical gold through AL AIN Metals: consultation, sourcing, verification, secure transaction, and Lloyd's-insured delivery.",
    step: [
      {
        "@type": "HowToStep",
        name: "Private Consultation",
        text: "Submit a private client enquiry. AL AIN Metals responds within 48 business hours to understand your acquisition objectives.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Sourcing",
        text: "AL AIN Metals identifies suitable gold or gemstones from licensed operations in the Kilimanjaro Gold Belt or Merelani Hills.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Independent Verification",
        text: "Gold is assayed by SGS or Bureau Veritas. Gemstones receive GIA/GRS certification. Full provenance documentation is provided.",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Secure Transaction",
        text: "KYC/AML compliance checks under Tanzania AML Act 2006 and FATF standards. Documented settlement with mutual NDA.",
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: "Delivery or Secure Custody",
        text: "Lloyd's-insured delivery via Brink's or Loomis, or secure custody in Dubai (DMCC), Singapore (Brink's), or Geneva (Loomis).",
        position: 5,
      },
    ],
    totalTime: "P14D",
  } : null

  // FAQPage schema
  const faqPage = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  // BreadcrumbList schema
  const breadcrumbList = breadcrumbs && breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null

  // WebPage schema with speakable
  const webPage = pageName
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: pageName,
        description: pageDescription,
        url: pageUrl,
        publisher: {
          "@type": "Organization",
          name: businessFacts.fullName,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".editorial-headline-sm", ".editorial-subhead"],
        },
      }
    : null

  const schemas = [
    organization,
    website,
    service,
    localBusiness,
    ...goldProducts,
    ...gemstoneProducts,
    howTo,
    faqPage,
    breadcrumbList,
    webPage,
  ].filter(Boolean)

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
