'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const slides = [
  "/images/homepage/samrat-khadka-VaeXuio0rn0-unsplash.jpg",
  "/images/homepage/raimond-klavins-KKm1ua7MSf0-unsplash.jpg",
  "/images/homepage/raimond-klavins-zjrc98oQ3PA-unsplash.jpg",
  "/images/homepage/kaushal-subedi-zRWq-7SWVSU-unsplash.jpg",
  "/images/homepage/meera-pankhania-7cENZhgyf7c-unsplash.jpg",
  "/images/homepage/sashi-shrestha-_5-GEPZoza4-unsplash.jpg",
];

export function HeroSection() {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      created() {
        start();
      },
      slideChanged() {
        restart();
      },
    },
    []
  );

  const start = () => {
    stop(); // clear any existing
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 4000);
  };

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  const restart = () => {
    stop();
    start();
  };

  useEffect(() => {
    return () => stop(); // cleanup on unmount
  }, []);

  return (
    <section className="relative w-full h-[600px]">
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((src, i) => (
          <div key={i} className="keen-slider__slide relative h-[600px]">
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/70" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the Beauty of Nepal</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Experience breathtaking landscapes, rich cultures, and unforgettable adventures with Sworna Travels
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/tour-packages">Explore Tour Packages</Link>
          </Button>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
