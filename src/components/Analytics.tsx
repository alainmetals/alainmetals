"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

function GAPageViewInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: url })
  }, [pathname, searchParams])

  return null
}

export function GAPageView() {
  return (
    <Suspense fallback={null}>
      <GAPageViewInner />
    </Suspense>
  )
}

export function WebVitals() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const reportWebVital = (metric: { name: string; delta: number; id: string }) => {
      if (GA_MEASUREMENT_ID && typeof window.gtag === "function") {
        window.gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(metric.name === "CLS" ? metric.delta * 1000 : metric.delta),
          non_interaction: true,
        })
      }
    }

    if ("PerformanceObserver" in window) {
      try {
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if ((entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) continue
            reportWebVital({ name: "CLS", delta: (entry as PerformanceEntry & { value: number }).value, id: entry.startTime.toString() })
          }
        })
        clsObserver.observe({ type: "layout-shift", buffered: true })

        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          reportWebVital({ name: "LCP", delta: lastEntry.startTime, id: lastEntry.startTime.toString() })
        })
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

        const fidObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const fidEntry = entry as PerformanceEntry & { processingStart: number }
            reportWebVital({ name: "FID", delta: fidEntry.processingStart - fidEntry.startTime, id: fidEntry.startTime.toString() })
          }
        })
        fidObserver.observe({ type: "first-input", buffered: true })
      } catch {
        // PerformanceObserver not fully supported
      }
    }
  }, [])

  return null
}
