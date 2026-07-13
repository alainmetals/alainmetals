"use client"

import { ScrollReveal } from "@/components/ScrollReveal"
import { products } from "@/lib/siteData"
import Link from "next/link"

const productIcons = [
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
]

export function ProductsContent() {
  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Product Portfolio
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Premium{" "}
            <span className="text-gradient-gold font-semibold">Gold Products</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Sourced responsibly, verified independently, and prepared to the highest international standards.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 0.12}>
              <div className="glass-card-hover rounded-3xl p-8 lg:p-10 h-full flex flex-col">
                <div className="w-14 h-14 mb-6 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/35 group-hover:bg-gold/5 transition-all duration-700">
                  <svg className="w-7 h-7 text-gold/70 group-hover:text-gold transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={productIcons[index]} />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-gold transition-colors duration-500 font-serif">
                  {product.title}
                </h2>
                <p className="text-white/95 text-sm lg:text-base leading-[1.7] mb-6 flex-1 font-light">
                  {product.description}
                </p>
                <div className="space-y-3 pt-6 border-t border-gold/[0.08]">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 text-sm tracking-wider uppercase">Purity</span>
                    <span className="text-gold/90 text-xs font-medium text-right max-w-[65%]">{product.purity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 text-sm tracking-wider uppercase">Origin</span>
                    <span className="text-white/80 text-xs font-medium">{product.origin}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-card rounded-3xl p-10 lg:p-14">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center font-serif">
              Quality Assurance Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { title: "Independent Assaying", desc: "Third-party laboratories verify purity and weight through independent analysis.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: "Export Documentation", desc: "Documentation package including assay certificates, invoices, packing lists and certificates of origin.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                { title: "International Standards", desc: "Products prepared with reference to international market specifications.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item) => (
                <div key={item.title}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-gold/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium mb-2">{item.title}</p>
                  <p className="text-white/95 text-sm leading-[1.7] font-light max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            Inquire About Products
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
