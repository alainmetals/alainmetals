import type { Metadata } from "next"
import Link from "next/link"
import { PageJsonLd } from "@/components/PageJsonLd"
import { company } from "@/lib/siteData"

export const metadata: Metadata = {
  title: "Assaying & Quality Verification | Al Ain Metals Corp",
  description:
    "Al Ain Metals provides independent third-party assaying and quality verification for precious metals and gemstones. Certified laboratory results for purity, weight and composition.",
  alternates: {
    canonical: "https://alainmetalscorp.com/assaying-services",
  },
  openGraph: {
    title: `Assaying & Quality Verification | ${company.shortName}`,
    description:
      "Independent third-party assaying and quality verification for precious metals and gemstones.",
    url: "https://alainmetalscorp.com/assaying-services",
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/assets/images/precious-metals-assaying-laboratory.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - Independent Assaying Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Assaying & Quality Verification | ${company.shortName}`,
    description:
      "Independent third-party assaying and quality verification for precious metals and gemstones.",
    images: ["/assets/images/precious-metals-assaying-laboratory.webp"],
  },
}

export default function AssayingServicesPage() {
  return (
    <>
      <PageJsonLd type="breadcrumb" data={{ items: [ { name: "Home", url: "https://alainmetalscorp.com" }, { name: "Assaying Services", url: "https://alainmetalscorp.com/assaying-services" } ] }} />
      <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Quality Assurance
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Assaying &amp;{" "}
            <span className="text-gradient-gold font-semibold">Quality Verification</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Independent third-party assaying by qualified laboratories with full transparency on purity, weight and valuation.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Our Assaying Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glass-card-hover rounded-3xl p-7">
              <h3 className="text-lg font-semibold text-white mb-3 font-serif">Precious Metals Assaying</h3>
              <p className="text-white/80 text-sm leading-relaxed font-light mb-4">
                Independent laboratory analysis of gold, silver and platinum group metals. Fire assay, XRF and ICP-MS testing methods confirm purity, weight and composition to international standards.
              </p>
              <ul className="space-y-2">
                {["Gold purity: 80% â€“ 99.99%", "Silver purity: 99.9%", "Platinum group metals per specification"].map((item) => (
                  <li key={item} className="text-white/60 text-sm font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass-card-hover rounded-3xl p-7">
              <h3 className="text-lg font-semibold text-white mb-3 font-serif">Gemstone Authentication</h3>
              <p className="text-white/80 text-sm leading-relaxed font-light mb-4">
                Independent gemstone authentication and grading by recognised gemological laboratories. Reports detail origin, treatment, colour, clarity, carat weight and quality grades.
              </p>
              <ul className="space-y-2">
                {["Tanzanite grading and certification", "Diamond 4Cs assessment", "Ruby, sapphire and emerald authentication"].map((item) => (
                  <li key={item} className="text-white/60 text-sm font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Documentation Provided</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Assay Certificate", desc: "Laboratory analysis confirming purity, weight and composition" },
              { title: "Gemological Report", desc: "Independent authentication and grading report" },
              { title: "Weight Verification", desc: "Certified weight measurement and documentation" },
              { title: "Valuation Report", desc: "Market-based valuation based on verified quality" },
            ].map((doc) => (
              <div key={doc.title} className="glass-card rounded-3xl p-6">
                <h3 className="text-white text-sm font-medium mb-2">{doc.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">{doc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Our Process</h2>
          <div className="space-y-0">
            {[
              { step: "01", title: "Sample Collection", desc: "Representative samples are collected from each consignment under controlled conditions." },
              { step: "02", title: "Laboratory Testing", desc: "Samples are submitted to independent third-party laboratories for analysis using internationally recognised methods." },
              { step: "03", title: "Certificate Issuance", desc: "Assay certificates and gemological reports are issued documenting all findings." },
              { step: "04", title: "Buyer Confirmation", desc: "Certificates and reports are shared with buyers for review and confirmation before shipment." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 py-6 border-b border-gold/[0.06]">
                <span className="font-serif text-3xl font-extralight text-gold/30 shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-white text-base font-medium mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center glass-card rounded-3xl p-10 lg:p-14">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Arrange Assaying</h2>
          <p className="text-white/95 text-sm lg:text-base leading-[1.7] max-w-md mx-auto mb-8 font-light">
            Contact us to discuss assaying requirements for your consignment.
          </p>
          <Link
            href="/inquire"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Enquire Now
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            <Link href="/secure-logistics" className="text-gold hover:text-gold-light transition-colors">Secure Logistics</Link>
            {" Â· "}
            <Link href="/due-diligence" className="text-gold hover:text-gold-light transition-colors">Due Diligence</Link>
            {" Â· "}
            <Link href="/how-it-works" className="text-gold hover:text-gold-light transition-colors">All Services</Link>
            {" Â· "}
            <Link href="/inquire" className="text-gold hover:text-gold-light transition-colors">Contact</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
