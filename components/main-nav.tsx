"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
          <Image
            src="/icons/sworna-logo.png"
            alt="Sworna Travels Logo"
            width={120}
            height={30}
            className="h-8 w-auto object-contain sm:h-10"
            priority
          />
          
        </Link>
      </div>

      {/* Desktop Navigation - Hidden on mobile since we use floating button */}
      <NavigationMenu className="hidden lg:flex">
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
              <div className="w-[400px] md:w-[500px] lg:w-[600px] bg-white rounded-md shadow-lg p-4">
                <div className="grid md:grid-cols-2 gap-3">
                  {tourPackages.map((pkg, index) => (
                    <Link
                      key={index}
                      href={pkg.href}
                      className="block p-3 rounded-md hover:bg-gradient-to-r hover:from-brand-primary-50 hover:to-brand-secondary-50 hover:text-brand-primary-600"
                    >
                      <div className="text-sm font-medium">{pkg.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Gallery</NavigationMenuLink>
            </Link>
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
              <div className="w-[400px] bg-white rounded-md shadow-lg p-4">
                <div className="grid gap-3">
                  {otherDestinations.map((destination, index) => (
                    <Link
                      key={index}
                      href={destination.href}
                      className="block p-3 rounded-md hover:bg-gradient-to-r hover:from-brand-primary-50 hover:to-brand-secondary-50 hover:text-brand-primary-600"
                    >
                      <div className="text-sm font-medium">{destination.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/visa-application" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Visa Application</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
