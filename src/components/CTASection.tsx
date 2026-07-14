import Link from "next/link"
import { company } from "@/lib/siteData"

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = "Ready to Source Premium Commodities?",
  subtitle = "Contact our trading desk for pricing, availability and tailored supply solutions.",
}: CTASectionProps) {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=Hello%20${encodeURIComponent(company.name)}%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`

  return (
    <section className="relative bg-black border-t border-b border-gold/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-gold/[0.03]" />
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-gold/60 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase">
              Get in Touch
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.1 }}>
            {title}
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light mb-8 max-w-lg mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 w-full sm:w-auto"
            >
              Request Quotation
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-[#25D366]/10 hover:border-[#25D366]/60 transition-all duration-300 w-full sm:w-auto"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 3.036.84 5.872 2.304 8.312L.8 31.2l7.184-1.628A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`mailto:${company.email}?subject=Inquiry%20-%20${company.name}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gold/30 text-gold font-semibold text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 w-full sm:w-auto"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
