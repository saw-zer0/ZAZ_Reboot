// components/tour-other-packages.tsx
import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface RelatedPackage {
  name: string;
  slug: string;
  image?: string;
}

interface OtherPackagesProps {
  relatedPackages: RelatedPackage[]
}

export const TourOtherPackages = ({ relatedPackages }: OtherPackagesProps) => {
  if (!relatedPackages || relatedPackages.length === 0) {
    return <p className="text-gray-500">No related packages available.</p>;
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  })

  return (
    <section className="mt-12 relative">
      <h2 className="text-2xl font-bold mb-6">Other Popular Packages</h2>

      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-xl rounded-full p-2 shadow hover:bg-gray-100"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-xl rounded-full p-2 shadow hover:bg-gray-100"
      >
        →
      </button>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {relatedPackages.map((relatedTour, index) => (
          <Link
            key={relatedTour.slug}
            href={`/tour-packages/${relatedTour.slug}`}
            className="keen-slider__slide bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={relatedTour.image || "/placeholder.svg?height=400&width=600"}
                alt={relatedTour.name || "Related Tour"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{relatedTour.name}</h3>
              <div className="mt-2 text-teal-600 flex items-center">
                <span>View Details</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
