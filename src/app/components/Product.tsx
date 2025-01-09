'use client'

import { useState } from 'react'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'


interface Product {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  isNew?: boolean
  colors?: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 3.5,
    reviews: 35,
    image: "/images/a.png",
    colors: ['#000000', '#FF0000']
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: "/images/b.png"
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    image: "/images/c.png"
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: "/images/d.png"
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: "/images/e.png",
    isNew: true,
    colors: ['#000000', '#FF0000']
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 4,
    reviews: 35,
    image: "/images/f.png",
    colors: ['#000000', '#FF0000']
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/images/g.png",
    isNew: true,
    colors: ['#000000', '#FF0000']
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: "/images/h.png",
    colors: ['#000000', '#FF0000']
  },
]

export default function ProductGrid() {
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
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
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
          <p className='text-2xl text-red-500 flex text-center items-center'>Our Products</p>
          </div>
          <h2 className="text-xl md:text-3xl font-bold">Explore Our Products</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4 group">
            <div className="relative">
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                  NEW
                </span>
              )}
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
                className="justify-center flex items-center object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-red-500 font-semibold">${product.price}</span>
              {product.colors && (
                <div className="flex gap-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
      <Link href="Wishlist">
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:text-white hover:bg-red-600">
          View All Products
        </button>
        </Link>
      </div>
    </div>
  )
}

