import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { GoogleAnalytics, GAPageView, WebVitals } from "@/components/Analytics"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://alainmetalscorp.com"),
  title: {
    default: "Private Access to African Gold & Rare Gemstones | Al AIN Metals",
    template: `%s | Al AIN Metals`,
  },
  description:
    "Direct access to African gold and rare gemstones for private clients. Verified, responsibly sourced precious metals and exceptional African gemstones.",
  keywords: [
    "private gold acquisition africa",
    "allocated gold tanzania",
    "private client gemstones",
    "tanzanite private buyer",
    "african gold direct source",
    "UHNWI precious metals",
    "private vault gold storage",
    "rare gemstone sourcing africa",
    "investment grade gold bars",
    "private precious metals consultation",
  ],
  authors: [{ name: "Al AIN Metals" }],
  creator: "Al AIN Metals",
  publisher: "Al AIN Metals",
  alternates: {
    canonical: "https://alainmetalscorp.com",
    languages: {
      "x-default": "https://alainmetalscorp.com",
      en: "https://alainmetalscorp.com",
    },
  },
  openGraph: {
    title: "Private Access to African Gold & Rare Gemstones | Al AIN Metals",
    description:
      "Direct access to African gold and rare gemstones for private clients. Verified, responsibly sourced precious metals.",
    url: "https://alainmetalscorp.com",
    siteName: "Al AIN Metals",
    locale: "en_US",
    type: "website",
    countryName: "Tanzania",
    images: [
      {
        url: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals - East African Precious Metals & Gemstones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Access to African Gold & Rare Gemstones | Al AIN Metals",
    description:
      "Direct access to African gold and rare gemstones for private clients.",
    images: ["/assets/images/african-precious-metals-gemstones-strategic-minerals.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  category: "Private Client Precious Metals",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className="min-h-dvh grid grid-rows-[1fr_auto] bg-black text-cream antialiased">
        <GoogleAnalytics />
        <GAPageView />
        <WebVitals />
        <header id="site-header" role="banner" aria-label="Site header">
          <Navbar />
        </header>
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}