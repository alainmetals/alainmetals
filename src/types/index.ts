export interface NavLink {
  label: string
  href: string
}

export interface ProductCategory {
  title: string
  items: Product[]
}

export interface Product {
  title: string
  description: string
  purity?: string
  origin?: string
}

export interface Service {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TimelineStep {
  step: number
  title: string
  summary: string
  highlight: string
  description: string
}
