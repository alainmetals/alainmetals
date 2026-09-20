import type { Metadata } from "next"
import { ProvenanceContent } from "./ProvenanceContent"

export const metadata: Metadata = {
  title: "Provenance & Origin",
  description:
    "From the Merelani Hills to Your Vault. Mine-to-market traceability for precious metals and rare gemstones.",
  alternates: {
    canonical: "https://alainmetalscorp.com/provenance",
  },
}

export default function ProvenancePage() {
  return <ProvenanceContent />
}
