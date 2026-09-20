import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleContent } from "./ArticleContent"
import { getBlogArticle, blogArticles } from "@/lib/data/blog"
import { company } from "@/lib/siteData"
import { PageJsonLd } from "@/components/PageJsonLd"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticle(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://alainmetalscorp.com/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${company.shortName}`,
      description: article.excerpt,
      url: `https://alainmetalscorp.com/blog/${article.slug}`,
      siteName: company.name,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      images: [
        {
          url: article.image || "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${company.shortName}`,
      description: article.excerpt,
      images: [article.image || "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp"],
    },
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getBlogArticle(slug)
  if (!article) notFound()

  return (
    <>
      <PageJsonLd
        type="article"
        data={{
          title: article.title,
          description: article.excerpt,
          image: article.image || "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
          url: `https://alainmetalscorp.com/blog/${article.slug}`,
          datePublished: article.date,
          dateModified: article.date,
        }}
      />
      <PageJsonLd
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://alainmetalscorp.com" },
            { name: "Blog", url: "https://alainmetalscorp.com/blog" },
            { name: article.title, url: `https://alainmetalscorp.com/blog/${article.slug}` },
          ],
        }}
      />
      <ArticleContent article={article} />
    </>
  )
}
