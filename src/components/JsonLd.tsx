import { company, services, productCategories } from "@/lib/siteData"

export function JsonLd() {
  const baseUrl = "https://alainmetalscorp.com"

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
      streetAddress: "Dar es Salaam",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.7924,
      longitude: 39.2083,
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
    sameAs: [
      "https://www.linkedin.com/company/al-ain-metals-corporation",
    ],
    logo: `${baseUrl}/assets/images/african-precious-metals-gemstones-strategic-minerals.webp`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "sales",
      email: company.email,
      availableLanguage: "English",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: company.name,
    image: `${baseUrl}/assets/images/luxury-commodity-trading-headquarters.webp`,
    url: baseUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dar es Salaam",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      postalCode: "",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.7924,
      longitude: 39.2083,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -6.7924,
        longitude: 39.2083,
      },
      geoRadius: "5000km",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Precious Metals Trading",
    provider: {
      "@type": "Organization",
      name: company.name,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Precious Metals, Gemstones & Strategic Minerals",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  const productSchemas = productCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: item.title,
      description: item.description,
      image: `${baseUrl}${item.image || "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp"}`,
      brand: {
        "@type": "Brand",
        name: company.name,
      },
      manufacturer: {
        "@type": "Organization",
        name: company.name,
      },
      category: category.title,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        seller: {
          "@type": "Organization",
          name: company.name,
        },
      },
    }))
  )

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
