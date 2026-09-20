import type { Metadata } from "next"
import { GemstonesContent } from "./GemstonesContent"

export const metadata: Metadata = {
  title: "Exceptional African Gemstones — Tanzanite, Ruby, Emerald, Sapphire",
  description:
    "AL AIN Metals offers tanzanite from the Merelani Hills (world's only commercial source), ruby, emerald, and sapphire — all GIA/GRS certified. Tanzanite is 585 million years old and 1,000 times rarer than diamond.",
  alternates: {
    canonical: "https://alainmetalscorp.com/gemstones",
  },
}

export default function GemstonesPage() {
  return <GemstonesContent />
}
