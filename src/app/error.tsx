"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black-deep">
      <div className="text-center px-6">
        <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mx-auto mb-8">
          <span className="font-serif text-gold text-lg">A</span>
        </div>
        <h1 className="text-2xl font-light text-cream mb-4 font-serif">Something went wrong</h1>
        <p className="text-gray-400 text-sm mb-8">An unexpected error occurred.</p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.15em] uppercase hover:text-gold-light transition-colors"
        >
          Try Again
        </button>
      </div>
    </section>
  )
}
