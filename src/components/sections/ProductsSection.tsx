"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { products, images } from "@/lib/siteData"

const productImages = [images.products.bars, images.products.nuggets, images.products.dust]

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const product = products[activeIndex]

  return (
    <section className="bg-black overflow-hidden">
      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Product Portfolio
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4 sm:mb-10 lg:mb-16 max-w-3xl" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              Premium{" "}
              <span className="text-gradient-gold">Gold Products</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="space-y-0">
                {products.map((p, i) => (
                  <ScrollReveal key={p.title} delay={i * 0.08}>
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left py-5 sm:py-8 border-b border-gold/[0.06] transition-all duration-700 group cursor-pointer ${
                        i === activeIndex ? "opacity-100" : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <div className="flex items-baseline gap-6">
                        <span className={`font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-extralight leading-none transition-colors duration-700 ${
                          i === activeIndex ? "text-gold" : "text-white/15"
                        }`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className={`text-lg lg:text-xl font-serif transition-colors duration-700 ${
                            i === activeIndex ? "text-white" : "text-white/60"
                          }`}>
                            {p.title}
                          </p>
                          <AnimatePresence>
                            {i === activeIndex && (
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                className="h-px bg-gold/40 mt-3 origin-left"
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 space-y-6"
                >
                  <p className="editorial-subhead text-white/60 max-w-md">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-8">
                    <div>
                      <span className="editorial-caption text-white/40 block mb-1">Purity</span>
                      <span className="text-gold/80 text-sm font-medium">{product.purity}</span>
                    </div>
                    <div className="w-px h-8 bg-gold/10" />
                    <div>
                      <span className="editorial-caption text-white/40 block mb-1">Origin</span>
                      <span className="text-white/70 text-sm">{product.origin}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                  >
                    <OptimizedImage
                      src={productImages[activeIndex]}
                      alt={product.title}
                      fill
                      objectPosition="center"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
