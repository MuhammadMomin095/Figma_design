'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '.././components/product-card'
import { products } from '@/lib/products'
import { ShoppingBag } from 'lucide-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(products)

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  const moveAllToBag = () => {
    // Implement add all to cart functionality
    console.log('Moving all items to bag')
    setWishlistItems([])
  }

  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Wishlist ({wishlistItems.length})
        </h1>
        <Button onClick={moveAllToBag} variant="outline">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Move All To Bag
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistItems.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRemoveFromWishlist={removeFromWishlist}
            inWishlist
          />
        ))}
      </div>
      {wishlistItems.length === 0 && (
        <div className="text-center">
          <p className="text-lg text-gray-500">Your wishlist is empty</p>
        </div>
      )}
    </div>
    <Footer />

  </div>
  )
}

