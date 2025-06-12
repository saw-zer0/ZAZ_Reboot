"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Award, Users, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const employees = [
  {
    name: "Rajesh Sharma",
    position: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    experience: "20+ Years",
    specialization: "High Altitude Trekking",
    languages: ["English", "Hindi", "Nepali"],
    achievements: ["Everest Base Camp 50+ times", "Licensed Trekking Guide", "Tourism Excellence Award 2020"],
    description:
      "Rajesh founded Sworna Travels with a vision to showcase Nepal's natural beauty to the world. An experienced mountaineer and guide.",
  },
  {
    name: "Sunita Gurung",
    position: "Operations Manager",
    image: "/placeholder.svg?height=400&width=400",
    experience: "15+ Years",
    specialization: "Cultural Tours & Logistics",
    languages: ["English", "Nepali", "Gurung"],
    achievements: ["Operations Excellence Award", "Cultural Heritage Specialist", "Customer Service Champion"],
    description:
      "Sunita ensures seamless operations and exceptional customer experiences. Expert in cultural tours and heritage sites.",
  },
  {
    name: "Karma Sherpa",
    position: "Head Trekking Guide",
    image: "/placeholder.svg?height=400&width=400",
    experience: "18+ Years",
    specialization: "Himalayan Expeditions",
    languages: ["English", "Nepali", "Sherpa", "Tibetan"],
    achievements: ["Everest Summit 8 times", "Rescue Operations Expert", "Mountain Safety Instructor"],
    description:
      "Karma is our most experienced guide with multiple Everest summits. Specializes in high-altitude rescue and safety.",
  },
  {
    name: "Pema Lama",
    position: "Customer Relations Manager",
    image: "/placeholder.svg?height=400&width=400",
    experience: "12+ Years",
    specialization: "Customer Service & Support",
    languages: ["English", "Nepali", "Hindi", "German"],
    achievements: [
      "Customer Satisfaction Award",
      "Multilingual Communication Expert",
      "Travel Consultant Certification",
    ],
    description:
      "Pema ensures every client receives personalized attention and support throughout their journey with us.",
  },
  {
    name: "Tenzin Norbu",
    position: "Senior Trekking Guide",
    image: "/placeholder.svg?height=400&width=400",
    experience: "14+ Years",
    specialization: "Annapurna & Langtang Regions",
    languages: ["English", "Nepali", "Tibetan"],
    achievements: ["Regional Trekking Expert", "First Aid Certified", "Eco-Tourism Advocate"],
    description:
      "Tenzin specializes in the Annapurna and Langtang regions, known for his extensive knowledge of local culture and ecology.",
  },
  {
    name: "Maya Tamang",
    position: "Cultural Tour Specialist",
    image: "/placeholder.svg?height=400&width=400",
    experience: "10+ Years",
    specialization: "Heritage Sites & Cultural Tours",
    languages: ["English", "Nepali", "Tamang", "Newari"],
    achievements: ["Cultural Heritage Guide License", "UNESCO Site Specialist", "Traditional Arts Promoter"],
    description:
      "Maya is passionate about Nepal's rich cultural heritage and provides in-depth insights into traditional customs and practices.",
  },
]

export function EmployeeProfilesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
            Our experienced professionals are passionate about Nepal and dedicated to creating unforgettable experiences
            for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={employee.image || "/placeholder.svg"}
                  alt={employee.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{employee.name}</h3>
                  <p className="text-sm opacity-90">{employee.position}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-brand-neutral-600">
                    <Calendar className="h-4 w-4" />
                    <span>{employee.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-brand-neutral-600">
                    <MapPin className="h-4 w-4" />
                    <span>{employee.specialization}</span>
                  </div>
                </div>

                <p className="text-sm text-brand-neutral-600 mb-4 leading-relaxed">{employee.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-brand-neutral-900 mb-2 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {employee.languages.map((lang, langIndex) => (
                      <Badge key={langIndex} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-brand-neutral-900 mb-2 flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <div className="space-y-1">
                    {employee.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2 text-xs text-brand-neutral-600">
                        <div className="w-1 h-1 bg-brand-primary-600 rounded-full" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
