import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { TradeAssistant } from "@/components/TradeAssistant"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { BackToTop } from "@/components/BackToTop"
import { LoadingScreen } from "@/components/LoadingScreen"
import { GoogleAnalytics, GAPageView, WebVitals } from "@/components/Analytics"
import { company } from "@/lib/siteData"

function Header({ children }: { children: React.ReactNode }) {
  return (
    <header id="site-header" role="banner" aria-label="Site header">
      {children}
    </header>
  )
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    default: "Al Ain Metals Corp | East African Precious Metals Trading",
    template: `%s`,
  },
  description:
    "Al Ain Metals Corporation supplies premium gold, silver, gemstones and strategic minerals from East Africa to refineries, banks and institutional buyers worldwide. OECD-aligned due diligence and responsible sourcing.",
  keywords: [
    "East African precious metals supplier",
    "East African gemstones supplier",
    "East African strategic minerals",
    "gold supplier East Africa",
    "tanzanite supplier",
    "rough diamonds Africa",
    "copper supplier Africa",
    "cobalt supplier Africa",
    "precious metals trading Africa",
    "gemstones trading Africa",
    "East Africa precious metals",
    "East Africa gemstones",
    "refinery grade gold Africa",
    "bullion dealers Africa",
    "jewellery manufacturers supplier",
    "institutional precious metals buying Africa",
    "responsible sourcing Africa",
    "Kimberley Process diamonds",
    "OECD due diligence minerals",
    "Al Ain Metals",
    "gold export Tanzania",
    "silver bullion East Africa",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "https://alainmetalscorp.com",
    languages: {
      "x-default": "https://alainmetalscorp.com",
      en: "https://alainmetalscorp.com",
    },
  },
  openGraph: {
    title: "Al Ain Metals Corp | East African Precious Metals & Gemstones Export",
    description:
      "Al Ain Metals Corporation supplies premium gold, silver, gemstones & strategic minerals from East Africa to refineries, banks & institutional buyers worldwide.",
    url: "https://alainmetalscorp.com",
    siteName: company.name,
    locale: "en_US",
    type: "website",
    countryName: "Tanzania",
    images: [
      {
        url: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
        width: 1200,
        height: 630,
        alt: "Al Ain Metals Corp - East African Precious Metals & Gemstones Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Ain Metals Corp | East African Precious Metals & Gemstones Export",
    description:
      "Al Ain Metals Corporation supplies premium gold, silver, gemstones & strategic minerals from East Africa to refineries, banks & institutional buyers worldwide.",
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
  category: "Precious Metals, Gemstones & Strategic Minerals",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="TZ" />
        <meta name="geo.placename" content="Dar es Salaam, Tanzania" />
      </head>
      <body className="min-h-dvh grid grid-rows-[1fr_auto] bg-black text-white antialiased">
        <GoogleAnalytics />
        <GAPageView />
        <WebVitals />
        <LoadingScreen />
        <Header>
          <Navbar />
        </Header>
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
        <TradeAssistant />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
