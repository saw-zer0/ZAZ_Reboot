import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Prepare Documents",
    description: "Gather all required documents including passport, photos, and travel details.",
    time: "1-2 days",
  },
  {
    step: "02",
    title: "Choose Application Method",
    description: "Apply online for pre-approval or directly at the airport upon arrival.",
    time: "15 minutes",
  },
  {
    step: "03",
    title: "Submit Application",
    description: "Complete the application form and submit with required documents and fee.",
    time: "30 minutes",
  },
  {
    step: "04",
    title: "Receive Visa",
    description: "Get your visa stamped in passport and start your Nepal adventure.",
    time: "15 minutes",
  },
]

export function VisaProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">Simple Application Process</h2>
          <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
            Get your Nepal tourist visa in 4 easy steps. We guide you through the entire process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-brand-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-brand-neutral-600 text-sm mb-3">{step.description}</p>
                  <div className="text-xs text-brand-primary-600 font-medium">⏱ {step.time}</div>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-brand-primary-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-brand-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <CheckCircle className="h-12 w-12 text-brand-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-neutral-900 mb-2">Need Help with Your Application?</h3>
            <p className="text-brand-neutral-600 mb-6">
              Our visa experts are here to assist you with the entire process. Get personalized guidance and support.
            </p>
            <Button
              size="lg"
              className="bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Get Visa Assistance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
