"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Mountain,
  X,
  ChevronRight,
  Home,
  Info,
  MapPin,
  Plane,
  Ticket,
  Globe,
  Phone,
  Camera,
  FileText,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface MobileBottomMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileBottomMenu({ isOpen, onClose }: MobileBottomMenuProps) {
  const [startY, setStartY] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const tourPackages = [
    { title: "Everest Base Camp Trek", href: "/tour-packages/everest-base-camp", icon: MapPin },
    { title: "Annapurna Circuit Trek", href: "/tour-packages/annapurna-circuit", icon: MapPin },
    { title: "Manaslu Circuit Trek", href: "/tour-packages/manaslu-circuit", icon: MapPin },
    { title: "Langtang Valley Trek", href: "/tour-packages/langtang-valley", icon: MapPin },
    { title: "Chitwan Jungle Safari", href: "/tour-packages/chitwan-jungle-safari", icon: MapPin },
    { title: "Pokhara Leisure Tour", href: "/tour-packages/pokhara-leisure", icon: MapPin },
  ]

  const otherDestinations = [
    { title: "Bhutan Tour Packages", href: "/other-destinations/bhutan", icon: Globe },
    { title: "Tibet Tour Packages", href: "/other-destinations/tibet", icon: Globe },
  ]

  const mainMenuItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "About", href: "/about", icon: Info },
    { title: "Gallery", href: "/gallery", icon: Camera },
    { title: "Mountain Flight", href: "/mountain-flight", icon: Plane },
    { title: "Air Ticketing", href: "/air-ticketing", icon: Ticket },
    { title: "Visa Application", href: "/visa-application", icon: FileText },
    { title: "Contact", href: "/contact", icon: Phone },
  ]

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const currentY = e.touches[0].clientY
    const deltaY = currentY - startY

    // Only allow downward swipe to close
    if (deltaY > 0) {
      setCurrentY(deltaY)
    }
  }

  const handleTouchEnd = () => {
    if (!isDragging) return

    // Close menu if swiped down more than 100px
    if (currentY > 100) {
      onClose()
    }

    setIsDragging(false)
    setCurrentY(0)
    setStartY(0)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop with animated blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Bottom Menu */}
      <div
        ref={menuRef}
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-b from-white to-gray-50 rounded-t-3xl shadow-2xl transition-transform duration-300 animate-in slide-in-from-bottom ${
          isDragging ? "" : "ease-out"
        }`}
        style={{
          transform: `translateY(${isDragging ? Math.max(0, currentY) : 0}px)`,
          maxHeight: "85vh",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag Handle with animation */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-12 h-1.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse" />
        </div>

        {/* Header with gradient */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
              Sworna Travels
            </span>
          </div>
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="h-5 w-5 text-pink-600" />
          </button>
        </div>

        {/* Menu Content with staggered animation */}
        <div className="overflow-y-auto max-h-[calc(85vh-120px)] pb-6">
          <div className="px-6 py-4 space-y-2">
            {/* Main Menu Items */}
            {mainMenuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 animate-in slide-in-from-right ${index * 50}ms hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 active:scale-95`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      activeItem === index ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-gray-100"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 transition-colors duration-300 ${
                        activeItem === index ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeItem === index
                        ? "bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 ml-auto transition-all duration-300 ${
                      activeItem === index ? "text-pink-500 translate-x-1 opacity-100" : "text-gray-400 opacity-40"
                    }`}
                  />
                </Link>
              )
            })}

            {/* Tour Packages Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="tour-packages" className="border-0">
                <AccordionTrigger className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-colors duration-300">
                      <MapPin className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium text-gray-800 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      Tour Packages
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-0 animate-accordion-down">
                  <div className="pl-6 space-y-1">
                    {tourPackages.map((pkg, index) => (
                      <Link
                        key={index}
                        href={pkg.href}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 group"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {pkg.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Other Destinations Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="other-destinations" className="border-0">
                <AccordionTrigger className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-colors duration-300">
                      <Globe className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium text-gray-800 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      Other Destinations
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-0 animate-accordion-down">
                  <div className="pl-6 space-y-1">
                    {otherDestinations.map((destination, index) => (
                      <Link
                        key={index}
                        href={destination.href}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {destination.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
