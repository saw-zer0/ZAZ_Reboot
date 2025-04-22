import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TourGallery } from "@/components/tour-gallery"
import { TourInquiryForm } from "@/components/tour-inquiry-form"

// This would come from a database in a real application
const tourPackages = [
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    duration: "14 days",
    maxGroupSize: 12,
    difficulty: "Moderate to Hard",
    bestSeason: "March-May & Sept-Nov",
    about:
      "The Everest Base Camp Trek is one of the most popular trekking routes in Nepal, taking you through breathtaking mountain scenery and traditional Sherpa villages. This iconic trek leads you to the base of the world's tallest mountain, Mt. Everest (8,848m), offering incredible views of Himalayan giants including Lhotse, Nuptse, and Ama Dablam. Experience the unique Sherpa culture, visit ancient monasteries, and create memories that will last a lifetime.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu (1,400m)",
        description: "Welcome at the airport and transfer to hotel. Preparation and trek briefing.",
      },
      {
        day: 2,
        title: "Fly to Lukla (2,840m) & trek to Phakding (2,610m)",
        description:
          "Early morning flight to Lukla followed by a short trek to Phakding village along the Dudh Koshi River.",
      },
      {
        day: 3,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Ascend through pine forests to reach the famous Sherpa market town of Namche Bazaar.",
      },
      {
        day: 4,
        title: "Acclimatization day in Namche Bazaar",
        description: "Rest day with optional hike to Everest View Hotel for panoramic mountain views.",
      },
      {
        day: 5,
        title: "Trek to Tengboche (3,860m)",
        description: "Visit the famous Tengboche Monastery with views of Everest, Nuptse, and Ama Dablam.",
      },
      {
        day: 6,
        title: "Trek to Dingboche (4,410m)",
        description: "Ascend through the Imja Valley with beautiful mountain landscapes.",
      },
      {
        day: 7,
        title: "Acclimatization day in Dingboche",
        description: "Rest day with an optional hike to Nangkartshang Peak for acclimatization.",
      },
      {
        day: 8,
        title: "Trek to Lobuche (4,940m)",
        description: "Trek along the lateral moraine of the Khumbu Glacier with views of Pumori and Nuptse.",
      },
      {
        day: 9,
        title: "Trek to Gorak Shep (5,170m) & Everest Base Camp (5,364m)",
        description: "Morning trek to Gorak Shep followed by a visit to Everest Base Camp.",
      },
      {
        day: 10,
        title: "Hike to Kala Patthar (5,545m) & trek to Pheriche (4,280m)",
        description: "Early morning hike to Kala Patthar for sunrise views of Everest, then descend to Pheriche.",
      },
      {
        day: 11,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Descend through rhododendron forests back to Namche Bazaar.",
      },
      { day: 12, title: "Trek to Lukla (2,840m)", description: "Final day of trekking, returning to Lukla." },
      {
        day: 13,
        title: "Fly to Kathmandu",
        description: "Morning flight back to Kathmandu. Free time for shopping and relaxation.",
      },
      {
        day: 14,
        title: "Departure from Kathmandu",
        description: "Transfer to international airport for final departure.",
      },
    ],
    cost: {
      includes: [
        "Airport transfers in Kathmandu",
        "3 nights accommodation in Kathmandu with breakfast",
        "Kathmandu to Lukla round-trip domestic flights",
        "Teahouse accommodation during the trek",
        "Three meals a day during the trek (breakfast, lunch, dinner)",
        "Experienced English-speaking trekking guide",
        "Porters (1 porter for 2 trekkers)",
        "Sagarmatha National Park entry permit",
        "Khumbu Pasang Lhamu Rural Municipality entry fee",
        "Staff insurance, salary, meals, and accommodation",
        "First aid medical kit",
      ],
      excludes: [
        "International airfare to/from Kathmandu",
        "Nepal visa fee",
        "Travel and rescue insurance",
        "Lunch and dinner in Kathmandu",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and porters",
        "Extra costs due to flight cancellations or delays",
        "Additional nights in Kathmandu due to early return from trek",
      ],
      price: "$1,450 per person",
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    relatedPackages: [
      { slug: "annapurna-circuit", name: "Annapurna Circuit Trek" },
      { slug: "langtang-valley", name: "Langtang Valley Trek" },
      { slug: "manaslu-circuit", name: "Manaslu Circuit Trek" },
    ],
  },
  {
    slug: "annapurna-circuit",
    name: "Annapurna Circuit Trek",
    location: "Annapurna Region, Nepal",
    duration: "15-18 days",
    maxGroupSize: 12,
    difficulty: "Moderate to Hard",
    bestSeason: "March-May & Sept-Nov",
    about:
      "The Annapurna Circuit is one of the most diverse and spectacular trekking routes in the world. This trek takes you through a remarkable variety of landscapes and cultures, from lush subtropical forests to arid high-altitude deserts, crossing the challenging Thorong La Pass (5,416m). Along the way, you'll encounter diverse ethnic communities including Gurung, Manang, and Thakali people, each with their own unique traditions and lifestyles.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description: "Welcome at the airport and transfer to hotel. Trek briefing and preparation.",
      },
      {
        day: 2,
        title: "Drive to Chame (2,670m)",
        description: "Scenic drive along the Marsyangdi River valley through picturesque villages.",
      },
      {
        day: 3,
        title: "Trek to Upper Pisang (3,300m)",
        description: "Trek through pine forests with views of Annapurna II and IV.",
      },
      // Additional days would be listed here
    ],
    cost: {
      price: "$1,350 per person",
      includes: [
        "Airport transfers in Kathmandu",
        "All necessary trekking permits",
        "Experienced guide and porters",
        // More inclusions would be listed
      ],
      excludes: [
        "International flights",
        "Nepal visa fee",
        "Travel insurance",
        // More exclusions would be listed
      ],
    },
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    relatedPackages: [
      { slug: "everest-base-camp", name: "Everest Base Camp Trek" },
      { slug: "annapurna-base-camp", name: "Annapurna Base Camp Trek" },
      { slug: "upper-mustang", name: "Upper Mustang Trek" },
    ],
  },
  // Other tour packages would be defined here
]

