import { Card, CardContent } from "@/components/ui/card"
import { FileText, CreditCard, Camera, Plane } from "lucide-react"

const requirements = [
  {
    icon: FileText,
    title: "Valid Passport",
    description: "Passport with at least 6 months validity from entry date",
    details: ["Original passport", "At least 2 blank pages", "Clear photo page"],
  },
  {
    icon: Camera,
    title: "Passport Photos",
    description: "Recent passport-sized photographs",
    details: ["2 photos (3.5cm x 4.5cm)", "White background", "Taken within 6 months"],
  },
  {
    icon: CreditCard,
    title: "Visa Fee Payment",
    description: "Payment for visa processing",
    details: ["USD cash preferred", "Credit cards accepted", "Exact amount recommended"],
  },
  {
    icon: Plane,
    title: "Travel Documents",
    description: "Proof of travel arrangements",
    details: ["Return flight ticket", "Hotel bookings", "Travel itinerary"],
  },
]

export function VisaRequirementsSection() {
  return (
    <section className="py-16 bg-brand-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">Visa Requirements</h2>
          <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
            Ensure you have all necessary documents for a smooth visa application process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <req.icon className="h-8 w-8 text-brand-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-neutral-900 mb-2">{req.title}</h3>
                <p className="text-brand-neutral-600 mb-4 text-sm">{req.description}</p>
                <div className="space-y-2">
                  {req.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 text-xs text-brand-neutral-500">
                      <div className="w-1 h-1 bg-brand-primary-400 rounded-full" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
