import { HeroSection } from "@/components/home/hero-section";
import { PopularDestinations } from "@/components/home/popular-destinations";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <PopularDestinations />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  );
}
