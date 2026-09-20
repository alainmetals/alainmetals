import type { InsightArticle } from "../insightTypes"
import { physicalGoldArticle } from "./physical-gold"
import { tanzaniteArticle } from "./tanzanite"
import { verificationArticle } from "./verification"

export const allArticles: InsightArticle[] = [
  physicalGoldArticle,
  tanzaniteArticle,
  verificationArticle,
]

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return allArticles.find((a) => a.slug === slug)
}
