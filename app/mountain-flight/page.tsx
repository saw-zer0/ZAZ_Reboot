import Image from "next/image"
import Link from "next/link"
import { CheckCircle, FileText, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TourInquiryForm } from "@/components/tour-inquiry-form"

export default function MountainFlightPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Mountain Flight over Everest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mountain Flight</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Experience the majestic Himalayas from the sky with our scenic mountain flights
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mountain Flight aerial view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Everest from the air"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">About Mountain Flights</h2>
                <p className="text-gray-700 mb-4">
                  For those who are restricted by time or other considerations from going trekking, we offer the closest
                  possible aerial views of the world's highest peaks, including Mt. Everest. The mountain flight is a
                  spectacular journey that takes you close to the highest mountain peaks in the world.
                </p>
                <p className="text-gray-700 mb-4">
                  The flight lasts for about an hour and guarantees passengers views of the major peaks, including Mt.
                  Everest (8,848m), Lhotse (8,516m), Makalu (8,463m), and Kanchenjunga (8,586m). Each passenger will be
                  assigned a window seat so views are not compromised, and the cabin crew will help you identify
                  different peaks.
                </p>
                <p className="text-gray-700">
                  The flights operate early in the morning, as the weather tends to be clearer then. The flights depart
                  from Kathmandu's Tribhuvan International Airport and head east toward the Himalayan range.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Flight Details</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Schedule</h3>
                      <p className="text-gray-700">Daily from 6:00 AM to 9:00 AM</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <p className="text-gray-700">Approximately 50-60 minutes</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Aircraft Type</h3>
                      <p className="text-gray-700">Beechcraft 1900D or similar</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Airlines</h3>
                      <p className="text-gray-700">Buddha Air, Yeti Airlines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Mountains You'll See</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Mt. Everest", height: "8,848m", description: "The highest mountain in the world" },
                    { name: "Lhotse", height: "8,516m", description: "Fourth highest mountain in the world" },
                    { name: "Makalu", height: "8,485m", description: "Fifth highest mountain in the world" },
                    { name: "Cho Oyu", height: "8,201m", description: "Sixth highest mountain in the world" },
                    { name: "Nuptse", height: "7,861m", description: "A mountain in the Khumbu region" },
                    { name: "Ama Dablam", height: "6,812m", description: "Known as the 'Matterhorn of the Himalayas'" },
                  ].map((mountain, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-semibold">
                          {mountain.name} ({mountain.height})
                        </h3>
                        <p className="text-gray-600">{mountain.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <FileText className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                    <p className="text-gray-700">Guaranteed window seat for all passengers</p>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                    <p className="text-gray-700">Pilot's commentary identifying mountains and peaks</p>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                    <p className="text-gray-700">Everest sighting certificate</p>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                    <p className="text-gray-700">Complimentary transfers from your hotel to the airport and back</p>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="h-5 w-5 text-teal-600 mt-1 shrink-0" />
                    <p className="text-gray-700">Best opportunities for photography with clear morning views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="h-10 w-10 text-teal-600" />
                  <div>
                    <h3 className="text-xl font-bold">Mountain Flight</h3>
                    <p className="text-gray-600">From $220 per person</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 mb-4">
                  <Link href="#inquiry-form">Book Now</Link>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Daily departures, subject to weather conditions</p>
                </div>
              </div>

              <div id="inquiry-form">
                <TourInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
