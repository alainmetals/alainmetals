export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-gold/30 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-gold rounded-full animate-spin" />
        </div>
        <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Loading</span>
      </div>
    </div>
  )
}