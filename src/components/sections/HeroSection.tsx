import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[920px] sm:min-h-screen flex items-center overflow-hidden bg-black-deep">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="hero-background absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/20" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_45%,rgba(212,175,97,.22),transparent_30%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container-luxury pt-32 pb-72 sm:py-40 lg:py-0">
        <div className="max-w-[610px]">
          {/* Eyebrow */}
          <div className="mb-6 sm:mb-8 animate-in">
            <span className="editorial-caption text-gold/70">
              African Origins. Global Trust.
            </span>
          </div>

          {/* Headline */}
          <h1 className="editorial-headline-lg mb-6 sm:mb-8 animate-in">
            <span className="block text-cream">Private</span>
            <span className="block text-cream">Precious Metals</span>
          </h1>

          {/* Subhead */}
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed max-w-md mb-4 animate-in">
            Direct access to African gold &amp; rare gemstones
          </p>

          <p className="editorial-subhead max-w-md mb-10 sm:mb-12 animate-in">
            For private clients seeking verified, responsibly sourced precious metals and exceptional African gemstones.
          </p>

          {/* CTA */}
          <div className="animate-in">
            <Link href="/inquire" className="btn-primary">
              Request a Private Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Icons - Bottom */}
      <div className="absolute bottom-10 sm:bottom-12 left-0 right-0 z-10 animate-in">
        <div className="container-luxury">
          <div className="grid grid-cols-3 max-w-[450px] border-t border-white/10 pt-6">
            {[
              { icon: "lock", label: "Discreet" },
              { icon: "shield", label: "Verified" },
              { icon: "user", label: "Personal" },
            ].map((item) => (
              <div key={item.label} className="trust-icon">
                <div className="trust-icon-circle">
                  {item.icon === "lock" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  )}
                  {item.icon === "shield" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                  {item.icon === "user" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>
                <span className="trust-icon-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
