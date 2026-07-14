import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AL AIN METALS CORPORATION LIMITED, a trusted Tanzania-based African precious metals, gemstones and strategic minerals exporter serving international markets.",
  alternates: {
    canonical: "https://www.alainmetals.com/about",
  },
  openGraph: {
    title: `About Us | ${company.shortName}`,
    description:
      "Learn about AL AIN METALS CORPORATION LIMITED, a trusted Tanzania-based African precious metals exporter serving international markets.",
    url: "https://www.alainmetals.com/about",
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
  return <AboutContent />
}
