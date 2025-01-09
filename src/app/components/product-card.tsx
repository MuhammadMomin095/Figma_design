'use client'

import { Product } from '../types/product'
import { Button } from '@/components/ui/button'
import { Eye, Heart, ShoppingCart, Trash2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  onRemoveFromWishlist?: (id: string) => void
  inWishlist?: boolean
}

export function ProductCard({ product, onRemoveFromWishlist, inWishlist }: ProductCardProps) {
  return (
    <div className="group relative">
      {product.discount && (
        <span className="absolute left-2 top-2 z-10 rounded bg-red-500 px-2 py-1 text-xs text-white">
          -{product.discount}%
        </span>
      )}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <div className='flex items-center text-center justify-center h-full'>
        <img
          src={product.image}
          alt={product.name}
          className="object-cover transition-transform group-hover:scale-105"
        />
        </div>
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          {inWishlist ? (
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8"
              onClick={() => onRemoveFromWishlist?.(product.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="secondary" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          )}
          <Link href={`/product/${product.id}`}>
            <Button variant="secondary" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>


      <div className="mt-4 space-y-2">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-medium">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-medium text-red-500">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`h-4 w-4 text-yellow-400 ${
                i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        <Link href="Cart">
        <Button className="w-full mt-4">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add To Cart
        </Button>
        </Link>
      </div>
    </div>
  )
}

