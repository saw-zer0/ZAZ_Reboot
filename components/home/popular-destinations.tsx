"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { destinations } from "@/data/popular-destinations"
import { InteractiveDestinationCard } from "./interactive-destination-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PopularDestinations() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id || index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <InteractiveDestinationCard destination={destination} />
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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
