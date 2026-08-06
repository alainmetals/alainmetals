"use client"

import Link from "next/link"
import { useState } from "react"
import { company } from "@/lib/siteData"

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Gold Bars", href: "/products/gold-bars" },
      { label: "Gold Nuggets", href: "/products/gold-nuggets" },
      { label: "Tanzanite", href: "/products/tanzanite" },
      { label: "Diamonds", href: "/products/diamonds" },
      { label: "Copper", href: "/products/copper" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Sourcing",
    links: [
      { label: "Tanzania", href: "/sourcing/tanzania" },
      { label: "DRC", href: "/sourcing/drc" },
      { label: "South Africa", href: "/sourcing/south-africa" },
      { label: "Ghana", href: "/sourcing/ghana" },
      { label: "All Countries", href: "/sourcing" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "UAE", href: "/destinations/uae" },
      { label: "Switzerland", href: "/destinations/switzerland" },
      { label: "India", href: "/destinations/india" },
      { label: "United Kingdom", href: "/destinations/united-kingdom" },
      { label: "All Destinations", href: "/destinations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", href: "/resources" },
      { label: "Market Insights", href: "/resources?category=market-insights" },
      { label: "Export Guides", href: "/resources?category=export-guides" },
      { label: "All Guides", href: "/guides" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Refineries", href: "/industries/refineries" },
      { label: "Bullion Dealers", href: "/industries/bullion-dealers" },
      { label: "Banks", href: "/industries/banks" },
      { label: "Jewellery", href: "/industries/jewellery-manufacturers" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    title: "Trust & Compliance",
    links: [
      { label: "Corporate Governance", href: "/trust/corporate-governance" },
      { label: "Responsible Sourcing", href: "/trust/responsible-sourcing" },
      { label: "AML / KYC", href: "/trust/aml-kyc" },
      { label: "ESG & Sustainability", href: "/trust/esg-sustainability" },
      { label: "All Trust", href: "/trust" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Export Process", href: "/export-process" },
      { label: "Compliance", href: "/compliance" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

const complianceBadges = [
  { label: "OECD Aligned", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "AML / KYC", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { label: "Licensed Exporter", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
]

function FooterAccordion({ group }: { group: typeof footerLinks[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gold/[0.06] lg:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 lg:pointer-events-none"
        aria-expanded={open}
      >
        <h3 className="text-gold text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
          {group.title}
        </h3>
        <svg
          className={`w-4 h-4 text-gold/40 lg:hidden transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul className={`space-y-2.5 sm:space-y-3 overflow-hidden transition-all duration-300 lg:!h-auto lg:!opacity-100 ${open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:pb-0"}`}>
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white/50 hover:text-gold transition-all duration-300 text-[13px] sm:text-sm hover:translate-x-0.5 inline-block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-gold/10" role="contentinfo">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 sm:gap-8 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-2 pb-6 lg:pb-0">
              <Link href="/" className="flex items-center gap-3 group mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/20 shrink-0">
                  <span className="text-black font-bold text-sm">A</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white group-hover:text-gold transition-colors leading-tight">
                    {company.shortName}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-white/50">
                    Precious Metals, Gemstones & Minerals
                  </span>
                </div>
              </Link>
              <div className="w-10 h-px bg-gradient-to-r from-gold/40 to-transparent mb-4" />
              <p className="text-white/55 text-[13px] leading-relaxed max-w-xs font-light">
                {company.name} is a Tanzania-based company specialising in the
                export of precious metals, gemstones and strategic minerals to international markets.
              </p>

              <address className="not-italic text-white/60 text-[12px] leading-relaxed mt-4 space-y-1">
                <p>{company.name}</p>
                <p>Dar es Salaam, Tanzania</p>
                <p>
                  <a href={`tel:${company.phone}`} className="hover:text-gold transition-colors">{company.phoneDisplay}</a>
                </p>
                <p>
                  <a href={`mailto:${company.email}`} className="hover:text-gold transition-colors">{company.email}</a>
                </p>
              </address>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-white/50 border border-gold/[0.08] px-2.5 py-1">
                  <span>TZ</span>
                  <span>Tanzania</span>
                </span>
                <span className="inline-flex items-center text-[11px] text-white/50 border border-gold/[0.08] px-2.5 py-1">
                  East Africa
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {complianceBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 text-[9px] tracking-wider uppercase text-gold/60 border border-gold/[0.08] px-2 py-1 gold-bg-faint"
                  >
                    <svg className="w-2.5 h-2.5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} />
                    </svg>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {footerLinks.map((group) => (
              <FooterAccordion key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-[11px] sm:text-xs font-light">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-[10px] sm:text-[11px] font-light text-center sm:text-right max-w-lg">
            Products and commodities are supplied subject to availability, regulatory approvals, applicable laws and commercial agreements.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <p className="text-white/40 text-[10px] sm:text-[11px] tracking-wider">
              Tanzania &mdash; East Africa &mdash; Global Reach
            </p>
            <span className="text-white/15 text-[10px] hidden sm:inline">|</span>
            <p className="text-white/30 text-[10px] sm:text-[11px] tracking-wider hidden sm:block">
              Built on Compliance, Transparency &amp; Trust
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
