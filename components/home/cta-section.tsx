import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready for Your Next Adventure?</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Contact us today to plan your dream trip to Nepal, Bhutan, or Tibet. Let us make your travel experience
          unforgettable.
        </p>
        <Button
          size="lg"
          className="bg-white text-teal-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base"
          asChild
        >
          <Link href="/contact">Plan Your Trip Now</Link>
        </Button>
      </div>
    </section>
  )
}
