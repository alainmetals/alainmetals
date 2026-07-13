import { company } from "@/lib/siteData"

export function JsonLd() {
  const baseUrl = "https://www.alainmetals.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: company.name,
    url: baseUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    description: company.description,
    legalName: company.name,
    knowsAbout: [
      "Gold supply",
      "Precious metals trading",
      "Bullion supply",
      "Gold bars",
      "Gold nuggets",
      "Gold dust",
      "Mineral trading Africa",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: company.name,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/faq/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of gold do you supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We supply gold bars (99.9% – 99.99% purity), gold nuggets (85% – 95% purity) and gold dust (80% – 92% purity). Products are sourced through our network of vetted partners and undergo independent third-party assaying before shipment.",
        },
      },
      {
        "@type": "Question",
        name: "How do you verify the quality of your gold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold is tested by independent third-party assayers before shipment. Buyers receive assay certificates documenting purity, weight and valuation.",
        },
      },
      {
        "@type": "Question",
        name: "How do you approach regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We operate with reference to applicable national laws, the OECD Due Diligence Guidance for Responsible Supply Chains, and international trade regulations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical timeline from inquiry to delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on product availability, sourcing location, order quantity and destination. We provide estimated timelines during the proposal stage.",
        },
      },
      {
        "@type": "Question",
        name: "What payment terms do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment terms are structured on a case-by-case basis. We work with buyers to facilitate wire transfers, SBLC, DLC and other standard trade finance instruments.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
