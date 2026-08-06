import type { MetadataRoute } from "next"
import { productPages } from "@/lib/data/products"
import { countryPages } from "@/lib/data/countries"
import { destinationPages } from "@/lib/data/destinations"
import { guidePages } from "@/lib/data/guides"
import { industryPages } from "@/lib/data/industries"
import { resourceArticles } from "@/lib/data/resources"
import { trustSections } from "@/lib/data/trust"
import { blogArticles } from "@/lib/data/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alainmetalscorp.com"
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gold-trading`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/silver-trading`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gemstones`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/strategic-minerals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/assaying-services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/secure-logistics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/due-diligence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/export-process`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/compliance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sourcing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/destinations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/trust`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]

  const productPages_: MetadataRoute.Sitemap = productPages.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const countryPages_: MetadataRoute.Sitemap = countryPages.map((c) => ({
    url: `${baseUrl}/sourcing/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const destinationPages_: MetadataRoute.Sitemap = destinationPages.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const guidePages_: MetadataRoute.Sitemap = guidePages.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const industryPages_: MetadataRoute.Sitemap = industryPages.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const resourcePages_: MetadataRoute.Sitemap = resourceArticles.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const trustPages_: MetadataRoute.Sitemap = trustSections.map((t) => ({
    url: `${baseUrl}/trust/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogPages_: MetadataRoute.Sitemap = blogArticles.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...productPages_,
    ...countryPages_,
    ...destinationPages_,
    ...guidePages_,
    ...industryPages_,
    ...resourcePages_,
    ...trustPages_,
    ...blogPages_,
  ]
}
