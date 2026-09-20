import type { Metadata } from "next"
import { PrivateClientsContent } from "./PrivateClientsContent"

export const metadata: Metadata = {
  title: "Private Client Services — UHNWIs, Family Offices, Private Banks",
  description:
    "AL AIN Metals serves ultra-high-net-worth individuals, family offices, private bank desks, and sovereign allocators. Minimum allocation $250,000. Trial from $50,000. Direct buyers only — no brokers or intermediaries.",
  alternates: {
    canonical: "https://alainmetalscorp.com/private-clients",
  },
}

export default function PrivateClientsPage() {
  return <PrivateClientsContent />
}
