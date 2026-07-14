export interface DownloadItem {
  slug: string
  title: string
  description: string
  category: string
  fileSize: string
  format: string
  icon: string
}

export const downloadItems: DownloadItem[] = [
  {
    slug: "company-profile",
    title: "Company Profile",
    description: "Overview of AL AIN METALS CORPORATION LIMITED including operations, capabilities, sourcing network and compliance framework.",
    category: "Company",
    fileSize: "2.4 MB",
    format: "PDF",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    slug: "product-catalogue",
    title: "Product Catalogue",
    description: "Complete catalogue of precious metals, gemstones and strategic minerals including specifications, applications and quality standards.",
    category: "Products",
    fileSize: "5.1 MB",
    format: "PDF",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    slug: "export-process",
    title: "Export Process Guide",
    description: "Detailed guide to our 5-step export process from inquiry to delivery with documentation requirements and timelines.",
    category: "Process",
    fileSize: "1.8 MB",
    format: "PDF",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1h2m10 1l2-1V8l-2-1",
  },
  {
    slug: "compliance-overview",
    title: "Compliance Overview",
    description: "Summary of AL AIN METALS compliance framework including OECD Due Diligence, Kimberley Process, AML/KYC and responsible sourcing.",
    category: "Compliance",
    fileSize: "1.2 MB",
    format: "PDF",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    slug: "buyer-guide",
    title: "Buyer Guide",
    description: "Essential guide for international buyers covering sourcing, quality verification, trade finance, logistics and compliance requirements.",
    category: "Buyers",
    fileSize: "3.2 MB",
    format: "PDF",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
]
