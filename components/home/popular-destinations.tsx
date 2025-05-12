// components/PopularDestinations.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { destinations } from "@/data/popular-destinations"

export function PopularDestinations() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{destination.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  <span className="text-sm text-gray-600 ml-2">5.0 (120 reviews)</span>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href={`/tour-packages/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add this missing part */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50">
            <Link href="/tour-packages" className="inline-flex items-center gap-2">
              View All Tour Packages <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
