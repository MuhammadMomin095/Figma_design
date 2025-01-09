'use client'

import { useState } from 'react'
import { Heart, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'


interface Product {
  id: number
  name: string
  currentPrice: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "The north coat",
    currentPrice: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: "/images/1.png"
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: "/images/2.png"
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    currentPrice: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: "/images/3.png"
  },
  {
    id: 4,
    name: "Small BookShelf",
    currentPrice: 360,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: "/images/4.png"
  }
]

export default function BestSelling() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <span
        key={index}
        className={cn(
          "text-sm",
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300",
          index + 1 <= rating % 1 ? "text-yellow-400" : ""
        )}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="flex items-center justify-between mb-8">
        <div>
        <div className="flex gap-2">
          <div className="inline-block bg-red-500 text-white px-2 py-5 text-sm rounded-md mb-2">
          </div>
          <p className='text-2xl text-red-500 flex text-center items-center'>This Month</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Best Selling Products</h2>
        </div>
        <Link href="Wishlist">
        <button className="px-6 py-2 border border-gray-300 rounded hover:text-white hover:bg-red-500">
          View All
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4 group">
            <div className="relative">
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <Heart
                    className={cn(
                      "w-4 h-4",
                      favorites.includes(product.id) ? "fill-red-500 stroke-red-500" : "stroke-gray-600"
                    )}
                  />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Eye className="w-4 h-4 stroke-gray-600" />
                </button>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-semibold">${product.currentPrice}</span>
              {product.originalPrice !== product.currentPrice && (
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

