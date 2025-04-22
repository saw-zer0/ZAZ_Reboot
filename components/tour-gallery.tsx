"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TourGalleryProps {
  images: string[]
  alt: string
}

export function TourGallery({ images, alt }: TourGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToImage = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={images[activeIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 hover:bg-white text-gray-800 rounded-full h-10 w-10"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/80 hover:bg-white text-gray-800 rounded-full h-10 w-10"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 max-w-full overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "relative h-16 w-24 rounded-md overflow-hidden flex-shrink-0 border-2",
                activeIndex === index ? "border-teal-600" : "border-transparent",
              )}
            >
              <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
