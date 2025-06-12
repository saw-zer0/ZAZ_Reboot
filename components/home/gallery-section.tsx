import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera, ArrowRight } from "lucide-react"

const featuredImages = [
  {
    src: "/images/homepage/samrat-khadka-VaeXuio0rn0-unsplash.jpg",
    alt: "Mount Everest peak view",
  },
  {
    src: "/images/tour-package/everest-basecamp/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg",
    alt: "Everest Base Camp trek",
  },
  {
    src: "/images/homepage/raimond-klavins-KKm1ua7MSf0-unsplash.jpg",
    alt: "Himalayan landscape",
  },
  {
    src: "/images/tour-package/langtang-valley/jayant-chaudhary-5whVEe_PZz0-unsplash.jpg",
    alt: "Langtang Valley scenery",
  },
]

export function GallerySection() {
  return (
    <section className="py-16 bg-brand-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="h-6 w-6 text-brand-primary-600" />
            <span className="text-brand-primary-600 font-medium">Our Adventures</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">Captured Moments</h2>
          <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
            Explore our gallery of breathtaking moments from Nepal's most spectacular destinations. Every image tells a
            story of adventure, culture, and natural beauty.
          </p>
        </div>

        {/* Featured Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {featuredImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/gallery">
            <Button
              size="lg"
              className="bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
