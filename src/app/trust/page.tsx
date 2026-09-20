import type { Metadata } from "next"
import { TrustContent } from "./TrustContent"

export const metadata: Metadata = {
  title: "Trust & Verification — Licensing, Assaying, Insurance & Compliance",
  description:
    "AL AIN Metals is licensed by the Tanzania Mining Commission, uses SGS and Bureau Veritas assaying, Lloyd's-of-London insurance, and complies with AML Act 2006, FATF, and Kimberley Process standards.",
  openGraph: {
    title: "Trust & Compliance | AL AIN METALS",
    description: "Corporate governance, responsible sourcing, AML/KYC compliance, ESG sustainability and supply chain integrity.",
    url: "https://alainmetalscorp.com/trust",
    siteName: "AL AIN METALS CORPORATION LIMITED",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/luxury-commodity-trading-headquarters.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Trust & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust & Compliance | AL AIN METALS",
    description: "Corporate governance, responsible sourcing, AML/KYC compliance, ESG sustainability and supply chain integrity.",
    images: ["/assets/images/luxury-commodity-trading-headquarters.webp"],
  },
  alternates: {
    canonical: "https://alainmetalscorp.com/trust",
  },
}

export default function TrustPage() {
  return <TrustContent />
}