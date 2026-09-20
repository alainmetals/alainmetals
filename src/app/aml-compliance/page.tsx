import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "AML Compliance",
  description:
    "Anti-Money Laundering and Know Your Customer policies for AL AIN Metals private client engagements.",
  alternates: {
    canonical: "https://alainmetalscorp.com/aml-compliance",
  },
}

export default function AmlCompliancePage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <span className="editorial-caption text-gold/70 block mb-4">Compliance</span>
            <h1 className="editorial-headline-sm mb-6">
              AML Compliance
            </h1>
            <div className="gold-divider mb-8" />
            <div className="max-w-2xl space-y-8">
              <div>
                <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-3">Anti-Money Laundering Policy</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  AL AIN Metals maintains comprehensive AML procedures including Customer Due Diligence (CDD),
                  Enhanced Due Diligence (EDD), ongoing monitoring, suspicious transaction reporting, and thorough record-keeping.
                </p>
              </div>

              <div>
                <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-3">KYC Requirements</h2>
                <ul className="space-y-2">
                  {[
                    "Corporate registration documents",
                    "Government-issued identification",
                    "Proof of address",
                    "Source of funds documentation",
                    "Beneficial ownership declaration",
                    "Sanctions screening",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold/50 mt-1 text-xs">—</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-3">Regulatory Framework</h2>
                <ul className="space-y-2">
                  {[
                    "Tanzania Anti-Money Laundering Act 2006",
                    "Tanzania Financial Intelligence Act 2010",
                    "FATF Recommendations",
                    "OECD Due Diligence Guidance",
                    "Kimberley Process Certification Scheme",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold/50 mt-1 text-xs">—</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-3">Reporting</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  AL AIN Metals cooperates fully with the Tanzania Financial Intelligence Authority (FIA) and relevant law enforcement agencies.
                </p>
              </div>

              <p className="text-gray-500 text-[11px]">Last updated: 2025.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
