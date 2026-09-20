import { HeroSection } from "@/components/sections/HeroSection"
import { PrivateClientIntro } from "@/components/sections/PrivateClientIntro"
import { GoldPreview } from "@/components/sections/GoldPreview"
import { GemstonesPreview } from "@/components/sections/GemstonesPreview"
import { HowItWorksPreview } from "@/components/sections/HowItWorksPreview"
import { TrustPreview } from "@/components/sections/TrustPreview"
import { CtaSection } from "@/components/sections/CtaSection"
import { FaqSection } from "@/components/FaqSection"
import { JsonLd } from "@/components/JsonLd"
import { homepageFaqs } from "@/lib/aeoContent"

export default function HomePage() {
  return (
    <>
      <JsonLd faqs={homepageFaqs} pageName="AL AIN Metals — Private Access to African Gold & Rare Gemstones" pageDescription="Direct access to African gold and rare gemstones for private clients. Independently assayed gold, GIA/GRS certified gemstones, Lloyd's-insured logistics." pageUrl="https://alainmetalscorp.com" />
      <HeroSection />
      <PrivateClientIntro />
      <GoldPreview />
      <GemstonesPreview />
      <HowItWorksPreview />
      <TrustPreview />
      <FaqSection faqs={homepageFaqs} />
      <CtaSection />
    </>
  )
}
