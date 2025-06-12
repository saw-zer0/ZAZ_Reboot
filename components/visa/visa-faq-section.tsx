import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to get a Nepal tourist visa?",
    answer:
      "Visa on arrival takes 15-30 minutes at the airport. Online pre-approval takes 1-2 business days but speeds up airport processing to just 5-10 minutes.",
  },
  {
    question: "Can I extend my tourist visa in Nepal?",
    answer:
      "Yes, tourist visas can be extended up to a maximum of 150 days per calendar year. Extensions must be done at the Department of Immigration in Kathmandu or Pokhara.",
  },
  {
    question: "What currencies are accepted for visa payment?",
    answer:
      "USD is preferred and widely accepted. Some locations also accept EUR, GBP, and major credit cards. It's recommended to carry exact change in USD.",
  },
  {
    question: "Do I need a visa if I'm just transiting through Nepal?",
    answer:
      "If you're staying in the international transit area and not entering Nepal, no visa is required. However, if you plan to leave the airport, you'll need a tourist visa.",
  },
  {
    question: "Can I get a multiple entry visa?",
    answer:
      "Yes, all tourist visas (15, 30, and 90 days) can be issued as multiple entry visas at no additional cost. This allows you to leave and re-enter Nepal during the validity period.",
  },
  {
    question: "What if my passport expires soon?",
    answer:
      "Your passport must be valid for at least 6 months from your entry date into Nepal. If it expires sooner, you'll need to renew your passport before applying for a visa.",
  },
]

export function VisaFaqSection() {
  return (
    <section className="py-16 bg-brand-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-brand-neutral-600 max-w-2xl mx-auto">
            Get answers to common questions about Nepal tourist visa applications and requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-brand-neutral-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-neutral-900 hover:text-brand-primary-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-neutral-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
