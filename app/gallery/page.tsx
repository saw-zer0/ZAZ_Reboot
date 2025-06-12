import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Our Adventures - Gallery | Sworna Travels",
  description:
    "Explore our collection of breathtaking moments from Nepal's most beautiful destinations. See the adventures that await you with Sworna Travels.",
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-neutral-50 to-brand-secondary-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-neutral-900 mb-6">Our Adventures</h1>
            <p className="text-lg md:text-xl text-brand-neutral-700 max-w-3xl mx-auto mb-8">
              Journey through Nepal's most spectacular destinations captured through our lens. From the towering peaks
              of the Himalayas to the serene valleys and vibrant cultures, discover the beauty that awaits your next
              adventure.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <GalleryGrid />
          </div>
        </section>
      </main>
    </div>
  )
}
