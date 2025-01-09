'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import type { BillingDetails } from '../types/cart'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CheckOut() {
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    town: '',
    phoneNumber: '',
    emailAddress: '',
    saveInformation: false
  })
  const [paymentMethod, setPaymentMethod] = useState('bank')
  const [couponCode, setCouponCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order submission
    console.log('Order submitted:', { billingDetails, paymentMethod })
  }

  const cartItems = [
    {
      id: '1',
      name: 'LCD Monitor',
      price: 650,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'H1 Gamepad',
      price: 1100,
      image: '/placeholder.svg'
    }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      <div className="text-sm breadcrumbs mb-8">
        <ul className="flex gap-2 text-gray-500">
          <li><Link href="/">Account</Link></li>
          <li><Link href="/account">My Account</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/cart">View Cart</Link></li>
          <li>Checkout</li>
        </ul>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="mb-6 text-2xl font-bold">Billing Details</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="firstName">First Name*</Label>
                <Input
                  id="firstName"
                  value={billingDetails.firstName}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    firstName: e.target.value
                  }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={billingDetails.companyName}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    companyName: e.target.value
                  }))}
                />
              </div>
              <div>
                <Label htmlFor="streetAddress">Street Address*</Label>
                <Input
                  id="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    streetAddress: e.target.value
                  }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="apartment">Apartment, floor, etc. (optional)</Label>
                <Input
                  id="apartment"
                  value={billingDetails.apartment}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    apartment: e.target.value
                  }))}
                />
              </div>
              <div>
                <Label htmlFor="town">Town/City*</Label>
                <Input
                  id="town"
                  value={billingDetails.town}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    town: e.target.value
                  }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phoneNumber">Phone Number*</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={billingDetails.phoneNumber}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    phoneNumber: e.target.value
                  }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="emailAddress">Email Address*</Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={billingDetails.emailAddress}
                  onChange={(e) => setBillingDetails(prev => ({
                    ...prev,
                    emailAddress: e.target.value
                  }))}
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="saveInformation"
                checked={billingDetails.saveInformation}
                onCheckedChange={(checked) => setBillingDetails(prev => ({
                  ...prev,
                  saveInformation: checked as boolean
                }))}
              />
              <label
                htmlFor="saveInformation"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-1 justify-between">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))}
              <Separator />
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
            </div>
          </div>


          
          <div className="rounded-lg border bg-card p-6">
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-4"
            >


              <div className='space-x-28 grid grid-cols-2'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank">Bank</Label>
              </div>
             



                <div className="ml-auto flex gap-2">
                  {['30', '31', '32', '33'].map(card => (
                    <div key={card} className="relative h-8 w-12">
                      <Image
                        src={`/images/${card}.png`}
                        alt={card}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                  </div>

                </div>
             
              





              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Cash on delivery</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button className='text-black hover:text-white bg-white hover:bg-red-600' variant="outline">Apply Coupon</Button>
          </div>

          <Button className="w-full text-black hover:text-white bg-white hover:bg-red-600" size="lg" onClick={handleSubmit}>
            Place Order
          </Button>
        </div>
      </div>
    </div>
    <Footer />

  </div>
  )
}

