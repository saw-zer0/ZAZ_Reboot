import { VisaHeroSection } from "@/components/visa/visa-hero-section"
import { VisaRequirementsSection } from "@/components/visa/visa-requirements-section"
import { VisaProcessSection } from "@/components/visa/visa-process-section"
import { VisaTypesSection } from "@/components/visa/visa-types-section"
import { VisaFaqSection } from "@/components/visa/visa-faq-section"

export default function VisaApplicationPage() {
  return (
    <main className="flex-1">
      <VisaHeroSection />
      <VisaTypesSection />
      <VisaRequirementsSection />
      <VisaProcessSection />
      <VisaFaqSection />
    </main>
  )
}
