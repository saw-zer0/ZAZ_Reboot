import Image from "next/image"
import Link from "next/link"
import { Award, Clock, MapPin, Mountain, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Sworna Travels team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Sworna Travels</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Your Trusted Travel Partner in Nepal</h2>
            <p className="text-lg text-gray-700 mb-8">
              Founded in 2005, Sworna Travels has established itself as one of the leading travel agencies in Nepal,
              specializing in trekking adventures, cultural tours, mountain flights, and international travel services.
              Our mission is to provide exceptional travel experiences that showcase the natural beauty, cultural
              heritage, and warm hospitality of Nepal and its neighboring Himalayan regions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
                <p className="text-gray-600">Over a decade of expertise in crafting memorable travel experiences.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">10,000+ Happy Clients</h3>
                <p className="text-gray-600">Thousands of satisfied travelers from around the world.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Mountain size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">100+ Destinations</h3>
                <p className="text-gray-600">
                  Extensive network covering all major destinations in Nepal, Bhutan, and Tibet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Founders of Sworna Travels"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sworna Travels was born from a passion for the Himalayas and a desire to share the wonders of Nepal with
                the world. Our founders, experienced trekking guides themselves, started with a small office in Thamel,
                Kathmandu, and a vision to provide authentic and sustainable travel experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have grown into a full-service travel company with a team of expert guides, travel
                consultants, and support staff dedicated to creating unforgettable journeys. We take pride in our deep
                local knowledge, personalized service, and commitment to responsible tourism practices.
              </p>
              <p className="text-gray-700">
                Today, we continue to explore new destinations, develop innovative itineraries, and enhance our services
                to meet the evolving needs of global travelers while staying true to our core values of authenticity,
                sustainability, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Sharma", position: "Founder & CEO", image: "/placeholder.svg?height=500&width=500" },
              { name: "Sunita Gurung", position: "Operations Manager", image: "/placeholder.svg?height=500&width=500" },
              { name: "Karma Sherpa", position: "Head Trekking Guide", image: "/placeholder.svg?height=500&width=500" },
              { name: "Pema Lama", position: "Customer Relations", image: "/placeholder.svg?height=500&width=500" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality & Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing the highest quality services and exceeding our clients' expectations in
                every aspect of their journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Our deep local knowledge and connections ensure authentic experiences and insider access to the hidden
                gems of Nepal and beyond.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Responsible Tourism</h3>
              <p className="text-gray-600">
                We are dedicated to sustainable practices that respect local communities, preserve cultural heritage,
                and protect the natural environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you discover the wonders of Nepal, Bhutan, and Tibet. Our team is ready to create the perfect
            travel experience for you.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
            <Link href="/tour-packages">Explore Our Tour Packages</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
