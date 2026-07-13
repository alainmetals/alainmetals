"use client"

import { useState, FormEvent } from "react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { company } from "@/lib/siteData"

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Trade Inquiry: ${formData.name} - ${company.shortName}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold mb-5 font-medium">
            Contact
          </span>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.1] mb-6">
            Initiate a{" "}
            <span className="text-gradient-gold font-semibold">Conversation</span>
          </h1>
          <p className="text-white/95 text-base lg:text-lg leading-[1.7] max-w-2xl mx-auto font-light">
            Submit your inquiry and our team will respond promptly.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2 font-serif">
                  {company.name}
                </h2>
                <p className="text-white/95 text-base lg:text-lg leading-[1.7] font-light">
                  Direct inquiries from institutional buyers and verified trading partners.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Phone",
                    value: company.phone,
                    href: `tel:${company.phone}`,
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  },
                  {
                    label: "Email",
                    value: company.email,
                    href: `mailto:${company.email}`,
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  },
                  {
                    label: "Location",
                    value: company.address,
                    href: null,
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border border-gold/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-[18px] h-[18px] text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-white/70 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white/80 text-sm hover:text-gold transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card rounded-3xl p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
                  <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3 font-serif">
                  Inquiry Submitted
                </h2>
                <p className="text-white/95 text-sm lg:text-base leading-[1.7] font-light max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your inquiry and respond promptly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-7 lg:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] text-white/70 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-gold/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] text-white/70 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-gold/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-all duration-300"
                      placeholder="corporate@domain.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-[11px] text-white/70 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-black/60 border border-gold/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] text-white/70 uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-gold/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-all duration-300"
                      placeholder="+255 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-[11px] text-white/70 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-gold/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-all duration-300 resize-none"
                    placeholder="Please describe your requirements, including product type, quantity, and destination market..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-gold text-black font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
