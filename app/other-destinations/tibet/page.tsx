import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TourGallery } from "@/components/tour-gallery"
import { TourInquiryForm } from "@/components/forms/tour-inquiry-form"
import { Button } from "@/components/ui/button"

export default function TibetToursPage() {
  const tourImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const tibetTours = [
    {
      slug: "lhasa-city-tour",
      name: "Lhasa City Tour",
      duration: "4 days",
      location: "Lhasa",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      slug: "everest-base-camp-tibet",
      name: "Everest Base Camp (Tibet)",
      duration: "8 days",
      location: "Lhasa, Shigatse, EBC",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      slug: "kailash-mansarovar-yatra",
      name: "Kailash Mansarovar Yatra",
      duration: "15 days",
      location: "Lhasa, Shigatse, Mt. Kailash",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Tibet - Roof of the World"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tibet Tours</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Journey to the Roof of the World - experience ancient temples, breathtaking mountains, and rich Tibetan
              culture
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tour Gallery */}
            <TourGallery images={tourImages} alt="Tibet Tours" />

            {/* Overview Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <MapPin size={18} />
                  <span className="font-medium">Location</span>
                </div>
                <p>Tibetan Plateau</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <Clock size={18} />
                  <span className="font-medium">Duration</span>
                </div>
                <p>4-15 days</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <Users size={18} />
                  <span className="font-medium">Group Size</span>
                </div>
                <p>2-16 people</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <CalendarDays size={18} />
                  <span className="font-medium">Best Season</span>
                </div>
                <p>Apr-Oct</p>
              </div>
            </div>

            {/* Tabbed Content */}
            <Tabs defaultValue="about" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About Tibet</TabsTrigger>
                <TabsTrigger value="travel-info">Travel Information</TabsTrigger>
                <TabsTrigger value="packages">Popular Packages</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Tibet, often referred to as the "Roof of the World," is a region in Central Asia and the traditional
                    homeland of the Tibetan people. Located on the Tibetan Plateau, it is one of the highest regions on
                    Earth with an average elevation exceeding 4,500 meters (14,800 ft). The geography consists of vast
                    high-altitude plateaus, towering mountain ranges including Mount Everest, and deep valleys.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Tibetan culture is deeply influenced by Tibetan Buddhism, which shapes every aspect of daily life.
                    Magnificent monasteries, ancient temples, colorful prayer flags, and devout pilgrims are common
                    sights throughout the region. The spiritual center of Tibet is the Jokhang Temple in Lhasa, while
                    the imposing Potala Palace, once the winter residence of the Dalai Lama, stands as an iconic symbol
                    of Tibetan heritage.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A journey to Tibet offers visitors a chance to experience an ancient civilization with unique
                    customs, architecture, art, and religious practices. The breathtaking landscapes, sacred sites, and
                    warm hospitality of the Tibetan people make it a truly unforgettable destination for travelers
                    seeking both spiritual and adventure experiences.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="travel-info" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Permits and Regulations</h3>
                    <p className="text-gray-700 mb-2">
                      All foreign visitors to Tibet require a Tibet Travel Permit in addition to a Chinese visa.
                      Independent travel is not permitted - tourists must be part of an organized tour with a licensed
                      guide. Several other permits may be required depending on the specific areas you plan to visit.
                    </p>
                    <p className="text-gray-700">
                      As part of our service, Sworna Travels handles all necessary permit applications for our clients
                      visiting Tibet.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Altitude Considerations</h3>
                    <p className="text-gray-700 mb-2">
                      Due to the high altitude of the Tibetan Plateau (most areas are above 3,500m), visitors should be
                      aware of altitude sickness. We recommend spending at least 2-3 days in Lhasa for acclimatization
                      before traveling to higher elevations.
                    </p>
                    <p className="text-gray-700">
                      People with heart conditions, severe high blood pressure, or other significant health issues
                      should consult their doctor before planning a trip to Tibet.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Best Time to Visit</h3>
                    <p className="text-gray-700 mb-2">
                      The best time to visit Tibet is from April to October, with the peak season being July and August.
                      These months offer the most comfortable temperatures and clear skies for mountain views.
                    </p>
                    <p className="text-gray-700">
                      Winter (November to March) is cold but less crowded and offers a different perspective of Tibetan
                      life. However, some areas may be inaccessible due to snow.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cultural Sensitivity</h3>
                    <p className="text-gray-700">
                      Visitors should be respectful of Tibetan culture and religious sites. Always walk clockwise around
                      religious monuments, ask permission before taking photographs of locals, and dress modestly when
                      visiting monasteries and temples.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="packages" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Popular Tibet Tour Packages</h3>
                    <div className="space-y-4">
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">Lhasa Cultural Tour (4-5 days)</h4>
                        <p className="text-gray-700 mb-2">
                          Explore the cultural and spiritual heart of Tibet. Visit the Potala Palace, Jokhang Temple,
                          Sera and Drepung Monasteries, and experience the vibrant Barkhor Street market in Lhasa.
                        </p>
                        <p className="text-teal-600 font-medium">From $850 per person</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">Lhasa to Everest Base Camp (7-8 days)</h4>
                        <p className="text-gray-700 mb-2">
                          Journey from Lhasa to the North Face of Mount Everest, stopping at important cultural sites in
                          Gyantse and Shigatse. Experience the breathtaking views of Everest from the Tibetan side Base
                          Camp.
                        </p>
                        <p className="text-teal-600 font-medium">From $1,650 per person</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">Mount Kailash Pilgrimage (15 days)</h4>
                        <p className="text-gray-700 mb-2">
                          Join the spiritual journey to Mount Kailash, sacred to four religions. The package includes a
                          3-day trek around the holy mountain (kora) and a visit to Lake Manasarovar, along with
                          cultural experiences in central Tibet.
                        </p>
                        <p className="text-teal-600 font-medium">From $2,800 per person</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-700 mb-4">
                      All packages include Tibet Travel Permit, accommodation, transportation within Tibet, licensed
                      Tibetan guide, and entry fees. International flights, Chinese visa, and personal expenses are not
                      included.
                    </p>
                    <Button asChild className="bg-teal-600 hover:bg-teal-700">
                      <Link href="#inquiry-form">Request Custom Itinerary</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Popular Places */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6">Must-Visit Places in Tibet</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Potala Palace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Potala Palace</h3>
                    <p className="text-gray-600 text-sm">
                      Former winter residence of the Dalai Lama, this iconic 13-story palace contains over 1,000 rooms
                      and stands as a symbol of Tibet.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mount Kailash"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Mount Kailash</h3>
                    <p className="text-gray-600 text-sm">
                      Sacred to four religions, this distinctive peak is believed to be the center of the world and is a
                      major pilgrimage site.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Jokhang Temple"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Jokhang Temple</h3>
                    <p className="text-gray-600 text-sm">
                      The spiritual heart of Tibet, this 7th-century temple houses important Buddhist relics and is
                      always filled with devout pilgrims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div id="inquiry-form">
                <TourInquiryForm />
              </div>

              <div className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Visit Tibet?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Experience the highest region on Earth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Explore ancient Buddhist monasteries and temples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Witness breathtaking Himalayan landscapes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">View Mount Everest from the north face</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Immerse yourself in the rich Tibetan culture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other Tour Packages */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Our Tibet Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tibetTours.map((tour, index) => (
              <Link
                key={index}
                href={`/other-destinations/tibet/${tour.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{tour.name}</h3>
                  <p className="text-gray-600 mb-2">
                    {tour.duration} | {tour.location}
                  </p>
                  <div className="mt-2 text-teal-600 flex items-center">
                    <span>View Details</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
