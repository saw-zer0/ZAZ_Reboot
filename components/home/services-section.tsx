import { Plane, Mountain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Mountain size={32} />,
    title: "Trekking Packages",
    description: "Explore the majestic mountains of Nepal with our expertly designed trekking packages.",
    link: "/tour-packages"
  },
  {
    icon: <Plane size={32} />,
    title: "Mountain Flights",
    description: "Experience the breathtaking Himalayan range from the sky with our mountain flight services.",
    link: "/mountain-flight"
  },
  {
    icon: <Plane className="rotate-45" size={32} />,
    title: "Air Ticketing",
    description: "Hassle-free domestic and international air ticketing services for your convenience.",
    link: "/air-ticketing"
  },
];

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button asChild variant="link" className="text-teal-600">
                <Link href={service.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
