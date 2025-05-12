import { MapPin } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  location: string;
  image: string;
}

export const HeroSection = ({ title, location, image }: HeroSectionProps) => (
  <section className="relative w-full h-[300px]">
    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        <div className="flex items-center text-white/90">
          <MapPin size={18} className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  </section>
);