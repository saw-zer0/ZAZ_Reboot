import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { TourInquiryForm } from "@/components/forms/tour-inquiry-form"

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Contact Sworna Travels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about our tours or services? Want to customize a trip? Our team is ready to assist you with
              all your travel needs. Reach out to us through any of the following channels or fill out the inquiry form.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Our Office</h3>
                  <p className="text-gray-600">Thamel, Kathmandu, Nepal</p>
                  <p className="text-gray-600">Near Garden of Dreams, JP Road</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+977 1 4444444 (Office)</p>
                  <p className="text-gray-600">+977 9801234567 (Mobile/WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@swornatravels.com</p>
                  <p className="text-gray-600">bookings@swornatravels.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                * For urgent inquiries outside office hours, please email us or leave a message, and we'll get back to
                you as soon as possible.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send an Inquiry</h2>
            <TourInquiryForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="h-[400px] bg-slate-200 rounded-lg overflow-hidden">
            {/* Replace with actual map embed */}
            <div className="w-full h-full flex items-center justify-center bg-slate-300">
              <p className="text-slate-600 text-lg">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
