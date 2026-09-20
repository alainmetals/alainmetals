import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "About Al Ain Metals | East African Precious Metals Exporter",
  description:
    "Rooted in Africa. Trusted worldwide. AL AIN Metals connects exceptional African precious metals and gemstones with private clients around the world.",
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
  return <AboutContent />
}