'use client';
import { useEffect, useState } from "react";
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

  // State for dynamic price
  const [price, setPrice] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!tour) return;
    fetch("http://localhost:8000/get_package_prices.php", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.prices)) {
          const found = data.prices.find((row: { id: number; price: string }) => row.id == tour.id);
          console.log(tour.id, "00000000000000000000");
          setPrice(found?.price || "-");
        } else {
          setPrice("-");
        }
      })
      .catch(() => setPrice("-"));
  }, [tour]);

  if (!tour) return <div>Tour package not found</div>;

  // Normalize the images array
  const normalizedImages = tour.images.map((image) =>
    typeof image === "string"
      ? { src: image, credit: { name: "Unknown", url: "#" } }
      : { ...image, credit: { ...image.credit, url: image.credit.url || "#" } }
  );

  // Merge fetched price into cost object
  const costWithDynamicPrice = { ...tour.cost, price: price ?? "-" };

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
            <TourTabs about={tour.about} itinerary={tour.itinerary} cost={costWithDynamicPrice} />
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