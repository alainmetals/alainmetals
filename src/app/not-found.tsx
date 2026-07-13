import Link from "next/link"

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
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
