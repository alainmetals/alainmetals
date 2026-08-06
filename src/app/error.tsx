"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-serif text-gold mb-4">Something went wrong</h1>
        <p className="text-white/60 mb-8 text-sm leading-relaxed">
          We encountered an unexpected error. Please try again or contact us if the issue persists.
        </p>
        <button
          onClick={reset}
          className="inline-block px-8 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}