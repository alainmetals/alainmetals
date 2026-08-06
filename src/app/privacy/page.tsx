import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ScrollReveal"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Privacy Policy | Al Ain Metals Corp Tanzania",
  description: `Privacy policy for ${company.name}. Learn how we collect, use and protect your personal information when you use our website and submit inquiries to our precious metals trading desk.`,
  alternates: {
    canonical: "https://alainmetalscorp.com/privacy",
  },
  openGraph: {
    title: `Privacy Policy | ${company.shortName}`,
    description: `Privacy policy for ${company.name}. How we collect, use and protect your information.`,
    url: "https://alainmetalscorp.com/privacy",
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${company.shortName}`,
    description: `Privacy policy for ${company.name}. How we collect, use and protect your information.`,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Privacy Policy", url: "https://alainmetalscorp.com/privacy" } ] }} />
      <section className="bg-black min-h-screen">
      <div className="section-rule" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-divider" />
            <span className="editorial-caption text-gold/70 text-[10px]">Legal</span>
          </div>
          <h1 className="font-serif font-light tracking-[-0.03em] text-white mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: 0.95 }}>
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="text-white/40 text-xs mb-12">Last updated: July 2026</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-8 text-white/65 text-sm leading-relaxed">
            <div>
              <h2 className="text-white font-serif text-lg mb-3">1. Information We Collect</h2>
              <p className="mb-3">
                When you submit an inquiry through our Trade Assistant or contact form, we collect:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Company name, registration number and website</li>
                <li>Contact name, email, phone and position</li>
                <li>Client type and country</li>
                <li>Commodity interest and quantity</li>
                <li>UTM parameters, page URL and timestamp</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-serif text-lg mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Process and respond to your inquiry</li>
                <li>Qualify your requirements</li>
                <li>Communicate regarding your inquiry</li>
                <li>Improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-serif text-lg mb-3">3. Data Protection</h2>
              <p>
                Your data is transmitted over encrypted connections (TLS). We do not sell, rent or share your personal information with third parties for marketing purposes. Information is retained only as long as necessary to process your inquiry.
              </p>
            </div>

            <div>
              <h2 className="text-white font-serif text-lg mb-3">4. Cookies &amp; Analytics</h2>
              <p>
                We may use essential cookies for site functionality. Analytics data is collected in aggregate form and does not personally identify you.
              </p>
            </div>

            <div>
              <h2 className="text-white font-serif text-lg mb-3">5. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-serif text-lg mb-3">6. Contact</h2>
              <p>
                For privacy-related inquiries, contact us at{" "}
                <a href={`mailto:${company.email}`} className="text-gold hover:text-gold-light transition-colors">
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  )
}
