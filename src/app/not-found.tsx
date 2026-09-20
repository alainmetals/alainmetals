import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black-deep">
      <div className="text-center px-6">
        <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mx-auto mb-8">
          <span className="font-serif text-gold text-lg">A</span>
        </div>
        <h1 className="text-6xl sm:text-8xl font-light text-cream/20 mb-4 font-serif">404</h1>
        <p className="text-gray-400 text-sm mb-8">This page could not be found.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.15em] uppercase hover:text-gold-light transition-colors"
        >
          Return Home
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
