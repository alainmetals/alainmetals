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
    default: `${company.name} | African Gold Supplier & Precious Metals Trading Company`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "AL AIN METALS CORPORATION LIMITED is an African precious metals sourcing, trading and export company. Through our sourcing network, we supply gold bars, gold nuggets and gold dust to international refineries, bullion dealers, banks and institutional investors worldwide.",
  keywords: [
    "African gold supplier",
    "African gold export company",
    "East Africa gold supplier",
    "African precious metals trading",
    "gold trading Africa",
    "gold bars Africa",
    "gold nuggets Africa",
    "gold dust Africa",
    "international gold supplier",
    "precious metals Africa",
    "gold sourcing East Africa",
    "refinery grade gold Africa",
    "bullion dealers Africa",
    "institutional gold buying Africa",
    "gold bars supplier Uganda Kenya Tanzania DRC",
    "responsible gold sourcing Africa",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  openGraph: {
    title: `${company.name} | African Gold Supplier & Precious Metals Trading`,
    description:
      "African precious metals sourcing, trading and export company. Supplying gold bars, nuggets and dust to refineries, bullion dealers, banks and institutional investors worldwide.",
    url: "https://www.alainmetals.com",
    siteName: company.name,
    locale: "en_US",
    type: "website",
    countryName: "Tanzania",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | African Gold Supplier`,
    description:
      "African precious metals sourcing, trading and export company. Supplying gold to international markets.",
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
  category: "Precious Metals & Mining",
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
        <link rel="canonical" href="https://www.alainmetals.com" />
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
