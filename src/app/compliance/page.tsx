import type { Metadata } from "next"
import { ComplianceContent } from "./ComplianceContent"

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "AL AIN METALS CORPORATION LIMITED is committed to ethical sourcing and compliance with applicable national and international trade regulations.",
}

export default function CompliancePage() {
  return <ComplianceContent />
}
