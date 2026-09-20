import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Broker Policy",
  description:
    "AL AIN Metals engages exclusively with direct buyers, authorized family office representatives, and licensed private banking institutions.",
  alternates: {
    canonical: "https://alainmetalscorp.com/broker-policy",
  },
}

export default function BrokerPolicyPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <span className="editorial-caption text-gold/70 block mb-4">Policy</span>
            <h1 className="editorial-headline-sm mb-6">
              Broker Policy
            </h1>
            <div className="gold-divider mb-8" />
            <div className="max-w-2xl space-y-8">
              <p className="editorial-subhead text-cream/80">
                AL AIN Metals engages exclusively with direct buyers, authorized family office representatives, and licensed private banking institutions.
              </p>

              <div>
                <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-4">We Do Not Recognize</h2>
                <ul className="space-y-3">
                  {[
                    "Mandates, chains of authorization, or letters of authority from non-principals",
                    "Broker intermediaries or commission-based agents",
                    "Unauthorized third-party representatives",
                    "Obscured buyer identity or beneficial ownership",
                    "Non-direct allocation intent",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold/50 mt-1 text-xs">—</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-4">Direct Buyer Verification</h2>
                <ul className="space-y-3">
                  {[
                    "Corporate email address",
                    "Verifiable identity and beneficial ownership",
                    "KYC documentation",
                    "Signed confirmation of direct buyer status",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold/50 mt-1 text-xs">—</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-5">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Enquiries from undisclosed brokers, mandate holders, or intermediary chains will not receive a response.
                  Misrepresentation may result in permanent disqualification from all AL AIN Metals services.
                </p>
              </div>

              <p className="text-gray-500 text-[11px]">
                Last updated: 2025. This policy is non-negotiable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
