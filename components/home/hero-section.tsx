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
                        className="object-cover opacity-80"
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
                    <div className="absolute top-4 left-4 w-8 h-8 bg-accent-yellow rounded-full opacity-80"></div>
                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-accent-pink rounded-full opacity-80"></div>
                    <div className="absolute top-1/3 left-8 w-5 h-5 bg-accent-green rounded-full opacity-80"></div>
                  </div>
                </div>

                {/* Text overlay for full cover */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center max-w-4xl px-8">
                    <div className="space-y-6 backdrop-blur-md bg-white/20 p-8 rounded-2xl border border-white/30">
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          asChild
                          className="bg-brand-primary-600 hover:bg-brand-primary-700 text-white border-0"
                        >
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          asChild
                          className="border-white text-white hover:bg-white hover:text-brand-neutral-900"
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
                {/* Regular layout for first two slides */}
                <div
                  className={`absolute z-10 ${
                    slide.imagePosition === "right"
                      ? "right-[-5%] top-[10%] lg:right-[5%]"
                      : "left-[-5%] top-[15%] lg:left-[5%]"
                  }`}
                >
                  <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] transform rotate-12 bg-gradient-to-br from-brand-primary-500 to-brand-secondary-600 rounded-[3rem] p-5 shadow-2xl">
                    <div className="absolute top-4 left-4 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg z-20 transform -rotate-6">
                      <Image
                        src={slide.images[0] || "/placeholder.svg"}
                        alt={`${slide.title} - Image 1`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>

                    <div className="absolute bottom-4 right-4 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg z-10 transform rotate-6">
                      <Image
                        src={slide.images[1] || "/placeholder.svg"}
                        alt={`${slide.title} - Image 2`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>

                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-yellow rounded-full"></div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent-pink rounded-full"></div>
                    <div className="absolute top-1/2 -left-4 w-5 h-5 bg-accent-green rounded-full"></div>
                  </div>
                </div>

                <div className="container mx-auto px-4 h-full flex items-center relative z-20">
                  <div
                    className={`max-w-xl ${
                      slide.imagePosition === "right" ? "ml-0 mr-auto" : "ml-auto mr-0 text-right"
                    }`}
                  >
                    <div className="space-y-6 backdrop-blur-sm bg-white/30 p-6 rounded-xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-neutral-900 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-brand-neutral-800 max-w-2xl">{slide.subtitle}</p>
                      <div
                        className={`flex flex-col sm:flex-row gap-4 ${
                          slide.imagePosition === "left" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <Button size="lg" asChild className="bg-brand-primary-600 hover:bg-brand-primary-700">
                          <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          asChild
                          className="border-brand-neutral-300 text-brand-neutral-700 hover:bg-brand-neutral-100"
                        >
                          <Link href="/contact">Contact Us</Link>
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

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => slider.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              slider.current?.track.details.rel === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
