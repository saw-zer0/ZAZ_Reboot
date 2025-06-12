import { HeroSection } from "@/components/home/hero-section"
import { PopularDestinations } from "@/components/home/popular-destinations"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"
import { GallerySection } from "@/components/home/gallery-section"
import { CertificationsSection } from "@/components/certifications-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <PopularDestinations />
        <ServicesSection />
        <GallerySection />
        <CertificationsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  )
}
