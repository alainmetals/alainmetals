import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  objectFit = "contain",
  objectPosition = "center",
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={cn(className)}
      style={fill ? { objectFit, objectPosition } : { objectFit, objectPosition }}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      sizes={
        fill
          ? "(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
          : width
            ? `(max-width: ${width}px) 100vw, ${width}px`
            : "(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
      }
      quality={85}
    />
  )
}
