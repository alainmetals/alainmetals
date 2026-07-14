import type { Metadata } from "next"
import { FAQContent } from "./FAQContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about precious metals purchasing, gemstone sourcing, export process, quality verification, compliance and working with AL AIN METALS CORPORATION LIMITED.",
  alternates: {
    canonical: "https://www.alainmetals.com/faq",
  },
  openGraph: {
    title: `FAQ | ${company.shortName}`,
    description:
      "Frequently asked questions about precious metals purchasing, gemstone sourcing, export process and compliance.",
    url: "https://www.alainmetals.com/faq",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/global-commodity-trading.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS FAQ - Precious Metals Trading Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ | ${company.shortName}`,
    description:
      "Frequently asked questions about precious metals purchasing, gemstone sourcing, export process and compliance.",
    images: ["/assets/images/global-commodity-trading.webp"],
  },
}

function FAQPageJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What products do you supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We supply precious metals (gold bars, gold nuggets, gold dust, silver bullion, platinum group metals), gemstones (tanzanite, diamonds, rubies, sapphires, emeralds, tsavorite, spinel, tourmaline) and strategic minerals (copper, nickel, cobalt, tantalum, tin, lithium upon request).",
        },
      },
      {
        "@type": "Question",
        name: "How do you verify quality and purity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Precious metals are tested by independent third-party assayers before shipment. Gemstones are authenticated and certified by recognised gemological laboratories. Buyers receive assay certificates and grading reports.",
        },
      },
      {
        "@type": "Question",
        name: "How do you approach regulatory compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We operate with reference to applicable national laws, the OECD Due Diligence Guidance for Responsible Supply Chains, Kimberley Process Certification for rough diamonds, and international trade regulations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle Kimberley Process certification for diamonds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rough diamond sourcing adheres to the Kimberley Process Certification Scheme, ensuring conflict-free supply with full chain-of-custody documentation.",
        },
      },
      {
        "@type": "Question",
        name: "What payment terms do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment terms are structured on a case-by-case basis. We work with buyers to facilitate wire transfers, SBLC, DLC and other standard trade finance instruments.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export default function FAQPage() {
  return (
    <>
      <FAQPageJsonLd />
      <FAQContent />
    </>
  )
}
