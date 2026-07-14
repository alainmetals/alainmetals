"use client"

import { useSyncExternalStore } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

export function Hero() {
  const mounted = useMounted()

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Desktop background image (lg and above) */}
      <Image
        src="/assets/images/desktop.png"
        alt="African precious metals, gemstones and strategic minerals export company — desktop"
        fill
        priority
        className="object-cover hidden lg:block"
        style={{
          objectPosition: "center 40%",
          transform: "scale(1.15)",
        }}
        sizes="100vw"
      />

      {/* Mobile background image (below lg) */}
      <Image
        src="/assets/images/mobile.png"
        alt="African precious metals, gemstones and strategic minerals export company — mobile"
        fill
        priority
        className="object-cover block lg:hidden"
        style={{
          objectPosition: "center 40%",
          transform: "scale(1.15)",
        }}
        sizes="100vw"
      />

      {/* Strong left-to-right dark gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Top gradient to separate from navbar */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

      {/* Bottom gradient for depth */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 w-full h-full flex items-center pt-20 lg:pt-24">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-5 sm:mb-7"
            >
              <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-6 sm:w-12 h-px bg-gold" />
                <span className="editorial-caption text-gold text-[8px] sm:text-[10px]">
                  East African Precious Metals & Gemstones
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-serif tracking-[-0.03em] mb-6 sm:mb-10"
              style={{
                fontSize: "clamp(2.5rem, 10vw, 8rem)",
                lineHeight: 0.95,
                fontWeight: 700,
              }}
            >
              <span
                className="block text-white"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                African
              </span>
              <span
                className="block text-gold"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                Precious Metals,
              </span>
              <span
                className="block text-white"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)",
                }}
              >
                Worldwide
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-white max-w-2xl mb-10 sm:mb-14 font-light"
              style={{
                lineHeight: 1.7,
                textShadow: "0 2px 20px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9), 0 0 100px rgba(0,0,0,0.6)",
              }}
            >
              Premium precious metals, gemstones &amp; strategic minerals
              <br className="hidden sm:block" />
              for refineries, jewellers and institutional buyers worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8"
            >
              <Link
                href="/contact"
                className="group relative px-7 sm:px-10 py-3 sm:py-4 bg-gold text-black text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] overflow-hidden transition-all duration-500 hover:bg-gold-light"
              >
                <span className="relative z-10">Request a Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
              <Link
                href="/export-process"
                className="group inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium text-white/80 hover:text-gold transition-all duration-500 py-3 sm:py-4"
              >
                <span className="w-6 sm:w-8 h-px bg-white/50 group-hover:bg-gold group-hover:w-10 sm:group-hover:w-12 transition-all duration-500" />
                Our Process
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="absolute bottom-5 sm:bottom-8 left-5 sm:left-10 lg:left-16 flex items-center gap-3 text-white/50 z-10"
      >
        <span className="editorial-caption text-[7px] sm:text-[9px]">Scroll</span>
        <div className="w-px h-4 sm:h-6 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  )
}
