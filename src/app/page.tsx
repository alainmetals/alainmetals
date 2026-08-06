import { Hero } from "@/components/sections/Hero"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { InstitutionalBuyers } from "@/components/sections/InstitutionalBuyers"
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
      <section aria-label="Hero">
        <Hero />
      </section>
      <section aria-label="Trust indicators">
        <TrustBadges />
      </section>
      <section aria-label="About Al Ain Metals">
        <AboutSection />
      </section>
      <section aria-label="Products">
        <ProductsSection />
      </section>
      <section aria-label="Services">
        <ServicesSection />
      </section>
      <section aria-label="Industries we serve">
        <IndustriesWeServe />
      </section>
      <section aria-label="Why choose us">
        <WhyChooseUs />
      </section>
      <section aria-label="Institutional buyers">
        <InstitutionalBuyers />
      </section>
      <section aria-label="Export process">
        <ExportProcess />
      </section>
      <section aria-label="Global markets">
        <GlobalMarkets />
      </section>
      <section aria-label="Gallery">
        <Gallery />
      </section>
      <section aria-label="Frequently asked questions">
        <FAQSection />
      </section>
      <section aria-label="Contact us">
        <ContactSection />
      </section>
    </>
  )
}
