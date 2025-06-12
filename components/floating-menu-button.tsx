"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { MobileBottomMenu } from "@/components/mobile-bottom-menu"

export function FloatingMenuButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Floating Menu Button - Always visible on mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        {/* Animated pulse ring */}
        <div
          className={`absolute inset-0 rounded-full ${isHovered ? "animate-ping opacity-30" : "opacity-0"} bg-gradient-to-r from-pink-500 to-purple-600 transition-opacity duration-300`}
        ></div>

        {/* Button with gradient */}
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`h-16 w-16 rounded-full shadow-lg transition-all duration-500 ease-in-out transform ${
            isHovered ? "scale-110 shadow-xl" : ""
          } bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-800 flex items-center justify-center`}
        >
          <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
          <Menu className={`h-7 w-7 text-white transition-transform duration-500 ${isHovered ? "rotate-90" : ""}`} />
          <span className="sr-only">Open navigation menu</span>
        </button>
      </div>

      {/* Bottom Popup Menu */}
      <MobileBottomMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
