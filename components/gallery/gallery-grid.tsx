"use client"
import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    src: "/images/homepage/samrat-khadka-VaeXuio0rn0-unsplash.jpg",
    alt: "Mount Everest peak view",
    height: "h-80",
    credit: "Samrat Khadka",
  },
  {
    id: 2,
    src: "/images/homepage/raimond-klavins-KKm1ua7MSf0-unsplash.jpg",
    alt: "Himalayan landscape",
    height: "h-64",
    credit: "Raimond Klavins",
  },
  {
    id: 3,
    src: "/images/tour-package/everest-basecamp/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg",
    alt: "Everest Base Camp trek",
    height: "h-96",
    credit: "Ananya Bilimale",
  },
  {
    id: 4,
    src: "/images/tour-package/annapurna-circuit/giuseppe-mondi-xyE1p1rG04U-unsplash.jpg",
    alt: "Annapurna Circuit trail",
    height: "h-72",
    credit: "Giuseppe Mondi",
  },
  {
    id: 5,
    src: "/images/homepage/kaushal-subedi-zRWq-7SWVSU-unsplash.jpg",
    alt: "Traditional Nepali architecture",
    height: "h-80",
    credit: "Kaushal Subedi",
  },
  {
    id: 6,
    src: "/images/tour-package/langtang-valley/jayant-chaudhary-5whVEe_PZz0-unsplash.jpg",
    alt: "Langtang Valley scenery",
    height: "h-64",
    credit: "Jayant Chaudhary",
  },
  {
    id: 7,
    src: "/images/homepage/meera-pankhania-7cENZhgyf7c-unsplash.jpg",
    alt: "Prayer flags in mountains",
    height: "h-56",
    credit: "Meera Pankhania",
  },
  {
    id: 8,
    src: "/images/tour-package/everest-basecamp/mari-partyka-PLzgu9O7xag-unsplash.jpg",
    alt: "Mountain reflection in lake",
    height: "h-88",
    credit: "Mari Partyka",
  },
  {
    id: 9,
    src: "/images/tour-package/chitwan/ashok-sharma-C84moeHE2lA-unsplash.jpg",
    alt: "Wildlife in Chitwan",
    height: "h-72",
    credit: "Ashok Sharma",
  },
  {
    id: 10,
    src: "/images/homepage/raimond-klavins-zjrc98oQ3PA-unsplash.jpg",
    alt: "Sunrise over Himalayas",
    height: "h-80",
    credit: "Raimond Klavins",
  },
  {
    id: 11,
    src: "/images/tour-package/annapurna-circuit/le-tan-qziIV0_vCGQ-unsplash.jpg",
    alt: "Annapurna mountain range",
    height: "h-72",
    credit: "Le Tan",
  },
  {
    id: 12,
    src: "/images/homepage/sashi-shrestha-_5-GEPZoza4-unsplash.jpg",
    alt: "Traditional village",
    height: "h-96",
    credit: "Sashi Shrestha",
  },
  {
    id: 13,
    src: "/images/tour-package/everest-basecamp/michael-clarke-GVpAB2mHwkw-unsplash.jpg",
    alt: "Everest expedition",
    height: "h-64",
    credit: "Michael Clarke",
  },
  {
    id: 14,
    src: "/images/tour-package/langtang-valley/kabi-acharya--fq2UH77F6c-unsplash.jpg",
    alt: "Langtang peaks",
    height: "h-80",
    credit: "Kabi Acharya",
  },
  {
    id: 15,
    src: "/images/tour-package/annapurna-circuit/mo-jiaming-eLfQNcL7HHo-unsplash.jpg",
    alt: "Mountain trekking path",
    height: "h-68",
    credit: "Mo Jiaming",
  },
  {
    id: 16,
    src: "/images/tour-package/everest-basecamp/sebastian-pena-lambarri-Wj9ELwGXa6c-unsplash.jpg",
    alt: "High altitude landscape",
    height: "h-84",
    credit: "Sebastian Pena Lambarri",
  },
  {
    id: 17,
    src: "/images/tour-package/langtang-valley/kim-cordenete-WkMM-5ogQDs-unsplash.jpg",
    alt: "Valley view from peak",
    height: "h-76",
    credit: "Kim Cordenete",
  },
  {
    id: 18,
    src: "/images/tour-package/annapurna-circuit/neha-maheen-mahfin-pd4fqat25AU-unsplash.jpg",
    alt: "Annapurna base camp",
    height: "h-72",
    credit: "Neha Maheen Mahfin",
  },
  {
    id: 19,
    src: "/images/tour-package/everest-basecamp/sylwia-bartyzel-utVHtWF73kg-unsplash.jpg",
    alt: "Sherpa culture",
    height: "h-80",
    credit: "Sylwia Bartyzel",
  },
  {
    id: 20,
    src: "/images/tour-package/langtang-valley/mary-anne-h-vq2Xg4OKlWc-unsplash.jpg",
    alt: "Alpine meadows",
    height: "h-88",
    credit: "Mary Anne H",
  },
  {
    id: 21,
    src: "/images/tour-package/annapurna-circuit/swarup-sapkota-tbRmaPzRdwA-unsplash.jpg",
    alt: "Mountain monastery",
    height: "h-64",
    credit: "Swarup Sapkota",
  },
  {
    id: 22,
    src: "/images/tour-package/langtang-valley/jayant-chaudhary-FVawr_3B1ww-unsplash.jpg",
    alt: "Rhododendron forest",
    height: "h-72",
    credit: "Jayant Chaudhary",
  },
]

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(galleryImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <>
      {/* Masonry Grid with Spacing */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-4 space-y-2 sm:space-y-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden break-inside-avoid mb-2 sm:mb-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(image.id)}
          >
            <div className={`relative ${image.height} w-full`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs sm:text-sm font-medium">{image.alt}</p>
                <p className="text-xs opacity-80">Photo by {image.credit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImageData.src || "/placeholder.svg"}
              alt={selectedImageData.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-lg font-semibold mb-1">{selectedImageData.alt}</h3>
              <p className="text-sm opacity-80">Photo by {selectedImageData.credit}</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage("prev")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage("next")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  )
}
