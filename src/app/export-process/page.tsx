import type { Metadata } from "next"
import { ExportProcessContent } from "./ExportProcessContent"

export const metadata: Metadata = {
  title: "Export Process",
  description:
    "Learn about our transparent gold export process from inquiry to delivery. Clear steps designed for buyer confidence.",
}

export default function ExportProcessPage() {
  return <ExportProcessContent />
}
