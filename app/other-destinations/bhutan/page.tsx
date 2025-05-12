import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TourGallery } from "@/components/tour-gallery"
import { TourInquiryForm } from "@/components/forms/tour-inquiry-form"
import { Button } from "@/components/ui/button"

export default function BhutanToursPage() {
  const tourImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const bhutanTours = [
    {
      slug: "bhutan-cultural-tour",
      name: "Bhutan Cultural Tour",
      duration: "7 days",
      location: "Paro, Thimphu, Punakha",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      slug: "bhutan-festival-tour",
      name: "Bhutan Festival Tour",
      duration: "8 days",
      location: "Paro, Thimphu, Bumthang",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      slug: "bhutan-trekking-adventure",
      name: "Bhutan Trekking Adventure",
      duration: "10 days",
      location: "Paro, Thimphu, Phobjikha",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Bhutan - Land of Thunder Dragon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bhutan Tours</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the last Shangri-La, a kingdom of stunning landscapes and vibrant Buddhist culture
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tour Gallery */}
            <TourGallery images={tourImages} alt="Bhutan Tours" />

            {/* Overview Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <MapPin size={18} />
                  <span className="font-medium">Location</span>
                </div>
                <p>Himalayan Kingdom</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <Clock size={18} />
                  <span className="font-medium">Duration</span>
                </div>
                <p>5-15 days</p>
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
                <p>Mar-May, Sep-Nov</p>
              </div>
            </div>

            {/* Tabbed Content */}
            <Tabs defaultValue="about" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About Bhutan</TabsTrigger>
                <TabsTrigger value="travel-info">Travel Information</TabsTrigger>
                <TabsTrigger value="packages">Popular Packages</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Bhutan, the Land of the Thunder Dragon, is a small Himalayan kingdom nestled between India and
                    Tibet. Known for its pristine environment, unique culture, and Gross National Happiness philosophy,
                    Bhutan offers visitors an authentic and transformative travel experience unlike any other
                    destination.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The country is famous for its dramatic landscapes that range from subtropical plains in the south to
                    subalpine Himalayan heights in the north. The country's mountainous terrain is dotted with
                    magnificent dzongs (fortress-monasteries), colorful prayer flags, and remote villages where ancient
                    traditions continue to thrive.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Bhutan's commitment to conservation has made it the world's only carbon-negative country, with over
                    70% of its land under forest cover. The country's rich biodiversity, stunning architecture, vibrant
                    festivals, and warm hospitality make it a truly special destination for conscious travelers seeking
                    authentic cultural experiences.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="travel-info" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Visa Information</h3>
                    <p className="text-gray-700 mb-2">
                      All tourists (except Indian, Bangladeshi, and Maldivian nationals) require a visa to enter Bhutan.
                      Visas are processed through licensed Bhutanese tour operators or their international partners.
                    </p>
                    <p className="text-gray-700">
                      As part of our service, Sworna Travels handles all visa processing for our clients visiting
                      Bhutan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sustainable Tourism Fee</h3>
                    <p className="text-gray-700 mb-2">
                      Bhutan implements a Sustainable Development Fee (SDF) for tourists, which supports the country's
                      free healthcare, education, and conservation efforts. The current SDF is $200 per person per
                      night.
                    </p>
                    <p className="text-gray-700">
                      This fee contributes to Bhutan's commitment to high-value, low-impact tourism that preserves its
                      unique culture and pristine environment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Best Time to Visit</h3>
                    <p className="text-gray-700 mb-2">
                      Spring (March to May) and autumn (September to November) are the best seasons to visit Bhutan.
                      During these months, the weather is pleasant with clear skies, making it ideal for trekking and
                      sightseeing.
                    </p>
                    <p className="text-gray-700">
                      Spring offers beautiful blooming flowers and lush landscapes, while autumn provides clear mountain
                      views and several important festivals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Currency and Payments</h3>
                    <p className="text-gray-700">
                      The Bhutanese currency is the Ngultrum (BTN), which is pegged to the Indian Rupee. Major hotels
                      and high-end shops accept credit cards, but it's advisable to carry cash for smaller
                      establishments and rural areas.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="packages" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Popular Bhutan Tour Packages</h3>
                    <div className="space-y-4">
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">Cultural Tour of Western Bhutan (5-7 days)</h4>
                        <p className="text-gray-700 mb-2">
                          Explore the cultural heartland of Bhutan, including Paro, Thimphu, and Punakha. Visit iconic
                          sites like Tiger's Nest Monastery, Punakha Dzong, and experience traditional Bhutanese life.
                        </p>
                        <p className="text-teal-600 font-medium">From $1,600 per person</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">Bhutan Festival Tour (8-10 days)</h4>
                        <p className="text-gray-700 mb-2">
                          Witness one of Bhutan's colorful religious festivals (Tshechus) featuring masked dances,
                          music, and cultural performances. Combined with cultural sightseeing in major cities.
                        </p>
                        <p className="text-teal-600 font-medium">From $2,200 per person</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold text-lg">Bhutan Trekking Adventure (10-15 days)</h4>
                        <p className="text-gray-700 mb-2">
                          Combine cultural highlights with trekking routes like the Druk Path Trek or Bumthang Cultural
                          Trek. Experience Bhutan's stunning natural beauty and remote mountain villages.
                        </p>
                        <p className="text-teal-600 font-medium">From $3,000 per person</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-700 mb-4">
                      All packages include accommodation, meals, transportation within Bhutan, licensed guide, entry
                      fees, and SDF. International flights and personal expenses are not included.
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
              <h2 className="text-2xl font-bold mb-6">Popular Places to Visit in Bhutan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Paro Taktsang (Tiger's Nest)"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Paro Taktsang (Tiger's Nest)</h3>
                    <p className="text-gray-600 text-sm">
                      The iconic cliffside monastery perched dramatically 900m above the Paro Valley, built around the
                      cave where Guru Rinpoche first meditated.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Punakha Dzong"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Punakha Dzong</h3>
                    <p className="text-gray-600 text-sm">
                      The majestic fortress located at the confluence of two rivers, considered one of the most
                      beautiful dzongs in Bhutan.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Dochula Pass"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Dochula Pass</h3>
                    <p className="text-gray-600 text-sm">
                      Mountain pass with 108 chortens and breathtaking panoramic views of the Himalayan mountain range
                      on clear days.
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
                <h3 className="text-xl font-bold mb-4">Why Visit Bhutan?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Experience the world's last Shangri-La</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Discover pristine natural landscapes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Immerse in vibrant Buddhist culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Witness colorful traditional festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                      <MapPin size={14} className="text-teal-600" />
                    </div>
                    <span className="text-gray-700">Experience the philosophy of Gross National Happiness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other Tour Packages */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Our Bhutan Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bhutanTours.map((tour, index) => (
              <Link
                key={index}
                href={`/other-destinations/bhutan/${tour.slug}`}
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
