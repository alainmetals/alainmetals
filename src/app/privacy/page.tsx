import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AL AIN Metals privacy policy. We do not sell inquiry data. All client information is held under strict NDA.",
  alternates: {
    canonical: "https://alainmetalscorp.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 bg-black-deep relative">
        <div className="container-luxury">
          <ScrollReveal>
            <span className="editorial-caption text-gold/70 block mb-4">Legal</span>
            <h1 className="editorial-headline-sm mb-6">
              Privacy Policy
            </h1>
            <div className="gold-divider mb-8" />
            <div className="max-w-2xl space-y-8">
              {[
                {
                  title: "Data Collection",
                  text: "We collect only the information necessary to process your enquiry and verify your identity as required by applicable regulations.",
                },
                {
                  title: "Data Use",
                  text: "Your information is used exclusively for processing your enquiry, compliance verification, and ongoing communication regarding your engagement.",
                },
                {
                  title: "No Data Sale",
                  text: "We do not sell inquiry data. All client information is held under strict NDA.",
                },
                {
                  title: "Data Security",
                  text: "All client data is stored using industry-standard encryption and security measures.",
                },
                {
                  title: "Regulatory Retention",
                  text: "We retain records as required by applicable AML/KYC regulations and Tanzanian law.",
                },
                {
                  title: "GDPR & CCPA",
                  text: "We respect your data protection rights under GDPR, CCPA, and applicable Tanzanian data protection legislation.",
                },
                {
                  title: "Contact",
                  text: "For privacy-related inquiries, contact: privateclients@alainmetalscorp.com",
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="text-cream text-sm tracking-[0.15em] uppercase mb-3">{section.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{section.text}</p>
                </div>
              ))}

              <p className="text-gray-500 text-[11px]">Last updated: 2025.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
