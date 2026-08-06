import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "About Al Ain Metals | East African Precious Metals Exporter",
  description:
    "Learn about AL AIN METALS CORPORATION LIMITED, a trusted Tanzania-based African precious metals, gemstones and strategic minerals exporter serving international refineries, bullion dealers and institutional buyers worldwide.",
  alternates: {
    canonical: "https://alainmetalscorp.com/about",
  },
  openGraph: {
    title: `About Us | ${company.shortName}`,
    description:
      "Learn about AL AIN METALS CORPORATION LIMITED, a trusted Tanzania-based African precious metals exporter serving international markets.",
    url: "https://alainmetalscorp.com/about",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/trusted-african-gold-trading-company.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS CORPORATION LIMITED - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${company.shortName}`,
    description:
      "Learn about AL AIN METALS CORPORATION LIMITED, a trusted Tanzania-based African precious metals exporter serving international markets.",
    images: ["/assets/images/trusted-african-gold-trading-company.webp"],
  },
}

export default function AboutPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "About", url: "https://alainmetalscorp.com/about" } ] }} />
      <AboutContent />
    </>
  )
}
