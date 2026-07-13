"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks, company } from "@/lib/siteData"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [heroTop, setHeroTop] = useState(true)
  const pathname = usePathname()

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHeroTop(y < 100)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHome = pathname === "/"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || !isHome
          ? "bg-black/90 backdrop-blur-xl border-b border-gold/10 shadow-[0_1px_30px_-10px_rgba(212,175,55,0.08)]"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            href="/"
            className="flex items-center gap-3 group relative"
            aria-label={`${company.shortName} - Home`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-gold/30 transition-all duration-500">
              <span className="text-black font-bold text-base">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm lg:text-base font-bold tracking-[0.15em] uppercase text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                {company.shortName}
              </span>
              <span className="text-[9px] lg:text-[10px] tracking-[0.2em] uppercase text-gold/60 hidden sm:block">
                Precious Metals Trading
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold"
                    : `text-white/80 ${isHome && heroTop ? "hover:text-white" : "hover:text-gold"}`
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-4 right-4 h-[2px] bg-gold rounded-full"
                  />
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gold/20">
              <Link
                href="/contact"
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] bg-gold text-black rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-sm border border-gold/20 hover:border-gold/40 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5.5, width: 18 } : { rotate: 0, y: 0, width: 20 }}
              className="h-[1.5px] bg-gold block rounded-full"
              style={{ width: 20 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="h-[1.5px] bg-gold block rounded-full"
              style={{ width: 16 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5.5, width: 18 } : { rotate: 0, y: 0, width: 20 }}
              className="h-[1.5px] bg-gold block rounded-full"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-black/98 backdrop-blur-2xl border-b border-gold/10"
          >
            <div className="px-5 py-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 text-sm tracking-wider uppercase rounded-sm transition-all duration-200 ${
                    pathname === link.href
                      ? "text-gold bg-gold/5 border-l-2 border-gold"
                      : "text-white/80 hover:text-white hover:bg-white/[0.02] border-l-2 border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gold/10">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block text-center px-6 py-3.5 text-sm font-semibold uppercase tracking-wider bg-gold text-black rounded-sm hover:bg-gold-light transition-all duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
