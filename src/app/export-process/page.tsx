import type { Metadata } from "next"
import { ExportProcessContent } from "./ExportProcessContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Export Process",
  description:
    "Learn about our transparent precious metals, gemstones and strategic minerals export process from inquiry to delivery. Clear steps designed for buyer confidence and full compliance.",
  alternates: {
    canonical: "https://www.alainmetals.com/export-process",
  },
  openGraph: {
    title: `Export Process | ${company.shortName}`,
    description:
      "Transparent export process from inquiry to delivery for precious metals, gemstones and strategic minerals.",
    url: "https://www.alainmetals.com/export-process",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/international-commodity-export-logistics.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS Export Process - International Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Export Process | ${company.shortName}`,
    description:
      "Transparent export process from inquiry to delivery for precious metals, gemstones and strategic minerals.",
    images: ["/assets/images/international-commodity-export-logistics.webp"],
  },
}

export default function ExportProcessPage() {
  return <ExportProcessContent />
}
