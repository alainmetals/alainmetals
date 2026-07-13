import type { Metadata } from "next"
import { AboutContent } from "./AboutContent"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AL AIN METALS CORPORATION LIMITED, a trusted Tanzania-based gold and precious metals exporter serving international markets.",
}

export default function AboutPage() {
  return <AboutContent />
}
