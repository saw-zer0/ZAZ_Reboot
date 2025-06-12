"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Star, CheckCircle, Globe, Mountain } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const certifications = [
  {
    icon: Award,
    title: "Nepal Tourism Board",
    subtitle: "Licensed Travel Agency",
    description: "Official license from Nepal Tourism Board for operating tourism services",
    year: "2005",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "TAAN Membership",
    subtitle: "Trekking Agencies Association",
    description: "Certified member of Trekking Agencies Association of Nepal",
    year: "2006",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Mountain,
    title: "NMA Certification",
    subtitle: "Nepal Mountaineering Association",
    description: "Authorized for mountaineering and high-altitude trekking operations",
    year: "2007",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "IATA Accreditation",
    subtitle: "International Air Transport",
    description: "IATA accredited for international air ticketing services",
    year: "2010",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Star,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description: "International standard for quality management systems",
    year: "2018",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: CheckCircle,
    title: "PATA Member",
    subtitle: "Pacific Asia Travel Association",
    description: "Member of Pacific Asia Travel Association for sustainable tourism",
    year: "2015",
    color: "from-teal-500 to-teal-600",
  },
]

interface CertificationsSectionProps {
  showTitle?: boolean
  className?: string
}

export function CertificationsSection({ showTitle = true, className = "" }: CertificationsSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className={`py-16 bg-gradient-to-b from-slate-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">
              Our Certifications & Memberships
            </h2>
            <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
              Trusted by authorities and recognized by international organizations for our commitment to quality and
              safety.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <cert.icon className="h-8 w-8 text-white" />
                </div>

                <div className="mb-3">
                  <h3 className="text-lg font-bold text-brand-neutral-900 mb-1">{cert.title}</h3>
                  <p className="text-sm font-medium text-brand-primary-600">{cert.subtitle}</p>
                </div>

                <p className="text-sm text-brand-neutral-600 mb-4 leading-relaxed">{cert.description}</p>

                <Badge variant="secondary" className="bg-brand-neutral-100 text-brand-neutral-700">
                  Since {cert.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
