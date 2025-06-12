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
      <SheetContent side="left" className="w-[85%] max-w-sm p-0">
        <div className="flex items-center gap-2 p-6 border-b">
          <Mountain className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold">Sworna Travels</span>
        </div>

        <div className="flex flex-col gap-2 p-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-3 px-4 rounded-lg transition-colors hover:bg-brand-primary-50 hover:text-brand-primary-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-3 px-4 rounded-lg transition-colors hover:bg-brand-primary-50 hover:text-brand-primary-600 cursor-pointer"
          >
            About
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="tour-packages" className="border-0">
              <AccordionTrigger className="text-lg font-medium py-0 cursor-pointer">Tour Packages</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 pl-4 mt-2">
                  {/* Nepal Treks Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-700 mb-2">Nepal Treks</h4>
                    <div className="h-px bg-gray-200 mb-3"></div>
                    <div className="flex flex-col gap-3 pl-2">
                      {tourPackages.map((package_, index) => (
                        <Link
                          key={index}
                          href={package_.href}
                          onClick={() => setOpen(false)}
                          className="transition-colors hover:text-emerald-600 cursor-pointer"
                        >
                          {package_.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mountain Flight Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-700 mb-2">Mountain Experiences</h4>
                    <div className="h-px bg-gray-200 mb-3"></div>
                    <div className="flex flex-col gap-3 pl-2">
                      <Link
                        href="/mountain-flight"
                        onClick={() => setOpen(false)}
                        className="transition-colors hover:text-emerald-600 cursor-pointer"
                      >
                        Mountain Flight
                      </Link>
                    </div>
                  </div>

                  {/* Other Destinations Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-700 mb-2">International Destinations</h4>
                    <div className="h-px bg-gray-200 mb-3"></div>
                    <div className="flex flex-col gap-3 pl-2">
                      {otherDestinations.map((destination, index) => (
                        <Link
                          key={index}
                          href={destination.href}
                          onClick={() => setOpen(false)}
                          className="transition-colors hover:text-emerald-600 cursor-pointer"
                        >
                          {destination.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/air-ticketing"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-3 px-4 rounded-lg transition-colors hover:bg-brand-primary-50 hover:text-brand-primary-600 cursor-pointer"
          >
            Air Ticketing
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
