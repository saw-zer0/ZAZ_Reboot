"use client"
import { useState, useEffect } from "react"
import type React from "react"

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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Swipe left - next slide
      setCurrentSlide((prev) => (prev + 1) % visaSlides.length)
    } else if (isRightSwipe) {
      // Swipe right - previous slide
      setCurrentSlide((prev) => (prev - 1 + visaSlides.length) % visaSlides.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visaSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = visaSlides[currentSlide]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
                className="bg-white hover:bg-white/90 hover:text-blue-800 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/90 text-black/90 hover:bg-white/30 hover:border-white/70 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {visaSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide
                ? "bg-white border-white scale-125 shadow-2xl"
                : "bg-white/20 border-white/60 hover:bg-white/40 hover:border-white/80 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && <div className="absolute inset-1 bg-blue-600 rounded-full animate-pulse" />}
          </button>
        ))}
      </div>

      {/* Navigation Arrows for Desktop */}
      <div className="hidden md:block">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + visaSlides.length) % visaSlides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % visaSlides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Touch Gesture Indicator for Mobile */}
      <div className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex items-center gap-2 z-20">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span>Swipe to navigate</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </section>
  )
}
