import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "Australia",
    text: "The Everest Base Camp trek was a life-changing experience. The guides were knowledgeable and the arrangements were perfect.",
  },
  {
    name: "Michael Chen",
    country: "Singapore",
    text: "Our tour to Chitwan National Park was incredible. Spotted rhinos and many birds. Sworna Travels made it so easy for us.",
  },
  {
    name: "Elena Rodriguez",
    country: "Spain",
    text: "The Annapurna Circuit trek was expertly organized. I felt safe and supported throughout. Will definitely book with Sworna again!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
