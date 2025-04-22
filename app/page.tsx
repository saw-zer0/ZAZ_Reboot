import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Mountain, Plane, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[600px]">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Scenic Nepal landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/70" />
          <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the Beauty of Nepal</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Experience breathtaking landscapes, rich cultures, and unforgettable adventures with Sworna Travels
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/tour-packages">Explore Tour Packages</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Everest Base Camp", location: "Solukhumbu", image: "/placeholder.svg?height=600&width=800" },
                { name: "Annapurna Circuit", location: "Annapurna", image: "/placeholder.svg?height=600&width=800" },
                { name: "Chitwan National Park", location: "Chitwan", image: "/placeholder.svg?height=600&width=800" },
              ].map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image
                      src={destination.image || "/placeholder.svg"}
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
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50">
                <Link href="/tour-packages" className="inline-flex items-center gap-2">
                  View All Tour Packages <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4 text-white">
                  <Mountain size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trekking Packages</h3>
                <p className="text-gray-600 mb-4">
                  Explore the majestic mountains of Nepal with our expertly designed trekking packages.
                </p>
                <Button asChild variant="link" className="text-teal-600">
                  <Link href="/tour-packages">Learn More</Link>
                </Button>
              </div>
              <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4 text-white">
                  <Plane size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mountain Flights</h3>
                <p className="text-gray-600 mb-4">
                  Experience the breathtaking Himalayan range from the sky with our mountain flight services.
                </p>
                <Button asChild variant="link" className="text-teal-600">
                  <Link href="/mountain-flight">Learn More</Link>
                </Button>
              </div>
              <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4 text-white">
                  <Plane className="rotate-45" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Air Ticketing</h3>
                <p className="text-gray-600 mb-4">
                  Hassle-free domestic and international air ticketing services for your convenience.
                </p>
                <Button asChild variant="link" className="text-teal-600">
                  <Link href="/air-ticketing">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  country: "Australia",
                  text: "The Everest Base Camp trek was a life-changing experience. The guides were knowledgeable and the arrangements were perfect.",
                },
                {
                  name: "Michael Chen",
                  country: "Singapore",
                  text: "Our tour to Chitwan National Park was incredible. Spotted rhinos and many birds. Sworna Travels made it so easy for us.",
                },
                {
                  name: "Elena Rodriguez",
                  country: "Spain",
                  text: "The Annapurna Circuit trek was expertly organized. I felt safe and supported throughout. Will definitely book with Sworna again!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-1 mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to plan your dream trip to Nepal, Bhutan, or Tibet. Let us make your travel experience
              unforgettable.
            </p>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <Link href="/contact">Plan Your Trip Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
