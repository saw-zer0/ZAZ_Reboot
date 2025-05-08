import Image from "next/image"
import Link from "next/link"

interface RelatedPackage {
    name: string
    slug: string
  }
  
interface OtherPackagesProps {
relatedPackages: RelatedPackage[]
}

export const TourOtherPackages = ({ relatedPackages }: OtherPackagesProps) => (
    <section className="mt-12">
    <h2 className="text-2xl font-bold mb-6">Other Popular Packages</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPackages.map((relatedTour, index) => (
        <Link
          key={index}
          href={`/tour-packages/${relatedTour.slug}`}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt={relatedTour.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{relatedTour.name}</h3>
            <div className="mt-2 text-teal-600 flex items-center">
              <span>View Details</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);