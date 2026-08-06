import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Contact Al Ain Metals Corp | Trading Desk & Inquiries",
  description:
    "Contact AL AIN METALS CORPORATION LIMITED for precious metals, gemstones and strategic minerals inquiries. Trading desk in Dar es Salaam, Tanzania. Phone, email and online form available.",
  alternates: {
    canonical: "https://alainmetalscorp.com/contact",
  },
  openGraph: {
    title: `Contact | ${company.shortName}`,
    description:
      "Contact AL AIN METALS for precious metals, gemstones and strategic minerals inquiries. Trading desk in Dar es Salaam, Tanzania.",
    url: "https://alainmetalscorp.com/contact",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/luxury-commodity-trading-headquarters.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Contact Our Trading Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${company.shortName}`,
    description:
      "Contact AL AIN METALS for precious metals, gemstones and strategic minerals inquiries. Trading desk in Dar es Salaam, Tanzania.",
    images: ["/assets/images/luxury-commodity-trading-headquarters.webp"],
  },
}

export default function ContactPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Contact", url: "https://alainmetalscorp.com/contact" } ] }} />
      <ContactContent />
    </>
  )
}
