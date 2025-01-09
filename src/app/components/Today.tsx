'use client'

import { useState, useEffect } from 'react'
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Product {
  id: number
  name: string
  currentPrice: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
  discount: number
}

const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    image: "/images/i.png",
    discount: 40
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    currentPrice: 950,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    image: "/images/j.png",
    discount: 35
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: "/images/k.png",
    discount: 30
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    currentPrice: 375,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: "/images/l.png",
    discount: 25
  },
  {
    id: 5,
    name: "S-Series Comfort Chair",
    currentPrice: 375,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: "/images/i.png",
    discount: 25
  },
  {
    id: 6,
    name: "S-Series Comfort Chair",
    currentPrice: 375,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: "/images/j.png",
    discount: 25
  }
]

export default function Today() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds }
        
        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 }
        
        const newHours = prev.hours - 1
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 }
        
        const newDays = prev.days - 1
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 }
        
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="container mx-auto px-4 py-32">
      <div className="flex items-center justify-between mb-8">
        <div>
        <div className="flex gap-2">
          <div className="inline-block bg-red-500 text-white px-2 py-5 text-sm rounded-md mb-2">
          </div>
          <p className='text-2xl text-red-500 flex text-center items-center'>Today's</p>
          </div>
          <div className="flex items-center gap-8">
            <h2 className="text-2xl md:text-3xl font-bold">Flash Sales</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 text-white px-2 py-1 rounded">
                  {formatNumber(timeLeft.days)}
                </div>
                <span className="text-xl">:</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 text-white px-2 py-1 rounded">
                  {formatNumber(timeLeft.hours)}
                </div>
                <span className="text-xl">:</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 text-white px-2 py-1 rounded">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <span className="text-xl">:</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-gray-900 text-white px-2 py-1 rounded">
                  {formatNumber(timeLeft.seconds)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
              <div className="bg-gray-50 rounded-lg p-4 group">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    -{product.discount}%
                  </span>
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
                  <div className='flex items-center justify-center h-72'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" object-cover rounded-lg mb-4"
                  />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-semibold">${product.currentPrice}</span>
                  <span className="text-gray-500 line-through">${product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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

