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

  // Normalize the images array
  const normalizedImages = tour.images.map((image) =>
    typeof image === "string"
      ? { src: image, credit: { name: "Unknown", url: "#" } } // Default credit for string images
      : { ...image, credit: { ...image.credit, url: image.credit.url || "#" } }
  );

  return (
    <main className="flex-1">
      <HeroSection
        title={tour.name}
        location={tour.location}
        image={typeof tour.images[1] === "string" ? tour.images[1] : tour.images[1]?.src}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Content - Takes up 2/3 of the space on desktop */}
          <div className="lg:col-span-2">
            <TourGallery images={normalizedImages} alt={tour.name} />
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