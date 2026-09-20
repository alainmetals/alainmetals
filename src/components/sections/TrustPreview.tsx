import { ScrollReveal } from "@/components/ScrollReveal"
import { trustPillars } from "@/lib/siteData"

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  check: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
  document: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  secure: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  delivery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16,8 20,8 23,11 23,16 16,16" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
}

export function TrustPreview() {
  return (
    <section className="section-pad-lg bg-black relative overflow-hidden">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="absolute inset-x-0 bottom-0 h-[54%] opacity-35 bg-[url('/assets/images/african-gold-mining-operations.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/45" />
      <div className="container-luxury relative">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="editorial-caption text-gold/70 block mb-4">Trust &amp; Verification</span>
            <h2 className="editorial-headline-sm mb-4">
              Our Commitment<br />to You
            </h2>
            <p className="editorial-subhead max-w-xl mx-auto">
              Rigorous procedures ensure a transparent, compliant and secure transaction from source to delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* Trust Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px max-w-3xl mx-auto bg-white/[.08] border border-white/[.08]">
          {trustPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 80}>
              <div className="text-center group bg-black/80 backdrop-blur-sm p-5 sm:p-7 min-h-[150px]">
                <div className="w-11 h-11 mx-auto mb-4 flex items-center justify-center text-gold/80 group-hover:text-gold transition-all duration-300">
                  {iconMap[pillar.icon]}
                </div>
                <h3 className="text-cream text-xs sm:text-sm font-light mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed hidden sm:block">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tagline */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <div className="gold-divider-wide mx-auto mb-6" />
            <p className="text-cream/60 text-xs tracking-[0.2em] uppercase">
              Ethical Sourcing.<span className="text-gold/60 ml-2">A Brighter Tomorrow.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
