import type { Metadata } from "next"
import { ProductsContent } from "./ProductsContent"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of premium gold products including gold bars, gold nuggets, and gold dust sourced from Tanzania.",
}

export default function ProductsPage() {
  return <ProductsContent />
}
