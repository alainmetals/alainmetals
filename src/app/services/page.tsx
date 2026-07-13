import type { Metadata } from "next"
import { ServicesContent } from "./ServicesContent"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive gold trading and export services including sourcing, logistics, quality verification, and market advisory.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
