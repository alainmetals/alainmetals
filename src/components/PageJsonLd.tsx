import { company } from "@/lib/siteData"

const baseUrl = "https://alainmetalscorp.com"

interface PageJsonLdProps {
  type: "product" | "article" | "breadcrumb"
  data: Record<string, unknown>
}

export function PageJsonLd({ type, data }: PageJsonLdProps) {
  if (type === "product") {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: data.title,
      description: data.description,
      image: data.image,
      brand: {
        "@type": "Brand",
        name: company.name,
      },
      manufacturer: {
        "@type": "Organization",
        name: company.name,
      },
      category: data.category,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        seller: {
          "@type": "Organization",
          name: company.name,
        },
      },
    }
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }

  if (type === "article") {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title,
      description: data.description,
      image: data.image,
      author: {
        "@type": "Organization",
        name: company.name,
      },
      publisher: {
        "@type": "Organization",
        name: company.name,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/assets/images/african-precious-metals-gemstones-strategic-minerals.webp`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": data.url || baseUrl,
      },
      datePublished: data.datePublished || new Date().toISOString(),
      dateModified: data.dateModified || new Date().toISOString(),
    }
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }

  if (type === "breadcrumb") {
    const items = data.items as { name: string; url: string }[]
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }

  return null
}
