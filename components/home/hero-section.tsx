"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

const slides = [
  {
    title: "Discover the Beauty of Nepal",
    subtitle: "Experience breathtaking landscapes, rich cultures, and unforgettable adventures with Sworna Travels",
    buttonText: "Explore Tour Packages",
    buttonLink: "/tour-packages",
    images: [
      "/images/homepage/samrat-khadka-VaeXuio0rn0-unsplash.jpg",
      "/images/homepage/raimond-klavins-KKm1ua7MSf0-unsplash.jpg",
    ],
    imagePosition: "right",
    gradientOverlay: "", // Removed gradient
    darkText: true, // Flag for dark text
  },
  {
    title: "Nepal Visa Application Made Easy",
    subtitle:
      "Get your Nepal tourist visa quickly and hassle-free. We provide complete assistance with visa applications, documentation, and processing",
    buttonText: "Get Visa Assistance",
    buttonLink: "/contact",
    images: [
      "/images/homepage/kaushal-subedi-zRWq-7SWVSU-unsplash.jpg",
      "/images/homepage/meera-pankhania-7cENZhgyf7c-unsplash.jpg",
    ],
    imagePosition: "left",
    gradientOverlay: "", // Removed gradient
    darkText: true, // Flag for dark text
  },
  {
    title: "Himalayan Adventures Await",
    subtitle:
      "From Everest Base Camp to Annapurna Circuit, embark on world-class trekking experiences in the heart of the Himalayas",
    buttonText: "View Trekking Packages",
    buttonLink: "/tour-packages",
    images: [
      "/images/homepage/raimond-klavins-zjrc98oQ3PA-unsplash.jpg",
      "/images/homepage/sashi-shrestha-_5-GEPZoza4-unsplash.jpg",
    ],
    imagePosition: "fullcover",
    gradientOverlay: "from-orange-900/80 via-red-800/60 to-purple-700/40", // Kept gradient for third slide
    darkText: false, // Flag for light text
  },
]

