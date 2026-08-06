import type { Metadata } from "next"
import { ExportProcessContent } from "./ExportProcessContent"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Export Process | Al Ain Metals Precious Metals Export Africa",
  description:
    "Learn about our transparent precious metals, gemstones and strategic minerals export process from inquiry to final delivery. Clear, structured steps designed for buyer confidence and full regulatory compliance.",
  alternates: {
    canonical: "https://alainmetalscorp.com/export-process",
  },
  openGraph: {
    title: `Export Process | ${company.shortName}`,
    description:
      "Transparent export process from inquiry to delivery for precious metals, gemstones and strategic minerals.",
    url: "https://alainmetalscorp.com/export-process",
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
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Export Process", url: "https://alainmetalscorp.com/export-process" } ] }} />
      <ExportProcessContent />
    </>
  )
}
