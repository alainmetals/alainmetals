import type { Metadata } from "next"
import { GoldContent } from "./GoldContent"

export const metadata: Metadata = {
  title: "Gold for Private Clients — Types, Purity, Sourcing & Minimum Purchase",
  description:
    "AL AIN Metals sells investment-grade physical gold bars, nuggets, and dust sourced from the Kilimanjaro Gold Belt, Tanzania. Gold is independently assayed to 99.5%–99.99% purity by SGS and Bureau Veritas. Minimum allocation $250,000. Lloyd's-insured delivery.",
  alternates: {
    canonical: "https://alainmetalscorp.com/gold",
  },
}

export default function GoldPage() {
  return <GoldContent />
}
