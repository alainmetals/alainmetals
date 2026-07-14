import type { Metadata } from "next"
import { ComplianceContent } from "./ComplianceContent"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "AL AIN METALS CORPORATION LIMITED is committed to ethical sourcing and compliance with OECD Due Diligence Guidance, Kimberley Process Certification and applicable national and international trade regulations.",
  alternates: {
    canonical: "https://www.alainmetals.com/compliance",
  },
  openGraph: {
    title: `Compliance | ${company.shortName}`,
    description:
      "Ethical sourcing compliance with OECD Due Diligence, Kimberley Process and international trade regulations.",
    url: "https://www.alainmetals.com/compliance",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/gold-export-compliance-documentation.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS Compliance - Export Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Compliance | ${company.shortName}`,
    description:
      "Ethical sourcing compliance with OECD Due Diligence, Kimberley Process and international trade regulations.",
    images: ["/assets/images/gold-export-compliance-documentation.webp"],
  },
}

export default function CompliancePage() {
  return <ComplianceContent />
}
