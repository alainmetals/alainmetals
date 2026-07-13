import { Hero } from "@/components/sections/Hero"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ExportProcess } from "@/components/sections/ExportProcess"
import { GlobalMarkets } from "@/components/sections/GlobalMarkets"
import { Gallery } from "@/components/sections/Gallery"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { JsonLd } from "@/components/JsonLd"

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustBadges />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ExportProcess />
      <GlobalMarkets />
      <Gallery />
      <FAQSection />
      <ContactSection />
    </>
  )
}
