'use client';
import { HeroSection } from "@/components/hero-section";
import { TourGallery } from "@/components/tour-gallery";
import { TourInquiryForm } from "@/components/forms/tour-inquiry-form";
import { TourQuickInfo } from "@/components/tour-quick-info";
import { TourTabs } from "@/components/tour-tabs";
import { tourPackages } from "@/data/tour-packages";
import { usePathname } from "next/navigation";
import { TourOtherPackages } from "@/components/tour-other-packages";


export default function TourPackagePage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop() || '';
  const tour = tourPackages.find((tour) => tour.slug === slug);

  if (!tour) return <div>Tour package not found</div>;


  return (
    <main className="flex-1">
      <HeroSection title={tour.name} location={tour.location} image={tour.images[0]} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Content - Takes up 2/3 of the space on desktop */}
          <div className="lg:col-span-2">
            {/* Tour Gallery */}
            <TourGallery images={tour.images} alt={tour.name} />
            <TourQuickInfo
              duration={tour.duration}
              maxGroupSize={tour.maxGroupSize}
              difficulty={tour.difficulty}
              bestSeason={tour.bestSeason}
            />
            <TourTabs about={tour.about} itinerary={tour.itinerary} cost={tour.cost} />
          </div>
          {/* Sidebar - Takes up 1/3 of the space on desktop */}
          <div className="lg:col-span-1">
              <TourInquiryForm />
          </div>
        </div>

        <TourOtherPackages relatedPackages={tour.relatedPackages} />
      </div>
    </main>
  );
}
