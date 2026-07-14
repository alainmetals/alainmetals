import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { BackToTop } from "@/components/BackToTop"
import { LoadingScreen } from "@/components/LoadingScreen"
import { company } from "@/lib/siteData"

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
  metadataBase: new URL("https://www.alainmetals.com"),
  title: {
    default: `${company.name} | African Precious Metals, Gemstones & Strategic Minerals Trading`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "AL AIN METALS CORPORATION LIMITED is an African precious metals, gemstones and strategic minerals sourcing, trading and export company. Through our sourcing network, we supply gold, silver, platinum group metals, gemstones and industrial minerals to international refineries, jewellers, bullion dealers, banks and institutional buyers worldwide.",
  keywords: [
    "African precious metals supplier",
    "African gemstones supplier",
    "African strategic minerals",
    "gold supplier Africa",
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
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "https://www.alainmetals.com",
  },
  openGraph: {
    title: `${company.name} | African Precious Metals, Gemstones & Strategic Minerals`,
    description:
      "African precious metals, gemstones and strategic minerals sourcing, trading and export company. Supplying gold, silver, platinum, gemstones and industrial minerals to international markets.",
    url: "https://www.alainmetals.com",
    siteName: company.name,
    locale: "en_US",
    type: "website",
    countryName: "Tanzania",
    images: [
      {
        url: "/assets/images/african-precious-metals-gemstones-strategic-minerals.webp",
        width: 1200,
        height: 630,
        alt: "AL AIN METALS CORPORATION LIMITED - African Precious Metals Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | African Precious Metals, Gemstones & Strategic Minerals`,
    description:
      "African precious metals, gemstones and strategic minerals sourcing, trading and export company.",
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
  verification: {
    google: "placeholder",
  },
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
        <LoadingScreen />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
