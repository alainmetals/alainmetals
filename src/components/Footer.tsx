import Link from "next/link"
import { company } from "@/lib/siteData"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Export Process", href: "/export-process" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Compliance", href: "/compliance" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: company.phone, href: `tel:${company.phone}` },
      { label: company.email, href: `mailto:${company.email}` },
    ],
  },
]

const complianceBadges = [
  { label: "OECD Aligned", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "AML / KYC", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { label: "Licensed Exporter", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-gold/10" role="contentinfo">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 group mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/20 shrink-0">
                  <span className="text-black font-bold text-sm">A</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white group-hover:text-gold transition-colors leading-tight">
                    {company.shortName}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-white/50">
                    Precious Metals Trading
                  </span>
                </div>
              </Link>
              <div className="w-10 h-px bg-gradient-to-r from-gold/40 to-transparent mb-4" />
              <p className="text-white/55 text-[13px] leading-relaxed max-w-xs font-light">
                {company.name} is a Tanzania-based company specialising in the
                export of gold and precious metals to international markets.
              </p>

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
              <div key={group.title}>
                <h3 className="text-gold text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold mb-4 sm:mb-5">
                  {group.title}
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
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
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-[11px] sm:text-xs font-light">
            &copy; {currentYear} {company.name}. All rights reserved.
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
