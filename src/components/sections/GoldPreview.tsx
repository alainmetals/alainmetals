import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"

export function GoldPreview() {
  return (
    <section className="section-pad bg-black-deep relative">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="luxury-panel grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Text */}
            <div className="p-7 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="editorial-caption text-gold/70 block mb-4">Physical Gold</span>
              <h2 className="editorial-headline-sm mb-4">
                Gold for<br />Private Clients
              </h2>
              <p className="editorial-subhead mb-6 max-w-md">
                Verified African gold sourced for private acquisition, with independent assaying and documented provenance.
              </p>

              {/* Tabs */}
              <div className="flex gap-6 mb-8">
                {["Bars", "Nuggets", "Dust"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`text-[11px] tracking-[0.15em] uppercase pb-2 border-b transition-colors ${
                      i === 0
                        ? "text-gold border-gold"
                        : "text-gray-400 border-transparent hover:text-cream"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Factual Specs */}
              <div className="space-y-3 mb-8">
                {[
                  "Independently assayed by SGS & Bureau Veritas",
                  "Purity range: 99.5% to 99.99%",
                  "Full provenance documentation included",
                  "Lloyd's-of-London-insured delivery",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/gold"
                className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.15em] uppercase hover:text-gold-light transition-colors"
              >
                Explore Gold
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative order-first lg:order-last min-h-[340px] lg:min-h-[600px]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/assets/images/investment-grade-gold-bars.webp"
                  alt="Investment-grade gold bars independently assayed to 99.5%-99.99% purity by SGS and Bureau Veritas"
                  className="luxury-image w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/25 lg:to-transparent" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
