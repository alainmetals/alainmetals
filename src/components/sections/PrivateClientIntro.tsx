import { ScrollReveal } from "@/components/ScrollReveal"

export function PrivateClientIntro() {
  return (
    <section className="section-pad-lg bg-black relative overflow-hidden">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,97,.09),transparent_45%)]" />
      <div className="container-luxury">
        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="editorial-caption text-gold/70 block mb-4">Private Client Services</span>
            <h2 className="editorial-headline-sm mb-6 sm:mb-8">
              A More Exceptional Way to Acquire Precious Metals
            </h2>
            <div className="gold-divider-wide mx-auto mb-6 sm:mb-8" />
            <p className="editorial-subhead max-w-2xl mx-auto mb-6">
              A private, direct relationship from first consultation through verification, settlement and secure delivery.
            </p>
            <p className="editorial-body text-gray-400 max-w-xl mx-auto mb-8">
              We work exclusively with direct principals and authorized representatives, combining African sourcing expertise with independent verification, documented compliance and discreet global logistics.
            </p>
            {/* Factual Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-white/[.08] mt-10">
              {[
                { stat: "99.5%–99.99%", label: "Gold Purity" },
                { stat: "SGS & Bureau Veritas", label: "Assay Labs" },
                { stat: "Lloyd's of London", label: "Insurance" },
                { stat: "$250,000", label: "Min. Allocation" },
              ].map((item) => (
                <div key={item.label} className="text-center px-3 py-5 border-r border-white/[.08] last:border-r-0 even:border-r-0 sm:even:border-r">
                  <p className="font-serif text-gold text-lg font-light">{item.stat}</p>
                  <p className="text-gray-500 text-[10px] tracking-[0.12em] uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
