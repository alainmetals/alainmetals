"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "@/lib/siteData"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black-deep/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[74px] sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <span className="brand-mark" aria-hidden="true">A</span>
              <div className="hidden sm:block">
                <span className="font-serif text-cream text-[13px] sm:text-sm font-medium tracking-[0.08em] uppercase block leading-tight">
                  {company.shortName}
                </span>
                <span className="text-gold/60 text-[7px] sm:text-[8px] tracking-[0.24em] uppercase block leading-tight mt-1">
                  African Origins · Global Trust
                </span>
              </div>
              <div className="sm:hidden">
                <span className="font-serif text-cream text-xs font-medium tracking-[0.08em] uppercase block leading-tight">
                  {company.shortName}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-gray-300 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/inquire"
                className="text-[10px] tracking-[0.15em] uppercase text-gold border border-gold/30 px-5 py-2.5 hover:bg-gold/5 hover:border-gold/50 transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 border-l border-white/10 pl-4"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-px bg-cream transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`w-5 h-px bg-cream transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black-deep/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col pt-24 pb-8 px-7 bg-[radial-gradient(circle_at_0%_100%,rgba(183,132,45,.18),transparent_42%)]">
          {/* Nav Links */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="editorial-caption text-gold/60 mb-5">Private Client Navigation</p>
            <nav className="space-y-0">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 font-serif text-2xl sm:text-3xl border-b border-white/[.06] transition-all duration-300 ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-cream/70 hover:text-cream"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="space-y-6">
            <div className="section-rule" />
            <Link
              href="/inquire"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Request a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-[10px] text-gray-400 leading-relaxed tracking-wide text-center">
              Direct principals and authorized representatives only. No brokers or intermediary mandates.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

import { company } from "@/lib/siteData"
