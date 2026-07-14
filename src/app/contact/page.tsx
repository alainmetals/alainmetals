import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AL AIN METALS CORPORATION LIMITED. Contact our trading desk for precious metals, gemstones and strategic minerals inquiries, quotations and partnership discussions.",
  alternates: {
    canonical: "https://www.alainmetals.com/contact",
  },
  openGraph: {
    title: `Contact | ${company.shortName}`,
    description:
      "Contact AL AIN METALS for precious metals, gemstones and strategic minerals inquiries.",
    url: "https://www.alainmetals.com/contact",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/luxury-commodity-trading-headquarters.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS Contact - Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${company.shortName}`,
    description:
      "Contact AL AIN METALS for precious metals, gemstones and strategic minerals inquiries.",
    images: ["/assets/images/luxury-commodity-trading-headquarters.webp"],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
