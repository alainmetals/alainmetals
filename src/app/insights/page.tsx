import type { Metadata } from "next"
import { InsightsContent } from "./InsightsContent"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Educational perspectives on physical gold ownership, gemstone verification, and private precious metals acquisition.",
  alternates: {
    canonical: "https://alainmetalscorp.com/insights",
  },
}

export default function InsightsPage() {
  return <InsightsContent />
}
