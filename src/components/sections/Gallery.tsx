"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { galleryImages } from "@/lib/siteData"
import Link from "next/link"

const PREVIEW_COUNT = 6

const previewLayouts = [
  "col-span-12 md:col-span-8 aspect-[16/9]",
  "col-span-12 md:col-span-4 aspect-[3/4]",
  "col-span-12 md:col-span-6 aspect-[4/3]",
  "col-span-12 md:col-span-6 aspect-[3/4]",
  "col-span-12 md:col-span-8 aspect-[16/9]",
  "col-span-12 md:col-span-4 aspect-[4/3]",
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const previewImages = galleryImages.slice(0, PREVIEW_COUNT)

  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Visual Archive
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
              <h2 className="font-serif font-light tracking-[-0.03em] text-white" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
                A Glimpse Into <span className="text-gradient-gold">Our Operations</span>
              </h2>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-medium text-gold/60 hover:text-gold transition-colors duration-300 shrink-0"
              >
                View All
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-12 gap-1.5 sm:gap-3 md:gap-4">
            {previewImages.map((image, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.06}
                className={previewLayouts[index]}
              >
                <button
                  onClick={() => setSelectedImage(index)}
                  className="group relative w-full h-full overflow-hidden cursor-pointer"
                  aria-label={`View ${image.alt}`}
                >
                  <OptimizedImage src={image.src} alt={image.alt} fill />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/80 text-xs font-medium tracking-wide">{image.alt}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-8 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all z-10"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-5xl w-full aspect-video relative overflow-hidden"
            >
              <OptimizedImage src={previewImages[selectedImage].src} alt={previewImages[selectedImage].alt} fill />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-8">
                <p className="text-white/70 text-xs tracking-wider uppercase">
                  {previewImages[selectedImage].alt}
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
              {previewImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(index)
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === selectedImage
                      ? "bg-gold w-8"
                      : "bg-white/10 w-1 hover:bg-white/30"
                  }`}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
