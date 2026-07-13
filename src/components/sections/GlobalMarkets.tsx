"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { exportDestinations as markets } from "@/lib/siteData"

export function GlobalMarkets() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="section-pad">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <ScrollReveal>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-5">
              <div className="gold-divider" />
              <span className="editorial-caption text-gold/70">
                Global Reach
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4 sm:mb-8" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              Serving Markets{" "}
              <span className="text-gradient-gold">Worldwide</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-start">
            {/* Text + market list */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <ScrollReveal delay={0.2}>
                <p className="editorial-subhead text-white/60 max-w-sm mb-5 sm:mb-8">
                  From East Africa to the world&apos;s leading precious metals hubs.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0">
                {markets.map((market, index) => (
                  <ScrollReveal key={market.name} delay={0.3 + index * 0.03}>
                    <div className="flex items-center gap-3 py-3 border-b border-gold/[0.08] group hover:border-gold/20 transition-colors duration-500">
                      <span className="text-gold/60 text-xs shrink-0 group-hover:text-gold/90 transition-colors duration-500 w-5 text-center font-medium">
                        {market.flag}
                      </span>
                      <span className="text-white/70 text-sm group-hover:text-white/95 transition-colors duration-500 font-light">
                        {market.name}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* SVG World Map */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="relative w-full bg-charcoal/30 border border-gold/[0.12] p-3 sm:p-5 lg:p-6 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[2/1]">
                  <svg viewBox="0 0 1000 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="tz-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                      </radialGradient>
                      <filter id="dot-glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <rect width="1000" height="500" fill="none" />

                    {/* Grid */}
                    <g opacity="0.15">
                      {[100,200,300,400,500,600,700,800,900].map(x => (
                        <line key={x} x1={x} y1={30} x2={x} y2={470} stroke="#D4AF37" strokeWidth="0.3" />
                      ))}
                      {[60,120,180,240,300,360,420].map(y => (
                        <line key={y} x1={30} y1={y} x2={970} y2={y} stroke="#D4AF37" strokeWidth="0.3" />
                      ))}
                    </g>

                    {/* Latitude ellipses */}
                    <ellipse cx="500" cy="250" rx="420" ry="180" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" />
                    <ellipse cx="500" cy="250" rx="310" ry="135" fill="none" stroke="#D4AF37" strokeWidth="0.4" opacity="0.1" />

                    {/* Africa */}
                    <path d="M460,140 L480,120 L510,115 L530,125 L545,140 L555,160 L560,190 L565,220 L570,260 L560,300 L540,340 L520,370 L500,390 L480,370 L460,340 L445,300 L440,260 L445,220 L450,180 Z" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.55" />
                    {/* Europe */}
                    <path d="M440,80 L460,70 L490,75 L520,80 L540,90 L550,105 L545,120 L530,130 L510,125 L490,120 L470,115 L450,105 L440,90 Z" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
                    {/* Asia */}
                    <path d="M550,80 L590,70 L640,75 L700,85 L750,100 L780,130 L790,170 L780,210 L750,240 L710,260 L670,270 L630,265 L600,250 L570,230 L555,200 L550,160 L548,120 Z" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
                    {/* Americas */}
                    <path d="M200,80 L230,90 L250,120 L260,160 L270,200 L280,240 L270,280 L250,320 L230,360 L210,400 L190,420 L180,400 L185,360 L190,320 L195,280 L200,240 L195,200 L190,160 L192,120 Z" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
                    {/* Australia */}
                    <path d="M720,340 L760,335 L800,340 L820,360 L815,385 L790,400 L760,405 L735,395 L720,375 L718,355 Z" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.45" />

                    {/* Market dots - Europe */}
                    <circle cx="480" cy="95" r="4.5" fill="#D4AF37" opacity="0.85" filter="url(#dot-glow)" />
                    <circle cx="500" cy="100" r="3.5" fill="#D4AF37" opacity="0.75" filter="url(#dot-glow)" />
                    <circle cx="470" cy="110" r="3.5" fill="#D4AF37" opacity="0.75" filter="url(#dot-glow)" />
                    {/* Market dots - Asia/Middle East */}
                    <circle cx="590" cy="140" r="4.5" fill="#D4AF37" opacity="0.85" filter="url(#dot-glow)" />
                    <circle cx="610" cy="155" r="3.5" fill="#D4AF37" opacity="0.75" filter="url(#dot-glow)" />
                    <circle cx="640" cy="130" r="3.5" fill="#D4AF37" opacity="0.75" filter="url(#dot-glow)" />
                    {/* Market dots - Americas */}
                    <circle cx="230" cy="130" r="4.5" fill="#D4AF37" opacity="0.85" filter="url(#dot-glow)" />
                    <circle cx="250" cy="150" r="3.5" fill="#D4AF37" opacity="0.75" filter="url(#dot-glow)" />
                    {/* Market dots - Asia Pacific */}
                    <circle cx="740" cy="170" r="3.5" fill="#D4AF37" opacity="0.75" filter="url(#dot-glow)" />
                    <circle cx="760" cy="360" r="3.5" fill="#D4AF37" opacity="0.65" filter="url(#dot-glow)" />

                    {/* Tanzania - center, large with glow */}
                    <circle cx="510" cy="260" r="40" fill="url(#tz-glow)" />
                    <circle cx="510" cy="260" r="7" fill="#D4AF37" filter="url(#dot-glow)" />
                    <circle cx="510" cy="260" r="16" fill="#D4AF37" opacity="0.2" />
                    <circle cx="510" cy="260" r="26" fill="#D4AF37" opacity="0.08" />

                    {/* Connection lines */}
                    <line x1="510" y1="260" x2="480" y2="95" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" strokeDasharray="5,5" />
                    <line x1="510" y1="260" x2="590" y2="140" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" strokeDasharray="5,5" />
                    <line x1="510" y1="260" x2="230" y2="130" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" strokeDasharray="5,5" />
                    <line x1="510" y1="260" x2="740" y2="170" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" strokeDasharray="5,5" />
                    <line x1="510" y1="260" x2="760" y2="360" stroke="#D4AF37" strokeWidth="0.6" opacity="0.3" strokeDasharray="5,5" />

                    <text x="510" y="300" fill="#D4AF37" fontSize="11" textAnchor="middle" fontWeight="600" fontFamily="Geist, sans-serif" letterSpacing="0.2em" opacity="1">
                      TANZANIA
                    </text>
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
