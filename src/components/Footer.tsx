"use client"

import Link from "next/link"
import { company } from "@/lib/siteData"

export function Footer() {
  return (
    <footer className="border-t border-border bg-black-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_0%_100%,rgba(212,175,97,.08),transparent_35%)]" />
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="brand-mark scale-75 origin-left" aria-hidden="true">A</span>
              <span className="font-serif text-cream text-xs font-medium tracking-[0.1em] uppercase">
                {company.shortName}
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs mb-5">
              {company.description}
            </p>
            <div className="space-y-1.5">
              <p className="text-gray-400 text-[11px]">{company.address}</p>
              <a href={`mailto:${company.email}`} className="text-gold/70 text-[11px] hover:text-gold transition-colors">
                {company.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream text-[10px] tracking-[0.2em] uppercase font-medium mb-5">
              Services
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Private Clients", href: "/private-clients" },
                { label: "Physical Gold", href: "/gold" },
                { label: "Rare Gemstones", href: "/gemstones" },
                { label: "How It Works", href: "/how-it-works" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 text-xs hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-cream text-[10px] tracking-[0.2em] uppercase font-medium mb-5">
              Trust
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Verification", href: "/trust" },
                { label: "About Us", href: "/about" },
                { label: "AML Compliance", href: "/aml-compliance" },
                { label: "Broker Policy", href: "/broker-policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 text-xs hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream text-[10px] tracking-[0.2em] uppercase font-medium mb-5">
              Company
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Provenance", href: "/provenance" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/inquire" },
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 text-xs hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[10px] tracking-wide">
            &copy; {new Date().getFullYear()} {company.fullName}. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] tracking-wide text-center sm:text-right">
            All engagements subject to mutual NDA and KYC verification.
          </p>
        </div>
      </div>
    </footer>
  )
}
