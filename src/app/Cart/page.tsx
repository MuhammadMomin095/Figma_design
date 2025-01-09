'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../../components/ui/button"
import { Input } from "../components/ui/input"
import { Separator } from "../../components/ui/separator"
import { X } from 'lucide-react'
import { QuantitySelector } from '../components/quantity-selector'
import type { CartItem } from '../types/cart'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Gucci duffle bag',
      price: 960,
      quantity: 1,
      image: '/images/2.png',
      
    },
    {
      id: '2',
      name: 'RGB liquid CPU Cooler',
      price: 1660,
      quantity: 1,
      image: '/images/3.png',
      
    },
    {
      id: '3',
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      quantity: 1,
      image: '/images/g.png',
     
    },
    {
      id: '4',
      name: 'Quilted Satin Jacket',
      price: 750,
      quantity: 1,
      image: '/images/h.png',
      
    },
    {
      id: '5',
      name: 'ASUS FHD Gaming Laptop',
      price: 9600,
      quantity: 1,
      image: '/images/c.png',
     
    },
    {
      id: '6',
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      quantity: 1,
      image: '/images/k.png',
      
    },
    {
      id: '7',
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      quantity: 1,
      image: '/images/i.png',
  
    },
    {
      id: '8',
      name: 'AK-900 Wired Keyboard',
      price: 200,
      quantity: 1,
      image: '/images/j.png', 
    },
    
  ])
  const [couponCode, setCouponCode] = useState('')

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      <div className="text-sm breadcrumbs mb-8">
        <ul className="flex gap-2 text-gray-500">
          <li><Link href="/">Home</Link></li>
          <li>Cart</li>
        </ul>
      </div>

      <div className="gap-8 ">
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card">
            <div className="grid grid-cols-4 gap-4 p-4 font-medium text-muted-foreground">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Subtotal</div>
            </div>
            <Separator />
            {cartItems.map(item => (
              <div key={item.id}>
                <div className="grid grid-cols-4 gap-4 p-4">
                  <div className="col-span-2 flex gap-4">
                    <div className="relative h-20 w-20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-md object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute -right-2 -top-2 h-6 w-6"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center">${item.price}</div>
                  <div className="flex items-center justify-between">
                    <QuantitySelector
                      quantity={item.quantity}
                      onQuantityChange={(q) => updateQuantity(item.id, q)}
                    />
                    <div className="font-medium">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>

          <div className='grid grid-cols-2 mt-10'>
            <div className="flex justify-start items-start">
            <Link href="Whishlis">
              <Button className='text-black hover:text-white bg-white hover:bg-red-600' variant="outline">Return To Shop</Button>
            </Link>
            </div>
            <div className='flex justify-end items-end'>
            <Button className='text-black hover:text-white bg-white hover:bg-red-600' variant="outline">Update Cart</Button>
          </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 space-x-48  mt-10 space-y-8">
          <div className="bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Apply Coupon</h2>
            <div className="flex gap-2">
              <Input
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button className='text-black hover:text-white bg-white hover:bg-red-600'>Apply Coupon</Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Cart Total</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <Link href="CheckOut" className="block">
                <Button className="w-full text-black hover:text-white bg-white hover:bg-red-600">
                  Process to checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />

  </div>
  )
}

