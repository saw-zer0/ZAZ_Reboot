"use client"

import { useState } from "react"
import Link from "next/link"
import { Mountain, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNav({ tourPackages, otherDestinations }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:max-w-sm">
        <div className="flex items-center gap-2 pb-4 pt-2">
          <Mountain className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold">Sworna Travels</span>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            About
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tour-packages" className="border-0">
              <AccordionTrigger className="text-lg font-medium py-0">Tour Packages</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pl-4 mt-2">
                  {tourPackages.map((package_, index) => (
                    <Link
                      key={index}
                      href={package_.href}
                      onClick={() => setOpen(false)}
                      className="transition-colors hover:text-emerald-600"
                    >
                      {package_.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/mountain-flight"
            onClick={() => setOpen(false)}
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            Mountain Flight
          </Link>
          <Link
            href="/air-ticketing"
            onClick={() => setOpen(false)}
            className="text-lg font-medium transition-colors hover:text-emerald-600"
          >
            Air Ticketing
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="other-destinations" className="border-0">
              <AccordionTrigger className="text-lg font-medium py-0">Other Destinations</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pl-4 mt-2">
                  {otherDestinations.map((destination, index) => (
                    <Link
                      key={index}
                      href={destination.href}
                      onClick={() => setOpen(false)}
                      className="transition-colors hover:text-emerald-600"
                    >
                      {destination.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}
