import Image from "next/image"
import Link from "next/link"
import { Calendar, CheckCircle, MapPin, Plane, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TourInquiryForm } from "@/components/tour-inquiry-form"

export default function AirTicketingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Air Ticketing Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Air Ticketing</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Seamless domestic and international flight bookings for your convenience
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Our Air Ticketing Services</h2>
            <p className="text-gray-700 mb-6">
              Sworna Travels offers comprehensive air ticketing services for both domestic and international flights. As
              an authorized ticketing agent for all major airlines operating in Nepal and beyond, we provide competitive
              fares and hassle-free booking experiences for our clients.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Plane className="h-10 w-10 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold">Domestic Flights</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We book tickets for all domestic airlines operating in Nepal, connecting major cities and remote
                  destinations across the country.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Flights to Lukla (Everest region)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Flights to Pokhara</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Flights to Bharatpur (Chitwan)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Flights to other destinations in Nepal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Plane className="h-10 w-10 text-teal-600 mr-3 rotate-45" />
                  <h3 className="text-xl font-bold">International Flights</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We offer competitive fares on international flights to and from Nepal, connecting with major
                  destinations worldwide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Flights to India, China, Thailand</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Connections to major European cities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Flights to the Middle East</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                    <span>Connections to the Americas and Australia</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Airlines We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "Buddha Air",
                "Yeti Airlines",
                "Saurya Airlines",
                "Shree Airlines",
                "Nepal Airlines",
                "Qatar Airways",
                "Emirates",
                "Turkish Airlines",
              ].map((airline, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <Plane className={`h-8 w-8 mx-auto mb-2 text-teal-600 ${index > 3 ? "rotate-45" : ""}`} />
                  <p>{airline}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Book With Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center shrink-0 text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Service</h3>
                    <p className="text-gray-700">Dedicated travel consultants to assist with your booking needs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center shrink-0 text-white">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Booking Options</h3>
                    <p className="text-gray-700">Multiple date and time options to suit your travel schedule</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center shrink-0 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Destination Expertise</h3>
                    <p className="text-gray-700">In-depth knowledge of destinations and travel requirements</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center shrink-0 text-white">
                    <Plane size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Competitive Rates</h3>
                    <p className="text-gray-700">Best available fares and special deals from partner airlines</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Travel Insurance</h3>
                <p className="text-gray-700">Comprehensive travel insurance packages for your peace of mind</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Airport Transfers</h3>
                <p className="text-gray-700">Convenient pick-up and drop-off services at airports</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Visa Assistance</h3>
                <p className="text-gray-700">Guidance and support for visa application processes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Group Bookings</h3>
                <p className="text-gray-700">Special rates and arrangements for group travel</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Book Your Flights</h3>
                <p className="text-gray-700 mb-6">
                  Fill out the inquiry form below, and our team will get back to you with the best flight options for
                  your journey.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Lowest fare guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">No hidden charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Quick response time</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="#flight-inquiry">Request Quote</Link>
                </Button>
              </div>

              <div id="flight-inquiry">
                <TourInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
