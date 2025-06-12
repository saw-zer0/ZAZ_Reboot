"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedMountain, AnimatedPlane, AnimatedTicket } from "@/components/animated-icons"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: <AnimatedMountain />,
    title: "Trekking Packages",
    description: "Explore the majestic mountains of Nepal with our expertly designed trekking packages.",
    link: "/tour-packages",
  },
  {
    icon: <AnimatedPlane />,
    title: "Mountain Flights",
    description: "Experience the breathtaking Himalayan range from the sky with our mountain flight services.",
    link: "/mountain-flight",
  },
  {
    icon: <AnimatedTicket />,
    title: "Air Ticketing",
    description: "Hassle-free domestic and international air ticketing services for your convenience.",
    link: "/air-ticketing",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group text-center p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 delay-${i * 100} transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
              <Button
                asChild
                variant="link"
                className="text-teal-600 text-sm sm:text-base group-hover:scale-105 transition-transform duration-300"
              >
                <Link href={service.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
