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
      "Precious metals trading",
      "Gold supply",
      "Silver bullion",
      "Platinum group metals",
      "Gemstone sourcing",
      "Tanzanite",
      "Rough diamonds",
      "Polished diamonds",
      "Rubies",
      "Sapphires",
      "Emeralds",
      "Strategic minerals",
      "Copper",
      "Cobalt",
      "Nickel",
      "Tantalum",
      "Tin",
      "Lithium",
      "Mineral trading Africa",
      "Kimberley Process",
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
    </>
  )
}
