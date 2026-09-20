export interface InsightArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  heroAlt: string
  content: {
    heading: string
    paragraphs: string[]
    list?: { title: string; items: string[] }
    table?: { headers: string[]; rows: string[][] }
    quote?: string
  }[]
  faqs: { question: string; answer: string }[]
  relatedLinks: { label: string; href: string }[]
}

export const insightArticleSlugs = [
  "physical-gold-ownership",
  "tanzanite-scarcity",
  "precious-metals-verification",
] as const

export type InsightSlug = (typeof insightArticleSlugs)[number]
