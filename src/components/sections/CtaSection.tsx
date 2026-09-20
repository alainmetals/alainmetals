import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"

export function CtaSection() {
  return (
    <section className="section-pad-lg bg-black-deep relative overflow-hidden">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 opacity-25 bg-[url('/assets/images/secure-gold-storage-vault.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container-luxury text-center relative">
        <ScrollReveal>
          <span className="editorial-caption text-gold/70 block mb-6">Private Client Access</span>
          <h2 className="editorial-headline-sm mb-6 max-w-lg mx-auto">
            Begin a Private Conversation
          </h2>
          <p className="editorial-subhead max-w-md mx-auto mb-4">
            Tell us what you are looking to acquire. A private client advisor will respond within 48 business hours.
          </p>
          <p className="text-gray-500 text-xs mb-10">
            Direct principals and authorized representatives only. No brokers or intermediary mandates.
          </p>
          <Link href="/inquire" className="btn-primary">
            Request a Private Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
