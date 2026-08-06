import type { Metadata } from "next"
import { TestimonialsContent } from "./TestimonialsContent"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Testimonials | Precious Metals Trading Reviews | Al Ain Metals",
  description:
    "Read what international buyers say about Al Ain Metals Corp - trusted gold, gemstone and strategic minerals trading partner for refineries, banks and institutional buyers.",
  alternates: {
    canonical: "https://alainmetalscorp.com/testimonials",
  },
  openGraph: {
    title: `Client Testimonials | ${company.shortName}`,
    description:
      "Read what international buyers say about Al Ain Metals Corp.",
    url: "https://alainmetalscorp.com/testimonials",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/global-commodity-trading.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Client Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Client Testimonials | ${company.shortName}`,
    description:
      "Read what international buyers say about Al Ain Metals Corp.",
    images: ["/assets/images/global-commodity-trading.webp"],
  },
}

export default function TestimonialsPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Testimonials", url: "https://alainmetalscorp.com/testimonials" } ] }} />
      <TestimonialsContent />
    </>
  )
}
