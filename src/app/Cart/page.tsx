'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../../components/ui/button"
import { Input } from "../components/ui/input"
import { Separator } from "../../components/ui/separator"
import { X } from 'lucide-react'
import { QuantitySelector } from '../components/quantity-selector'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../../context/CartContext';
import type { CartItem, CartContextType } from '.././types/cart';

export default function CartPage() {

  
  const { cart = [] , updateCartQuantity, removeFromCart } = useCart(); 
  const [couponCode, setCouponCode] = useState('');

  // Subtotal calculation
  const subtotal = cart.reduce((sum: number, item: CartItem) => {
    return sum + item.price * item.quantity;
  }, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div>
      <Navbar />

      <div className="gap-8 md:px-14 lg:px-20 py-40">
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card">
            <div className="grid grid-cols-4 gap-4 p-4 font-medium text-muted-foreground">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Subtotal</div>
            </div>
            <Separator />
            {cart.map((item: CartItem, index: number) => (
              <div key={`${item.id}-${index}`}>
                <div className="grid grid-cols-4 gap-4 p-4">
                  <div className="col-span-2 flex gap-4">
                    <div className="relative h-20 w-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="rounded-md object-cover"
                        width={80}
                        height={80}
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute bg-red-600 rounded-lg -right-2 -top-2 h-6 w-6"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4 bg-red-600 text-white" />
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
                      onQuantityChange={(q) => updateCartQuantity(item.id, q)}
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

          <div className="grid grid-cols-2 mt-10">
            <div className="flex justify-start items-start">
              <Link href="Wishlist">
                <Button className="text-black hover:text-white bg-white hover:bg-red-600" variant="outline">
                  Return To Shop
                </Button>
              </Link>
            </div>
            <div className="flex justify-end items-end">
              <Button className="text-black hover:text-white bg-white hover:bg-red-600" variant="outline">
                Update Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:space-x-48 mt-10 gap-y-8">
          {/* Apply Coupon */}
          <div className="bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Apply Coupon</h2>
            <div className="flex gap-2">
              <Input
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button className="text-black hover:text-white bg-white hover:bg-red-600">Apply Coupon</Button>
            </div>
          </div>

          {/* Cart Total */}
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
              <Link href={{ pathname: `CheckOut`, query: { total, cartItems: JSON.stringify(cart) } }} className="block">
                <Button className="w-full text-black hover:text-white bg-white hover:bg-red-600">
                  Process to checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
