"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { company } from "@/lib/siteData"

type Step =
  | "welcome"
  | "inquiryType"
  | "commodity"
  | "quantity"
  | "buyerType"
  | "country"
  | "contact"
  | "completed"

interface QualificationData {
  inquiryType: string
  commodity: string
  quantity: string
  buyerType: string
  country: string
  name: string
  phone: string
  email: string
  message: string
}

const STORAGE_KEY = "ta_progress"

const INQUIRY_TYPES = ["Buy", "Sell", "Source", "Partnership", "General Enquiry", "Prefer to Discuss"] as const
const COMMODITIES = ["Gold", "Silver", "Copper", "Tanzanite", "Diamonds", "Gemstones", "Strategic Minerals", "Other", "Prefer to Discuss"] as const
const QUANTITIES = ["Sample", "Small", "Medium", "Large", "Long-term", "Not Sure"] as const
const BUYER_TYPES = ["Individual", "Company", "Investor", "Trader", "Miner", "Jewellery Business", "Other"] as const

const COUNTRIES = [
  "United Arab Emirates", "India", "China", "Switzerland", "United Kingdom",
  "Turkey", "Hong Kong SAR", "Saudi Arabia", "South Africa", "Oman",
  "United States", "Germany", "France", "Japan", "Singapore",
  "Australia", "Brazil", "Canada", "Italy", "Netherlands",
  "Thailand", "Indonesia", "Malaysia", "Philippines", "Vietnam",
  "South Korea", "Egypt", "Kenya", "Tanzania", "Nigeria",
  "Ghana", "Uganda", "Rwanda", "DRC", "Mozambique",
  "Zambia", "Zimbabwe", "Botswana", "Namibia", "Ethiopia",
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[\d\s\-()]{7,}$/

function getInitialData(): QualificationData {
  const empty: QualificationData = {
    inquiryType: "", commodity: "", quantity: "", buyerType: "",
    country: "", name: "", phone: "", email: "", message: "",
  }
  if (typeof window === "undefined") return empty
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return empty
    const saved = JSON.parse(raw) as QualificationData
    return saved.name ? saved : empty
  } catch {
    return empty
  }
}

function saveProgress(data: QualificationData) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {}
}

function clearSaved() {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {}
}

function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return
  try {
    if (window.gtag) {
      window.gtag("event", name, params)
    }
  } catch {}
}

