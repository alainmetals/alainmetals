import type { Metadata } from "next"
import { GemstonesContent } from "./GemstonesContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Exceptional African Gemstones — Tanzanite, Ruby, Emerald, Sapphire",
  description:
    "AL AIN Metals offers tanzanite from the Merelani Hills (world's only commercial source), ruby, emerald, and sapphire — all GIA/GRS certified. Tanzanite is 585 million years old and 1,000 times rarer than diamond.",
  alternates: {
    canonical: "https://alainmetalscorp.com/gemstones",
  },
  openGraph: {
    title: `Gemstones | ${company.shortName}`,
    description:
      "Premium tanzanite, diamonds, rubies, sapphires and emeralds sourced from East Africa with full certification.",
    url: "https://alainmetalscorp.com/gemstones",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/premium-tanzanite-gemstones.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - East African Gemstones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gemstones | ${company.shortName}`,
    description:
      "Premium tanzanite, diamonds, rubies, sapphires and emeralds sourced from East Africa with full certification.",
    images: ["/assets/images/premium-tanzanite-gemstones.webp"],
  },
}

export default function GemstonesPage() {
  return <GemstonesContent />
}