interface PageProps {
  params: {
    slug: string
  }
}

export default async function TourPackagePage({ params }: PageProps) {
  // Find the tour package based on the slug
  const { slug } = await params; // 👈 await params here
  const tour = tourPackages.find((tour) => tour.slug === slug);

  // If tour not found, this would be replaced with a proper 404 page
  if (!tour) {
    return <div>Tour package not found</div>
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{tour.name}</h1>
            <div className="flex items-center text-white/90">
              <MapPin size={18} className="mr-1" />
              <span>{tour.location}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Content - Takes up 2/3 of the space on desktop */}
          <div className="lg:col-span-2">
            {/* Tour Gallery */}
            <TourGallery images={tour.images} alt={tour.name} />

            {/* Tour Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <Clock size={18} />
                  <span className="font-medium">Duration</span>
                </div>
                <p>{tour.duration}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <Users size={18} />
                  <span className="font-medium">Group Size</span>
                </div>
                <p>Max {tour.maxGroupSize} people</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <MapPin size={18} />
                  <span className="font-medium">Difficulty</span>
                </div>
                <p>{tour.difficulty}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-teal-600 mb-2">
                  <CalendarDays size={18} />
                  <span className="font-medium">Best Season</span>
                </div>
                <p>{tour.bestSeason}</p>
              </div>
            </div>

            {/* Tabbed Content */}
            <Tabs defaultValue="about" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About Tour</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="cost">Cost & Details</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="p-4 bg-white rounded-b-lg">
                <p className="text-gray-700 leading-relaxed">{tour.about}</p>
              </TabsContent>
              <TabsContent value="itinerary" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-bold">
                        Day {day.day}: {day.title}
                      </h4>
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="cost" className="p-4 bg-white rounded-b-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Price</h3>
                    <p className="text-lg text-teal-600 font-medium">{tour.cost.price}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cost Includes</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {tour.cost.includes.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cost Excludes</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {tour.cost.excludes.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Takes up 1/3 of the space on desktop */}
          <div className="lg:col-span-1">
            <TourInquiryForm />
          </div>
        </div>

        {/* Related Tour Packages */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Other Popular Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tour.relatedPackages.map((relatedTour, index) => (
              <Link
                key={index}
                href={`/tour-packages/${relatedTour.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={relatedTour.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{relatedTour.name}</h3>
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
