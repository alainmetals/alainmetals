import type { Metadata } from "next"
import { BlogContent } from "./BlogContent"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Blog | Precious Metals Insights | Al Ain Metals Corp",
  description:
    "Expert insights on gold trading, gemstone sourcing, OECD due diligence, Kimberley Process compliance and precious metals logistics from Al Ain Metals Corp.",
  alternates: {
    canonical: "https://alainmetalscorp.com/blog",
  },
  openGraph: {
    title: `Blog | ${company.shortName}`,
    description:
      "Expert insights on gold trading, gemstone sourcing, compliance and precious metals logistics.",
    url: "https://alainmetalscorp.com/blog",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Blog & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${company.shortName}`,
    description:
      "Expert insights on gold trading, gemstone sourcing, compliance and precious metals logistics.",
    images: ["/assets/images/african-precious-metals-gemstones-strategic-minerals.webp"],
  },
}

export default function BlogPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Blog", url: "https://alainmetalscorp.com/blog" } ] }} />
      <BlogContent />
    </>
  )
}
