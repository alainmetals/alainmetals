import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be located. Browse our African precious metals, gemstones and strategic minerals or contact AL AIN METALS CORPORATION LIMITED.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center bg-black">
      <div className="text-center px-5">
        <div className="w-24 h-24 mx-auto mb-8 border-2 border-gold/25 rounded-full flex items-center justify-center">
          <span className="text-gold text-3xl font-bold font-serif">A</span>
        </div>
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-light text-gradient-gold mb-4 font-serif">
          404
        </h1>
        <p className="text-white/95 mb-8 max-w-md mx-auto font-light text-sm">
          The requested page could not be located. It may have been moved or removed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/30 text-gold font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-gold/10 pt-8">
          <p className="text-white/40 text-xs tracking-wider uppercase mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/products" className="text-white/50 hover:text-gold transition-colors">
              Products
            </Link>
            <Link href="/sourcing" className="text-white/50 hover:text-gold transition-colors">
              Sourcing
            </Link>
            <Link href="/guides" className="text-white/50 hover:text-gold transition-colors">
              Guides
            </Link>
            <Link href="/industries" className="text-white/50 hover:text-gold transition-colors">
              Industries
            </Link>
            <Link href="/faq" className="text-white/50 hover:text-gold transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
