import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const visaTypes = [
  {
    type: "15 Days Tourist Visa",
    price: "USD 30",
    duration: "15 days",
    description: "Perfect for short trips and quick exploration of Nepal's highlights.",
    features: ["Single/Multiple entry", "Extendable", "Most popular choice"],
    color: "bg-brand-primary-50 border-brand-primary-200",
  },
  {
    type: "30 Days Tourist Visa",
    price: "USD 50",
    duration: "30 days",
    description: "Ideal for comprehensive tours including trekking and cultural exploration.",
    features: ["Single/Multiple entry", "Extendable up to 150 days", "Best value"],
    color: "bg-brand-secondary-50 border-brand-secondary-200",
  },
  {
    type: "90 Days Tourist Visa",
    price: "USD 125",
    duration: "90 days",
    description: "Extended stay for long treks, volunteering, or extensive cultural immersion.",
    features: ["Multiple entry", "Maximum initial duration", "For long-term visitors"],
    color: "bg-accent-teal/10 border-accent-teal/30",
  },
]

export function VisaTypesSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">Visa Types & Pricing</h2>
          <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
            Choose the right visa duration for your Nepal adventure. All visas can be obtained on arrival or applied
            online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visaTypes.map((visa, index) => (
            <Card key={index} className={`${visa.color} hover:shadow-lg transition-all duration-300`}>
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-neutral-900 mb-2">{visa.type}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-primary-600 mb-1">{visa.price}</div>
                  <Badge variant="secondary" className="bg-brand-neutral-100 text-xs sm:text-sm">
                    {visa.duration}
                  </Badge>
                </div>

                <p className="text-sm sm:text-base text-brand-neutral-600 text-center mb-4 sm:mb-6">
                  {visa.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {visa.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-primary-600 rounded-full flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-brand-neutral-700">{feature}</span>
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
