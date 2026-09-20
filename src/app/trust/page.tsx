import type { Metadata } from "next"
import { TrustContent } from "./TrustContent"

export const metadata: Metadata = {
  title: "Trust & Verification — Licensing, Assaying, Insurance & Compliance",
  description:
    "AL AIN Metals is licensed by the Tanzania Mining Commission, uses SGS and Bureau Veritas assaying, Lloyd's-of-London insurance, and complies with AML Act 2006, FATF, and Kimberley Process standards.",
  alternates: {
    canonical: "https://alainmetalscorp.com/trust",
  },
}

export default function TrustPage() {
  return <TrustContent />
}