export function HeroSection() {
  const timer = useRef<NodeJS.Timeout | null>(null)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      created() {
        start()
      },
      slideChanged() {
        restart()
      },
    },
    [],
  )

  const start = () => {
    stop()
    timer.current = setInterval(() => {
      slider.current?.next()
    }, 5000)
  }

  const stop = () => {
    if (timer.current) clearInterval(timer.current)
  }

  const restart = () => {
    stop()
    start()
  }

  useEffect(() => {
    return () => stop()
  }, [])

  return (
    <section className="relative w-full h-[600px] bg-gradient-to-br from-brand-neutral-50 to-brand-secondary-50 overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, i) => (
          <div key={i} className="keen-slider__slide relative">
            {/* Full cover layout for third slide */}
            {slide.imagePosition === "fullcover" ? (
              <>
                {/* Large background image covering 78% */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="relative w-[78%] h-full mx-auto bg-gradient-to-br from-brand-primary-500 to-brand-secondary-600 rounded-[2rem] overflow-hidden shadow-2xl">
                    {/* Main background image */}
                    <div className="absolute inset-0">
                      <Image
                        src={slide.images[0] || "/placeholder.svg"}
                        alt={`${slide.title} - Background`}
                        fill
                        className="object-cover opacity-70"
                        priority={i === 0}
                      />
                    </div>

                    {/* Overlay image */}
                    <div className="absolute top-8 right-8 w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg transform rotate-6 z-10">
                      <Image
                        src={slide.images[1] || "/placeholder.svg"}
                        alt={`${slide.title} - Overlay`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-accent-yellow rounded-full opacity-80 z-15"></div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-accent-pink rounded-full opacity-80 z-15"></div>
                    <div className="absolute top-1/3 left-8 w-5 h-5 bg-accent-green rounded-full opacity-80 z-15"></div>
                  </div>
                </div>

                {/* Text overlay for full cover */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center max-w-4xl px-8">
                    <div className="space-y-6 backdrop-blur-xl bg-black/20 border border-white/30 p-8 rounded-3xl shadow-2xl">
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-xl">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          asChild
                          className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white border border-white/40 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          asChild
                          className="border-white/40 bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Split layout for first two slides - 65% images, 50% text */}
                <div className="hidden md:flex container mx-auto h-full items-center relative max-w-[1200px]">
                  {/* Image section - 65% width with better positioned images */}
                  <div
                    className={`w-[65%] h-full flex items-center justify-center relative z-10 ${
                      slide.imagePosition === "right" ? "order-2" : "order-1"
                    }`}
                  >
                    <div className="relative w-full max-w-[600px] h-[90%] transform rotate-12 bg-gradient-to-br from-brand-primary-500 to-brand-secondary-600 rounded-[3rem] p-6 shadow-2xl">
                      {/* First image - positioned for better visibility */}
                      <div className="absolute top-6 left-8 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-lg z-20 transform -rotate-16">
                        <Image
                          src={slide.images[0] || "/placeholder.svg"}
                          alt={`${slide.title} - Image 1`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>

                      {/* Second image - positioned with minimal overlap */}
                      <div className="absolute bottom-6 right-8 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-lg z-15 transform rotate-8">
                        <Image
                          src={slide.images[1] || "/placeholder.svg"}
                          alt={`${slide.title} - Image 2`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>

                      {/* Third smaller accent image for visual interest */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] h-[40%] rounded-xl overflow-hidden shadow-md z-10 rotate-3 opacity-90">
                        <Image
                          src={slide.images[0] || "/placeholder.svg"}
                          alt={`${slide.title} - Accent`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-yellow rounded-full z-25"></div>
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent-pink rounded-full z-25"></div>
                      <div className="absolute top-1/2 -left-4 w-5 h-5 bg-accent-green rounded-full z-25"></div>
                    </div>
                  </div>

                  {/* Text section - 50% width with light background for first two slides */}
                  <div
                    className={`w-[50%] h-full flex items-center px-4 relative z-20 ${
                      slide.imagePosition === "right" ? "order-1 ml-6" : "order-2 mr-6"
                    }`}
                  >
                    <div
                      className={`space-y-4 backdrop-blur-sm bg-white/80 border border-gray-200 p-6 rounded-3xl shadow-xl max-w-lg relative z-20 ${
                        slide.imagePosition === "right" ? "text-left ml-0" : "text-right ml-auto"
                      }`}
                    >
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm md:text-base lg:text-lg text-gray-700">{slide.subtitle}</p>
                      <div
                        className={`flex flex-col sm:flex-row gap-3 ${
                          slide.imagePosition === "right" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <Button
                          size="default"
                          asChild
                          className="bg-brand-primary-600 hover:bg-brand-primary-700 text-white transform hover:scale-105 transition-all duration-300 shadow-md"
                        >
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                        <Button
                          size="default"
                          variant="outline"
                          asChild
                          className="border-brand-primary-300 text-brand-primary-700 hover:bg-brand-primary-50 transform hover:scale-105 transition-all duration-300"
                        >
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile layout - stacked with better image positioning */}
                <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center z-30">
                  {/* Mobile image section - improved layout */}
                  <div className="w-full h-[70%] flex items-center justify-center px-4">
                    <div className="relative w-[340px] h-[380px] transform rotate-12 bg-gradient-to-br from-brand-primary-500 to-brand-secondary-600 rounded-[2rem] p-4 shadow-2xl">
                      {/* First image - better positioned */}
                      <div className="absolute top-4 left-6 w-[200px] h-[180px] rounded-xl overflow-hidden shadow-lg z-20 transform -rotate-6">
                        <Image
                          src={slide.images[0] || "/placeholder.svg"}
                          alt={`${slide.title} - Image 1`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>

                      {/* Second image - less overlap */}
                      <div className="absolute bottom-4 right-6 w-[200px] h-[180px] rounded-xl overflow-hidden shadow-lg z-15 transform rotate-6">
                        <Image
                          src={slide.images[1] || "/placeholder.svg"}
                          alt={`${slide.title} - Image 2`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>

                      {/* Small accent image */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[100px] rounded-lg overflow-hidden shadow-md z-10 rotate-2 opacity-85">
                        <Image
                          src={slide.images[0] || "/placeholder.svg"}
                          alt={`${slide.title} - Accent`}
                          fill
                          className="object-cover"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile text section - reduced to 30% height */}
                  <div className="w-full h-[30%] flex items-center justify-center px-4">
                    <div className="text-center space-y-2 backdrop-blur-sm bg-white/80 border border-gray-200 p-3 rounded-2xl shadow-xl max-w-sm">
                      <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{slide.title}</h1>
                      <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">{slide.subtitle}</p>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          asChild
                          className="bg-brand-primary-600 hover:bg-brand-primary-700 text-white transform hover:scale-105 transition-all duration-300 shadow-md"
                        >
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation dots with enhanced glassmorphism */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/30 shadow-lg">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => slider.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              slider.current?.track.details.rel === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

// Default export for compatibility
export default HeroSection
