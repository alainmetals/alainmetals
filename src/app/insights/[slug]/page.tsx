import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allArticles } from "@/lib/articles"
import { InsightArticleContent } from "./InsightArticleContent"

export function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = allArticles.find((a) => a.slug === slug)
  if (!article) return {}

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://alainmetalscorp.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://alainmetalscorp.com/insights/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
  }
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = allArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  return <InsightArticleContent article={article} />
}