function buildWhatsAppMessage(data: QualificationData): string {
  const lines = [
    "New Client Inquiry",
    "",
    `Need: ${data.inquiryType}`,
    `Commodity: ${data.commodity}`,
    `Quantity: ${data.quantity}`,
    `Client Type: ${data.buyerType}`,
    `Country: ${data.country}`,
    `Name: ${data.name}`,
  ]
  if (data.phone) lines.push(`Phone: ${data.phone}`)
  if (data.email) lines.push(`Email: ${data.email}`)
  if (data.message) lines.push("", `Note: ${data.message}`)
  return lines.join("\n")
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function TradeAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<Step>("welcome")
  const [data, setData] = useState<QualificationData>(getInitialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showTooltip, setShowTooltip] = useState(false)
  const [countrySearch, setCountrySearch] = useState("")
  const contentRef = useRef<HTMLDivElement>(null)
  const countryInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [step])

  useEffect(() => {
    if (step === "country" && countryInputRef.current) {
      countryInputRef.current.focus()
    }
  }, [step])

  useEffect(() => {
    if (step !== "welcome" && step !== "completed") {
      saveProgress(data)
    }
  }, [data, step])

  const advanceStep = useCallback((next: Step) => {
    setTimeout(() => setStep(next), 400)
  }, [])

  const handleChipSelect = (field: keyof QualificationData, value: string, next: Step) => {
    setErrors({})
    setData((p) => ({ ...p, [field]: value }))
    advanceStep(next)
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); action() }
  }

  const filteredCountries = useMemo(() => {
    if (!countrySearch) return COUNTRIES
    const q = countrySearch.toLowerCase()
    return COUNTRIES.filter((c) => c.toLowerCase().includes(q))
  }, [countrySearch])

  const handleSubmit = () => {
    trackEvent("assistant_complete", {
      inquiry_type: data.inquiryType,
      commodity: data.commodity,
      buyer_type: data.buyerType,
      country: data.country,
    })
    advanceStep("completed")
  }

  const handleRestart = () => {
    clearSaved()
    setIsOpen(false)
    setStep("welcome")
    setData({ inquiryType: "", commodity: "", quantity: "", buyerType: "", country: "", name: "", phone: "", email: "", message: "" })
    setErrors({})
    setCountrySearch("")
  }

  const handleOpen = () => {
    trackEvent("assistant_open")
    setIsOpen(true)
    setShowTooltip(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const openWhatsApp = () => {
    trackEvent("whatsapp_click", {
      inquiry_type: data.inquiryType,
      commodity: data.commodity,
    })
    clearSaved()
    const msg = buildWhatsAppMessage(data)
    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const chipClass = "px-4 py-3 border border-white/[0.06] text-white/80 text-sm text-left transition-all duration-200 hover:border-gold/40 hover:bg-gold/5 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 cursor-pointer"
  const chipActiveClass = "px-4 py-3 border border-gold/50 bg-gold/10 text-gold text-sm text-left transition-all duration-200"

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return (
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <span className="text-gold font-serif text-sm font-semibold">A</span>
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium">Trade Assistant</p>
                <p className="text-white/40 text-xs">AL AIN METALS</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Tell us what you need and we will connect you with the right team on WhatsApp.
            </p>
            <button
              onClick={() => advanceStep("inquiryType")}
              className="w-full py-3 bg-gold text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300 cursor-pointer"
            >
              Get Started
            </button>
            <div className="flex items-center gap-2 pt-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              <p className="text-white/30 text-[10px]">Secure · Confidential</p>
            </div>
          </div>
        )

      case "inquiryType":
        return (
          <div className="space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1" aria-live="polite">Step 1 of 6</p>
            <p className="text-white/80 text-sm font-medium">What do you need?</p>
            <div className="grid grid-cols-1 gap-2" role="radiogroup" aria-label="Inquiry type">
              {INQUIRY_TYPES.map((t) => (
                <button key={t} role="radio" aria-checked={data.inquiryType === t}
                  onClick={() => handleChipSelect("inquiryType", t, "commodity")}
                  onKeyDown={(e) => handleKeyDown(e, () => handleChipSelect("inquiryType", t, "commodity"))}
                  className={data.inquiryType === t ? chipActiveClass : chipClass}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )

      case "commodity":
        return (
          <div className="space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1" aria-live="polite">Step 2 of 6</p>
            <p className="text-white/80 text-sm font-medium">What commodity?</p>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Commodity">
              {COMMODITIES.map((c) => (
                <button key={c} role="radio" aria-checked={data.commodity === c}
                  onClick={() => handleChipSelect("commodity", c, "quantity")}
                  onKeyDown={(e) => handleKeyDown(e, () => handleChipSelect("commodity", c, "quantity"))}
                  className={data.commodity === c ? chipActiveClass : chipClass}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )

      case "quantity":
        return (
          <div className="space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1" aria-live="polite">Step 3 of 6</p>
            <p className="text-white/80 text-sm font-medium">How much do you need?</p>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Quantity">
              {QUANTITIES.map((q) => (
                <button key={q} role="radio" aria-checked={data.quantity === q}
                  onClick={() => handleChipSelect("quantity", q, "buyerType")}
                  onKeyDown={(e) => handleKeyDown(e, () => handleChipSelect("quantity", q, "buyerType"))}
                  className={data.quantity === q ? chipActiveClass : chipClass}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )

      case "buyerType":
        return (
          <div className="space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1" aria-live="polite">Step 4 of 6</p>
            <p className="text-white/80 text-sm font-medium">You are:</p>
            <div className="grid grid-cols-1 gap-2" role="radiogroup" aria-label="Buyer type">
              {BUYER_TYPES.map((b) => (
                <button key={b} role="radio" aria-checked={data.buyerType === b}
                  onClick={() => handleChipSelect("buyerType", b, "country")}
                  onKeyDown={(e) => handleKeyDown(e, () => handleChipSelect("buyerType", b, "country"))}
                  className={data.buyerType === b ? chipActiveClass : chipClass}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        )

      case "country":
        return (
          <div className="space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1" aria-live="polite">Step 5 of 6</p>
            <p className="text-white/80 text-sm font-medium">Your country</p>
            <div>
              <label htmlFor="ta-country-search" className="sr-only">Search countries</label>
              <input
                ref={countryInputRef}
                id="ta-country-search"
                type="text"
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 transition-all duration-300 mb-2"
                placeholder="Type to search..."
              />
            </div>
            <div className="max-h-[260px] overflow-y-auto pr-1 space-y-1" role="listbox" aria-label="Country list">
              {filteredCountries.map((c) => (
                <button key={c} role="option" aria-selected={data.country === c}
                  onClick={() => {
                    setData((p) => ({ ...p, country: c }))
                    setErrors({})
                    setCountrySearch("")
                    advanceStep("contact")
                  }}
                  onKeyDown={(e) => handleKeyDown(e, () => {
                    setData((p) => ({ ...p, country: c }))
                    setErrors({})
                    setCountrySearch("")
                    advanceStep("contact")
                  })}
                  className={`w-full text-left px-3 py-2.5 text-sm transition-all duration-200 hover:bg-gold/5 focus:outline-none focus:bg-gold/5 cursor-pointer ${
                    data.country === c ? "text-gold bg-gold/10" : "text-white/70"
                  }`}
                >
                  {c}
                </button>
              ))}
              {filteredCountries.length === 0 && (
                <p className="text-white/30 text-xs text-center py-4">No countries match your search.</p>
              )}
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-4">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1" aria-live="polite">Step 6 of 6</p>
            <p className="text-white/80 text-sm font-medium">How do we reach you?</p>
            <div>
              <label htmlFor="ta-name" className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">
                Name <span className="text-red-400">*</span>
              </label>
              <input id="ta-name" type="text" required aria-required="true" aria-invalid={!!errors.name}
                value={data.name} onChange={(e) => { setData((p) => ({ ...p, name: e.target.value })); setErrors({}) }}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 transition-all duration-300"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="ta-phone" className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">
                Phone <span className="text-white/30">(or email below)</span>
              </label>
              <input id="ta-phone" type="tel" value={data.phone}
                onChange={(e) => { setData((p) => ({ ...p, phone: e.target.value })); setErrors({}) }}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 transition-all duration-300"
                placeholder="+1 (000) 000-0000"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1" role="alert">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="ta-email" className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">
                Email <span className="text-white/30">(or phone above)</span>
              </label>
              <input id="ta-email" type="email" value={data.email}
                onChange={(e) => { setData((p) => ({ ...p, email: e.target.value })); setErrors({}) }}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 transition-all duration-300"
                placeholder="corporate@domain.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="ta-message" className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">Anything else?</label>
              <textarea id="ta-message" rows={2} value={data.message}
                onChange={(e) => setData((p) => ({ ...p, message: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 pb-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/60 transition-all duration-300 resize-none"
                placeholder="Optional — specs, timeline, notes..."
              />
            </div>
            <button onClick={() => {
              const errs: Record<string, string> = {}
              if (!data.name.trim()) errs.name = "Please enter your name"
              if (!data.phone.trim() && !data.email.trim()) errs.contact = "Please provide a phone number or email"
              if (data.phone.trim() && !PHONE_REGEX.test(data.phone)) errs.phone = "Please enter a valid phone number"
              if (data.email.trim() && !EMAIL_REGEX.test(data.email)) errs.email = "Please enter a valid email address"
              if (Object.keys(errs).length > 0) { setErrors(errs); return }
              handleSubmit()
            }} onKeyDown={(e) => handleKeyDown(e, () => {
              const errs: Record<string, string> = {}
              if (!data.name.trim()) errs.name = "Please enter your name"
              if (!data.phone.trim() && !data.email.trim()) errs.contact = "Please provide a phone number or email"
              if (data.phone.trim() && !PHONE_REGEX.test(data.phone)) errs.phone = "Please enter a valid phone number"
              if (data.email.trim() && !EMAIL_REGEX.test(data.email)) errs.email = "Please enter a valid email address"
              if (Object.keys(errs).length > 0) { setErrors(errs); return }
              handleSubmit()
            })}
              className="w-full py-3 bg-gold text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold-light transition-colors duration-300 cursor-pointer mt-2">
              Continue
            </button>
          </div>
        )

      case "completed":
        return (
          <div className="space-y-5">
            <div className="text-center pb-4 border-b border-white/[0.06]">
              <div className="w-14 h-14 mx-auto mb-3 border border-gold/30 flex items-center justify-center" aria-hidden="true">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white/90 text-sm font-medium">Summary</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-white/50 text-xs">Need</span>
                <span className="text-white/80 text-xs">{data.inquiryType}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-white/50 text-xs">Commodity</span>
                <span className="text-white/80 text-xs">{data.commodity}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-white/50 text-xs">Quantity</span>
                <span className="text-white/80 text-xs">{data.quantity}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-white/50 text-xs">Client Type</span>
                <span className="text-white/80 text-xs">{data.buyerType}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-white/50 text-xs">Country</span>
                <span className="text-white/80 text-xs">{data.country}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-white/50 text-xs">Name</span>
                <span className="text-white/80 text-xs">{data.name}</span>
              </div>
              {(data.phone || data.email) && (
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-white/50 text-xs">Contact</span>
                  <span className="text-white/80 text-xs">{data.phone || data.email}</span>
                </div>
              )}
              {data.message && (
                <div className="py-1.5">
                  <span className="text-white/50 text-xs block mb-1">Note</span>
                  <p className="text-white/65 text-xs leading-relaxed">{data.message}</p>
                </div>
              )}
            </div>

            <button onClick={openWhatsApp}
              className="w-full py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#20BD5A] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Continue on WhatsApp
            </button>

            <p className="text-white/30 text-[10px] text-center leading-relaxed">
              Our team will respond within 24 hours.
            </p>

            <button onClick={handleRestart}
              className="w-full py-3 border border-white/10 text-white/50 text-xs uppercase tracking-wider hover:border-white/20 transition-colors duration-300 cursor-pointer">
              Start Over
            </button>
          </div>
        )
    }
  }

  const isInquiryFlow = step !== "welcome" && step !== "completed"
  const stepNum = ["welcome", "inquiryType", "commodity", "quantity", "buyerType", "country", "contact", "completed"].indexOf(step)

  return (
    <>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        className="absolute opacity-0 h-0 w-0 pointer-events-none" style={{ position: "absolute", left: "-9999px" }}
        value="" onChange={() => { /* honeypot */ }}
      />

      <AnimatePresence>
        {!isOpen && (
          <div
            className="fixed bottom-20 right-5 sm:bottom-24 sm:right-6 z-50"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <AnimatePresence>
              {showTooltip && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                  className="absolute bottom-14 right-0 z-50 whitespace-nowrap">
                  <div className="bg-charcoal border border-gold/20 px-3 py-2 shadow-lg">
                    <p className="text-white/80 text-[11px] leading-snug">Trade Assistant — Quick enquiry</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.05 }} onClick={handleOpen}
              className="w-11 h-11 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-shadow duration-300"
              aria-label="Open Trade Assistant">
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50" onClick={handleClose} />
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[400px] h-full sm:h-[600px] sm:max-h-[80vh] bg-black border border-white/[0.06] flex flex-col overflow-hidden"
              role="dialog" aria-label="Trade Assistant" aria-modal="true">
              <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gold/10 border border-gold/30 flex items-center justify-center" aria-hidden="true">
                    <span className="text-gold font-serif text-xs font-semibold">A</span>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium">Trade Assistant</p>
                    <p className="text-gold/60 text-[10px] uppercase tracking-wider">AL AIN METALS</p>
                  </div>
                </div>
                <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors" aria-label="Close">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div ref={contentRef} className="flex-1 overflow-y-auto px-5 py-5">
                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {isInquiryFlow && (
                <div className="px-5 py-3 border-t border-white/[0.06] flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5" aria-label={`Step ${stepNum} of 6`}>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 transition-colors duration-300 ${i < stepNum ? "bg-gold" : "bg-white/10"}`} />
                      ))}
                    </div>
                    <button onClick={() => {
                      const flow: Step[] = ["welcome", "inquiryType", "commodity", "quantity", "buyerType", "country", "contact"]
                      const idx = flow.indexOf(step)
                      if (idx > 1) setStep(flow[idx - 1])
                    }} className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer" aria-label="Go back">
                      Back
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
