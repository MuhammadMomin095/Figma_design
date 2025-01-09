'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProductCard } from '../../components/product-card'
import { products } from '@/lib/products'
import { Heart, Minus, Plus, Truck } from 'lucide-react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProductPage({ params }: { params: { id: string } }) {
  
  const product = products.find(p => p.id === params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id)

  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        {/* Product Images */}
        <div className="flex gap-4 md:w-1/2">
          <div className="flex flex-col gap-4">
            {[product.image, ...Array(3)].map((img, i) => (
              <button
                key={i}
                className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 ${
                  selectedImage === i ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={product.image} alt={product.name}  className="object-cover" />
              </button>
            ))}
          </div>
          <div className="relative flex-1 aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-80 object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Colors */}
          
            <div className="space-y-2">
              <h3 className="font-medium">Colors:</h3>
              <div className="flex gap-2">
                {['blue', 'red'].map(color => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-primary' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          

          {/* Sizes */}

          
            <div className="space-y-2">
              <h3 className="font-medium">Size:</h3>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`h-8 min-w-[2rem] text-black hover:text-white bg-white hover:bg-red-600 rounded border px-2 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
         



          <div className='grid grid-cols-2'>
          {/* Quantity */}
          <div className="space-y-2">
            
            <div className="flex items-center gap-4">
              <Button
              className='text-black hover:text-white bg-white hover:bg-red-600'
                variant="outline"
                size="icon"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
              className='text-black hover:text-white bg-white hover:bg-red-600'
                variant="outline"
                size="icon"
                onClick={() => setQuantity(q => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            </div>
          

          {/* Actions */}
          <div className='space-x-2'>
            <Button className="flex-1 text-black hover:text-white bg-white hover:bg-red-600">Buy Now</Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            </div>
          
          </div>

          {/* Delivery Info */}
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="space-y-6">
      <div className="flex gap-2">
          <div className="inline-block bg-red-500 text-white px-2 py-5 text-sm rounded-md mb-2">
          </div>
          <p className='text-2xl text-red-500 flex text-center items-center'>Related Items</p>
          </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    <Footer />

  </div>
  )
}

