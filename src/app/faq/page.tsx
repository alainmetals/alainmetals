import type { Metadata } from "next"
import { FAQContent } from "./FAQContent"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about gold purchasing, export process, quality verification, and working with AL AIN METALS CORPORATION LIMITED.",
}

export default function FAQPage() {
  return <FAQContent />
}
