"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mountain } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MobileNav } from "@/components/mobile-nav"

export function MainNav() {
  const pathname = usePathname()

  const tourPackages = [
    { title: "Everest Base Camp Trek", href: "/tour-packages/everest-base-camp" },
    { title: "Annapurna Circuit Trek", href: "/tour-packages/annapurna-circuit" },
    { title: "Manaslu Circuit Trek", href: "/tour-packages/manaslu-circuit" },
    { title: "Langtang Valley Trek", href: "/tour-packages/langtang-valley" },
    { title: "Chitwan Jungle Safari", href: "/tour-packages/chitwan-jungle-safari" },
    { title: "Pokhara Leisure Tour", href: "/tour-packages/pokhara-leisure" },
  ]

  const otherDestinations = [
    { title: "Bhutan Tour Packages", href: "/other-destinations/bhutan" },
    { title: "Tibet Tour Packages", href: "/other-destinations/tibet" },
  ]

  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold">Sworna Travels</span>
        </Link>
      </div>

      <MobileNav tourPackages={tourPackages} otherDestinations={otherDestinations} />

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tour Packages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {tourPackages.map((package_, index) => (
                  <ListItem key={index} title={package_.title} href={package_.href} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/mountain-flight" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Mountain Flight</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/air-ticketing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Air Ticketing</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Other Destinations</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {otherDestinations.map((destination, index) => (
                  <ListItem key={index} title={destination.title} href={destination.href} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
