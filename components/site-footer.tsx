import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sworna Travels</h3>
            <p className="text-gray-400 mb-4">
              Providing exceptional travel experiences in Nepal, Bhutan, and Tibet since 2005.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tour-packages" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/mountain-flight" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Mountain Flight
                </Link>
              </li>
              <li>
                <Link href="/air-ticketing" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Air Ticketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tour-packages/everest-base-camp"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages/annapurna-circuit"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages/chitwan-jungle-safari"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Chitwan Jungle Safari
                </Link>
              </li>
              <li>
                <Link href="/other-destinations/bhutan" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Bhutan Tours
                </Link>
              </li>
              <li>
                <Link href="/other-destinations/tibet" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Tibet Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 shrink-0 mt-1" />
                <span className="text-gray-400">Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-teal-400 shrink-0" />
                <span className="text-gray-400">+977 1 4444444</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-teal-400 shrink-0" />
                <span className="text-gray-400">info@swornatravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Sworna Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
