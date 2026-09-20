import type { Metadata } from "next"
import { HowItWorksContent } from "./HowItWorksContent"

export const metadata: Metadata = {
  title: "How It Works — 5-Step Private Gold Buying Process",
  description:
    "The private gold buying process at AL AIN Metals: consultation, sourcing, independent verification by SGS/Bureau Veritas, secure transaction, and Lloyd's-insured delivery. Responses within 48 business hours.",
  alternates: {
    canonical: "https://alainmetalscorp.com/how-it-works",
  },
}

export default function HowItWorksPage() {
  return <HowItWorksContent />
}
