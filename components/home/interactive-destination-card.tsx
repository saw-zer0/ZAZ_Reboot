"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star } from "lucide-react"

interface Destination {
  id?: string
  name: string
  location?: string
  image: string
  description?: string
  duration?: string
  groupSize?: string
  difficulty?: string
  rating?: number
  price?: string
  highlights?: string[]
}

interface InteractiveDestinationCardProps {
  destination: Destination
}

export function InteractiveDestinationCard({ destination }: InteractiveDestinationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Provide fallback values
  const {
    id = destination.name.toLowerCase().replace(/\s+/g, "-"),
    name,
    image,
    description = "Discover the beauty of this amazing destination.",
    duration = "7 days",
    groupSize = "2-8 people",
    difficulty = "Moderate",
    rating = 4.5,
    price = "Contact us",
    highlights = ["Amazing scenery", "Cultural experience", "Professional guides", "Memorable adventure"],
  } = destination

  return (
    <div className="perspective-1000 h-96">
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative h-48">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{difficulty}</Badge>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{rating}</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{groupSize}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-teal-600">{price}</span>
              <Button
                size="sm"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white shadow-lg">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">{name} Highlights</h3>
              <ul className="space-y-2 mb-6">
                {highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <MapPin className="w-4 h-4 text-white/80 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold">{price}</div>
              <Link href={`/tour-packages/${id}`}>
                <Button className="w-full bg-white text-teal-700 hover:bg-gray-100">Book Now</Button>
              </Link>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false)
                }}
              >
                Back to Details
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
