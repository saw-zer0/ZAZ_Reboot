import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would come from a database in a real application
const tourCategories = [
  {
    name: "Trekking",
    packages: [
      {
        slug: "everest-base-camp",
        name: "Everest Base Camp Trek",
        duration: "14 days",
        location: "Solukhumbu",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "annapurna-circuit",
        name: "Annapurna Circuit Trek",
        duration: "15 days",
        location: "Annapurna",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "langtang-valley",
        name: "Langtang Valley Trek",
        duration: "7 days",
        location: "Langtang",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "manaslu-circuit",
        name: "Manaslu Circuit Trek",
        duration: "14 days",
        location: "Manaslu",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    name: "Cultural Tours",
    packages: [
      {
        slug: "kathmandu-valley",
        name: "Kathmandu Valley Tour",
        duration: "3 days",
        location: "Kathmandu",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "pokhara-leisure",
        name: "Pokhara Leisure Tour",
        duration: "4 days",
        location: "Pokhara",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "lumbini-pilgrimage",
        name: "Lumbini Pilgrimage Tour",
        duration: "3 days",
        location: "Lumbini",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  {
    name: "Adventure Activities",
    packages: [
      {
        slug: "chitwan-jungle-safari",
        name: "Chitwan Jungle Safari",
        duration: "3 days",
        location: "Chitwan",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "white-water-rafting",
        name: "White Water Rafting",
        duration: "2 days",
        location: "Trishuli River",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        slug: "paragliding-pokhara",
        name: "Paragliding in Pokhara",
        duration: "1 day",
        location: "Pokhara",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
]

export default function TourPackagesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Nepal Tour Packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tour Packages</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the best of Nepal with our carefully crafted tour packages
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {tourCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.packages.map((tourPackage, packageIndex) => (
                <div
                  key={packageIndex}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image
                      src={tourPackage.image || "/placeholder.svg"}
                      alt={tourPackage.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-teal-600 mb-2">
                      <MapPin size={18} />
                      <span className="text-sm">{tourPackage.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{tourPackage.name}</h3>
                    <p className="text-gray-600 mb-3">Duration: {tourPackage.duration}</p>
                    <div className="flex items-center gap-1 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                      <span className="text-sm text-gray-600 ml-2">5.0</span>
                    </div>
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href={`/tour-packages/${tourPackage.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
