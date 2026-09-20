import type { Metadata } from "next"
import { InquireContent } from "./InquireContent"

export const metadata: Metadata = {
  title: "Request Private Access",
  description:
    "Submit a private client enquiry for physical precious metals and rare African gemstones. Direct principals and authorized representatives only.",
  alternates: {
    canonical: "https://alainmetalscorp.com/inquire",
  },
}

export default function InquirePage() {
  return <InquireContent />
}
