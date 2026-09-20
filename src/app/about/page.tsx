import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rooted in Africa. Trusted worldwide. AL AIN Metals connects exceptional African precious metals and gemstones with private clients around the world.",
  alternates: {
    canonical: "https://alainmetalscorp.com/about",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
