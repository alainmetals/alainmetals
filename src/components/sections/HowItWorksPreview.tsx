import Link from "next/link"
import { ScrollReveal } from "@/components/ScrollReveal"
import { processSteps } from "@/lib/siteData"

export function HowItWorksPreview() {
  return (
    <section className="section-pad bg-black-deep relative">
      <div className="section-rule absolute top-0 left-0 right-0" />
      <div className="container-luxury">
        <div className="luxury-panel p-7 sm:p-10 lg:p-14 bg-[radial-gradient(circle_at_100%_0%,rgba(212,175,97,.08),transparent_38%)]">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="editorial-caption text-gold/70 block mb-4">How It Works</span>
            <h2 className="editorial-headline-sm mb-4">
              A Private and<br />Secure Process
            </h2>
            <p className="editorial-subhead mb-12 max-w-lg">
              From consultation to delivery, every step is handled with discretion, professionalism and integrity.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="grid grid-cols-[48px_1fr] gap-5 sm:gap-8 py-5 border-t border-white/[.08] first:border-t-0">
                {/* Number */}
                <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center">
                    <span className="text-gold text-sm font-light">{step.number}</span>
                  </div>
                </div>
                {/* Content */}
                  <div className="pt-1">
                  <h3 className="text-cream text-base sm:text-lg font-light mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-8">
            <Link href="/how-it-works" className="btn-primary">
              Learn More About the Process
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
