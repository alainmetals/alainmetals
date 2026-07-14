import type { Metadata } from "next"
import { ServicesContent } from "./ServicesContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive precious metals, gemstones and strategic minerals trading and export services including sourcing, logistics, quality verification, trade finance and market advisory.",
  alternates: {
    canonical: "https://www.alainmetals.com/services",
  },
  openGraph: {
    title: `Services | ${company.shortName}`,
    description:
      "Comprehensive precious metals, gemstones and strategic minerals trading and export services.",
    url: "https://www.alainmetals.com/services",
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

export default function ServicesPage() {
  return <ServicesContent />
}
