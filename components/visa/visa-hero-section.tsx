"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Clock, CheckCircle, ArrowRight } from "lucide-react"

const visaSlides = [
  {
    title: "Nepal Tourist Visa",
    subtitle: "Your Gateway to the Himalayas",
    description:
      "Get your Nepal tourist visa quickly and easily. We provide complete assistance for visa applications with expert guidance.",
    features: ["15, 30, 90 days validity", "Multiple entry options", "Online application support"],
    image1: "/images/homepage/samrat-khadka-VaeXuio0rn0-unsplash.jpg",
    image2: "/images/homepage/kaushal-subedi-zRWq-7SWVSU-unsplash.jpg",
    bgGradient: "from-blue-600 via-blue-700 to-purple-800",
  },
  {
    title: "Visa on Arrival",
    subtitle: "Convenient Airport Processing",
    description:
      "Get your visa directly at Tribhuvan International Airport. Fast processing with all necessary documentation support.",
    features: ["Available 24/7", "USD payment accepted", "Quick processing"],
    image1: "/images/tour-package/everest-basecamp/ananya-bilimale-xdvM7wDXZy4-unsplash.jpg",
    image2: "/images/homepage/meera-pankhania-7cENZhgyf7c-unsplash.jpg",
    bgGradient: "from-emerald-600 via-teal-700 to-cyan-800",
  },
]

export function VisaHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visaSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = visaSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient - Fixed */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-all duration-1000 ease-in-out`}
        style={{
          background:
            currentSlide === 0
              ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #7c3aed 100%)"
              : "linear-gradient(135deg, #059669 0%, #0f766e 50%, #0891b2 100%)",
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/15 rounded-full blur-md" />
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-white/8 rounded-full blur-lg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-white/80 justify-center lg:justify-start animate-slide-in-left">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">{slide.subtitle}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-right">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
                {slide.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 animate-fade-in-up delay-300">
              {slide.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up delay-400">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90 hover:text-blue-800 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Check Requirements
              </Button>
            </div>
          </div>

          {/* Images Side */}
          <div className="relative animate-slide-in-right delay-200">
            {/* Slanted Capsule Container */}
            <div className="relative transform rotate-12 scale-110 animate-float">
              <div className="relative w-full h-96 bg-white/10 backdrop-blur-sm rounded-[3rem] p-6 shadow-2xl border border-white/20">
                {/* First Image */}
                <div className="absolute top-4 left-4 w-48 h-48 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={slide.image1 || "/placeholder.svg"}
                    alt="Nepal visa documentation"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Second Image */}
                <div className="absolute bottom-4 right-4 w-52 h-52 rounded-2xl overflow-hidden shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={slide.image2 || "/placeholder.svg"}
                    alt="Nepal tourism"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-400/30 rounded-full blur-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute top-8 right-8 w-8 h-8 bg-white/40 rounded-full animate-bounce" />
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/30 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {visaSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/40 hover:bg-white/60 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
