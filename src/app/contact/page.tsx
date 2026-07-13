import type { Metadata } from "next"
import { ContactContent } from "./ContactContent"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AL AIN METALS CORPORATION LIMITED. Contact our sales team for gold purchasing inquiries.",
}

export default function ContactPage() {
  return <ContactContent />
}
