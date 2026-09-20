import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { gemstoneTypes } from "@/lib/siteData"

export function GemstonesPreview() {
  return (
    <section className="section-pad bg-black relative">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="container-luxury">
        <ScrollReveal>
          <div className="luxury-panel grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Image */}
            <div className="order-1 relative min-h-[360px] lg:min-h-[650px]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/assets/images/premium-tanzanite-gemstones.webp"
                  alt="Exceptional African tanzanite gemstones from the Merelani Hills, Tanzania — the world's only commercial tanzanite source"
                  className="luxury-image w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Text */}
            <div className="order-2 p-7 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="editorial-caption text-gold/70 block mb-4">Rare Gemstones</span>
              <h2 className="editorial-headline-sm mb-4">
                Exceptional<br />African Gemstones
              </h2>
              <p className="editorial-subhead mb-8 max-w-md">
                Tanzanite and selected gemstones for private collectors and investors, independently certified by GIA or GRS.
              </p>

              {/* Gemstone List */}
              <div className="space-y-0">
                {gemstoneTypes.map((stone) => (
                  <div
                    key={stone.slug}
                    className="flex items-center justify-between py-4 border-b border-border group cursor-pointer hover:border-gold/30 transition-colors"
                  >
                    <span className="text-cream text-sm font-light tracking-wide group-hover:text-gold transition-colors">
                      {stone.name}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-gray-500 group-hover:text-gold transition-colors"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/gemstones"
                  className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.15em] uppercase hover:text-gold-light transition-colors"
                >
                  Explore Gemstones
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal delay={200}>
          <div className="mt-16 sm:mt-20 text-center">
            <div className="glass-card inline-block px-8 py-5">
              <p className="text-cream text-sm tracking-[0.15em] uppercase font-light">
                Natural Beauty.<span className="text-gold ml-2">Lasting Value.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
