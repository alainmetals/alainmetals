"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { exportDestinations, company, images } from "@/lib/siteData"

export function ExportDestinations() {
  return (
    <section className="py-28 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden mb-16 lg:mb-20 shadow-2xl gold-shadow-lg">
          <OptimizedImage src={images.logistics} alt="Global gold export port" fill objectPosition="center" />
        </div>
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Export Destinations
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] mb-4">
            Serving Markets{" "}
            <span className="text-gradient-gold font-semibold">Worldwide</span>
          </h2>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            From Africa to the world&apos;s leading precious metals hubs and refining centres.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-full aspect-[2/1] bg-black/60 border border-gold/[0.06] rounded-3xl overflow-hidden gold-glow-sm mb-12">
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
              <svg viewBox="0 0 800 400" className="w-full h-full max-w-4xl" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="400" fill="none" />
                <g opacity="0.06">
                  {[100,200,300,400,500,600,700].map(x => <line key={x} x1={x} y1={40} x2={x} y2={360} stroke="#D4AF37" strokeWidth="0.5" />)}
                  {[80,160,240,320].map(y => <line key={y} x1={50} y1={y} x2={750} y2={y} stroke="#D4AF37" strokeWidth="0.5" />)}
                </g>
                <ellipse cx="400" cy="200" rx="320" ry="140" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.15" />
                <ellipse cx="400" cy="200" rx="240" ry="105" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.1" />

                {[
                  { cx: 580, cy: 110 }, { cx: 590, cy: 120 }, { cx: 560, cy: 130 }, { cx: 540, cy: 100 },
                  { cx: 570, cy: 90 }, { cx: 550, cy: 140 }, { cx: 530, cy: 120 }, { cx: 620, cy: 130 },
                  { cx: 440, cy: 130 }, { cx: 420, cy: 150 }, { cx: 300, cy: 120 }, { cx: 310, cy: 140 },
                  { cx: 260, cy: 130 }, { cx: 480, cy: 170 }, { cx: 490, cy: 190 }, { cx: 470, cy: 200 },
                  { cx: 350, cy: 70 }, { cx: 380, cy: 60 }, { cx: 600, cy: 160 },
                ].map((dot, i) => <circle key={i} cx={dot.cx} cy={dot.cy} r="2.5" fill="#D4AF37" opacity="0.4" />)}

                <circle cx="405" cy="210" r="6" fill="#D4AF37" />
                <circle cx="405" cy="210" r="12" fill="#D4AF37" opacity="0.15" />
                <circle cx="405" cy="210" r="20" fill="#D4AF37" opacity="0.06" />
                <text x="405" y="235" fill="#D4AF37" fontSize="9" textAnchor="middle" fontWeight="600" fontFamily="Geist, sans-serif">AFRICA</text>

                {[{ x: 580, y: 110 }, { x: 440, y: 130 }, { x: 300, y: 120 }, { x: 490, y: 190 }, { x: 350, y: 70 }].map((t, i) => (
                  <line key={i} x1="405" y1="210" x2={t.x} y2={t.y} stroke="#D4AF37" strokeWidth="0.4" opacity="0.15" strokeDasharray="4,4" />
                ))}
              </svg>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {exportDestinations.map((dest, index) => (
            <ScrollReveal key={dest.name} delay={index * 0.04}>
              <div className="glass-card-hover rounded-3xl text-center py-3.5 px-3">
                <p className="text-white/70 text-sm font-medium">{dest.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <p className="text-white/95 text-sm leading-[1.7] font-light max-w-lg mx-auto">
            {company.shortName} exports to refineries, bullion dealers and institutional buyers across these and other international markets.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
