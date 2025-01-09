'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ProductCard } from '../../components/product-card'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Heart, Minus, Plus, Truck } from 'lucide-react'

const relatedProducts = [
  {
    id: '1',
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: '/images/2.png',
    category: 'Bags',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '2',
    name: 'RGB liquid CPU Cooler',
    price: 1660,
    image: '/images/3.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '3',
    name: 'GP11 Shooter USB Gamepad',
    price: 550,
    image: '/images/g.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '4',
    name: 'Quilted Satin Jacket',
    price: 750,
    image: '/images/h.png',
    category: 'Fashion',
    rating: 4.5,
    reviews: 65,
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  const { id } = useParams();  // Use useParams to get the product ID
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  const product = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      image: '/images/2.png',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1660,
      image: '/images/3.png',
      category: 'Gaming',
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: '/images/g.png',
      category: 'Gaming',
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      image: '/images/h.png',
      category: 'Fashion',
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 5,
      name: 'ASUS FHD Gaming Laptop',
      price: 9600,
      image: '/images/c.png',
      category: 'Electronic',
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 6,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      image: '/images/k.png',
      category: 'Electronic',
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 7,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      image: '/images/i.png',
      category: 'Gaming',
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 8,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      image: '/images/j.png',
      category: 'Electronic',
      rating: 4.5,
      reviews: 65,
    },
  ];

  useEffect(() => {
    if (id) {
      // Ensure 'id' is a string, if it's an array take the first element
      const productId = Array.isArray(id) ? id[0] : id;
      // Parse the string into an integer
      const parsedId = parseInt(productId);
      
      if (!isNaN(parsedId)) {
        const foundProduct = product.find(p => p.id === parsedId);
        setCurrentProduct(foundProduct || null);
      }
    }
  }, [id]);
  // Static product selection for now
  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-40">
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          {/* Product Images */}
          <div className="flex gap-4 md:w-1/2">
            <div className="flex flex-col gap-4">
              {[currentProduct.image, ...Array(3)].map((img, i) => (
                <button
                  key={i}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 ${
                    selectedImage === i ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(i)}
                >
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-square">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                width={320}
                height={320}
                className="rounded-lg w-80 object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">{currentProduct.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(currentProduct.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({currentProduct.reviews} Reviews)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">${currentProduct.price}</span>
              {currentProduct.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${currentProduct.originalPrice}
                </span>
              )}
            </div>

            {/* Colors */}
            <div className="space-y-2">
              <h3 className="font-medium">Colors:</h3>
              <div className="flex gap-2">
                {['blue', 'red'].map((color) => (
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
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
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

            <div className="grid grid-cols-2">
              {/* Quantity */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Button
                    className="text-black hover:text-white bg-white hover:bg-red-600"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    className="text-black hover:text-white bg-white hover:bg-red-600"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-x-2">
                <Button className="flex-1 text-black hover:text-white bg-white hover:bg-red-600">
                  Buy Now
                </Button>
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
            <p className="text-2xl text-red-500">Related Items</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
