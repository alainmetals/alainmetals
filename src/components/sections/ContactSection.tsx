"use client"

import { useState, FormEvent } from "react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { OptimizedImage } from "@/components/OptimizedImage"
import { company, images } from "@/lib/siteData"

const productOptions = ["Gold Bars", "Gold Nuggets", "Gold Dust"]
const quantityOptions = ["1 – 10 kg", "10 – 50 kg", "50 – 100 kg", "100+ kg"]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    destination: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `RFQ: ${formData.product || "Gold"} ${formData.quantity || ""} - ${formData.name} - ${company.shortName}`
    )
    const body = encodeURIComponent(
      `REQUEST FOR QUOTATION\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Product: ${formData.product}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Destination: ${formData.destination}\n\n` +
      `Additional Details:\n${formData.message}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="bg-black overflow-hidden">
      <div className="section-rule" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh] lg:min-h-[70vh]">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative h-[30vh] sm:h-[35vh] lg:h-full">
              <OptimizedImage
                src={images.contact}
                alt="Luxury corporate headquarters"
                fill
                objectPosition="center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black lg:from-black/20 lg:via-transparent lg:to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex items-center">
            <div className="px-5 sm:px-10 lg:px-16 py-10 sm:py-16 lg:py-24 w-full">
              <ScrollReveal>
                <div className="flex items-center gap-2 sm:gap-4 mb-5 sm:mb-10">
                  <div className="gold-divider" />
                  <span className="editorial-caption text-gold/70 text-[9px] sm:text-[10px]">
                    Request for Quotation
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-serif font-light tracking-[-0.03em] text-white mb-4 sm:mb-6" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 0.95 }}>
                  Start Your{" "}
                  <span className="text-gradient-gold">RFQ</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="editorial-subhead text-white/55 max-w-sm mb-6 sm:mb-10">
                  Submit your requirements. We respond within 24 hours with indicative pricing and availability.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-3 sm:space-y-5 mb-6 sm:mb-10">
                  {[
                    { label: "Phone", value: company.phone, href: `tel:${company.phone}` },
                    { label: "Email", value: company.email, href: `mailto:${company.email}` },
                    { label: "Location", value: company.address, href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 sm:gap-5">
                      <div className="w-px h-7 sm:h-8 bg-gold/15" />
                      <div>
                        <p className="editorial-caption text-white/40 mb-1 text-[9px] sm:text-[10px]">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white/65 text-[13px] sm:text-sm hover:text-gold transition-colors duration-500">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/65 text-[13px] sm:text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                {submitted ? (
                  <div className="border border-gold/[0.08] p-8 sm:p-10 text-center">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-5 sm:mb-6 border border-gold/30 flex items-center justify-center">
                      <svg className="w-6 sm:w-7 h-6 sm:h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-white mb-3">
                      RFQ Submitted
                    </h3>
                    <p className="text-white/45 text-[13px] sm:text-sm font-light">
                      Thank you for your inquiry. Our trading desk will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500"
                          placeholder="corporate@domain.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company-rfq" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                        Company / Organisation *
                      </label>
                      <input
                        type="text"
                        id="company-rfq"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="product" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                          Product Interest *
                        </label>
                        <select
                          id="product"
                          required
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-black text-white/40">Select product</option>
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                          Estimated Quantity
                        </label>
                        <select
                          id="quantity"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-black text-white/40">Select range</option>
                          {quantityOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="destination" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                        Delivery Destination
                      </label>
                      <input
                        type="text"
                        id="destination"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500"
                        placeholder="City, Country"
                      />
                    </div>

                    <div>
                      <label htmlFor="message-rfq" className="editorial-caption text-white/40 block mb-2.5 text-[9px] sm:text-[10px]">
                        Additional Requirements
                      </label>
                      <textarea
                        id="message-rfq"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-gold/[0.1] pb-2.5 text-white text-[13px] sm:text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 focus:shadow-[0_1px_0_0_rgba(212,175,55,0.6)] transition-all duration-500 resize-none"
                        placeholder="Purity requirements, timeline, documentation needs..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-gold text-black text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] overflow-hidden hover:bg-gold-light transition-all duration-500 cursor-pointer w-full sm:w-auto"
                      >
                        <span className="relative z-10">Submit RFQ</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
