export interface NavLink {
  label: string
  href: string
}

export interface Product {
  title: string
  description: string
  purity: string
  origin: string
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
  description: string
}
