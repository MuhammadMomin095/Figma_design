import Link from 'next/link'
import { Truck, Headphones, ShieldCheck } from 'lucide-react'

interface ServiceFeature {
  icon: React.ElementType
  title: string
  description: string
}


const serviceFeatures: ServiceFeature[] = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: ShieldCheck,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
]

export default function NewArrival() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="mb-8">
      <div className="flex gap-2">
          <div className="inline-block bg-red-500 text-white px-2 py-5 text-sm rounded-md mb-2">
          </div>
          <p className='text-2xl text-red-500 flex text-center items-center'>Featured</p>
          </div>
        <h2 className="text-2xl md:text-3xl font-bold">New Arrival</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* First Row - PlayStation 5 */}
        <div className="relative col-span-1 overflow-hidden rounded-lg bg-black md:row-span-2">
          <Link href="/category/gaming" className="group block h-full">
            <div className="relative h-[600px] w-full">
              <img
                src="images/5.png"
                alt="PlayStation 5"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="mb-2 text-2xl font-bold">PlayStation 5</h2>
                  <p className="mb-4 text-sm text-gray-200">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <Link href="Wishlist">
                  <span className="inline-block border-b border-white pb-1 text-sm font-medium">
                    Shop Now
                  </span>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Second Row - Right Column Top - Women's Collections */}
        <div className="relative col-span-1 overflow-hidden rounded-lg bg-black">
          <Link href="/category/women" className="group block">
            <div className="relative h-[300px] w-full">
              <img
                src="images/66.png"
                alt="Women's Collections"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="mb-2 text-xl font-bold">Women's Collections</h2>
                  <p className="mb-4 text-sm text-gray-200">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Link href="Wishlist">
                  <span className="inline-block border-b border-white pb-1 text-sm font-medium">
                    Shop Now
                  </span>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Third Row - Right Column Bottom */}
        <div className="grid grid-cols-2 gap-4">
          {/* Speakers */}
          <div className="relative overflow-hidden rounded-lg bg-black">
            <Link href="/category/speakers" className="group block">
              <div className="relative h-[280px] w-full">
                <img
                  src="images/7.png"
                  alt="Amazon Speakers"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="mb-2 text-xl font-bold">Speakers</h2>
                    <p className="mb-4 text-sm text-gray-200">
                      Amazon wireless speakers
                    </p>
                    <Link href="Wishlist">
                    <span className="inline-block border-b border-white pb-1 text-sm font-medium">
                      Shop Now
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Perfume */}
          <div className="relative overflow-hidden rounded-lg bg-black">
            <Link href="/category/perfume" className="group block">
              <div className="relative h-[280px] w-full">
                <img
                  src="images/8.png"
                  alt="Gucci Perfume"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="mb-2 text-xl font-bold">Perfume</h2>
                    <p className="mb-4 text-sm text-gray-200">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <Link href="Wishlist">
                    <span className="inline-block border-b border-white pb-1 text-sm font-medium">
                      Shop Now
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-32 px-16">
        {serviceFeatures.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

