import type { Metadata } from "next"
import { ServicesContent } from "./ServicesContent"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company, services } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Precious Metals Trading & Export Services | Al Ain Metals",
  description:
    "Comprehensive precious metals, gemstones and strategic minerals trading and export services including commodity sourcing, logistics, quality verification, trade finance coordination and market advisory from East Africa.",
  alternates: {
    canonical: "https://alainmetalscorp.com/services",
  },
  openGraph: {
    title: `Services | ${company.shortName}`,
    description:
      "Comprehensive precious metals, gemstones and strategic minerals trading and export services.",
    url: "https://alainmetalscorp.com/services",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/global-commodity-trading.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS Services - Precious Metals Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${company.shortName}`,
    description:
      "Comprehensive precious metals, gemstones and strategic minerals trading and export services.",
    images: ["/assets/images/global-commodity-trading.webp"],
  },
}

function ServiceSchema() {
  const baseUrl = "https://alainmetalscorp.com"
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/#service`,
    serviceType: "Precious Metals Trading & Export Services",
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: company.name,
      url: baseUrl,
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Precious Metals, Gemstones & Strategic Minerals Services",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Services", url: "https://alainmetalscorp.com/services" } ] }} />
      <ServiceSchema />
      <ServicesContent />
    </>
  )
}
