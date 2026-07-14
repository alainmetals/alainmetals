import { OptimizedImage } from "./OptimizedImage"
import { Breadcrumbs } from "./Breadcrumbs"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  breadcrumbs: { label: string; href?: string }[]
}

export function PageHero({ title, subtitle, description, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[45vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={image}
          alt={title}
          fill
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-20 pt-32 sm:pt-36 lg:pt-40 w-full">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="font-serif font-light tracking-[-0.03em] text-white mb-3 sm:mb-4" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", lineHeight: 0.95 }}>
          {title}
        </h1>

        {subtitle && (
          <p className="text-gold/80 text-sm sm:text-base font-light tracking-wide mb-4 max-w-xl">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-white/50 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
