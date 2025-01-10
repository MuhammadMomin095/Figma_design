'use client'

import { useState, useEffect } from 'react'
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
import { useSearchParams } from 'next/navigation';

interface ItemType {
  id: string;
  name: string;
  price: number;
  image: string;
}

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
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order submission
    const { firstName, streetAddress, town, phoneNumber, emailAddress } = billingDetails;
    
    if (firstName && streetAddress && town && phoneNumber && emailAddress) {
      // If all required fields are filled, show success message
      setSuccessMessage('Order Confirmed!');
      setErrorMessage(''); // Clear error message
    } else {
      // If any field is missing, show error message
      setErrorMessage('Please fill all required fields.');
      setSuccessMessage(''); // Clear success message
    }
  }

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setCouponDiscount(0.1) // Apply 10% discount
    } else {
      alert('Invalid coupon code')
    }
  }


  
  const searchParams = useSearchParams();  
  const cartItems = searchParams.get('cartItems'); 

  // Parsing cart items from the query string
  const items = cartItems ? JSON.parse(cartItems) : []

  const subtotal = items.reduce((sum: number, item: { price: number }) => sum + item.price, 0)

  const shipping = 0 // You can modify this if needed
  const total = subtotal + shipping - couponDiscount * subtotal

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
          {/* Billing Details Section */}
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
                <label htmlFor="saveInformation" className="text-sm leading-none">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
              <div className="space-y-4">
              {items.map((item: ItemType, index: number) => (
                  <div key={`${item.id}-${index}`} className="flex items-center gap-4">
                    <div className="relative h-16 w-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className=" rounded-md "
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

            {/* Payment Method Section */}
            <div className="rounded-lg border bg-card p-6">
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank</Label>
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

            {/* Coupon Code Section */}
            <div className="flex gap-2">
              <Input
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button variant="outline" onClick={handleApplyCoupon}>Apply Coupon</Button>
            </div>

            {/* Place Order Button */}
            <Button className="w-full" size="lg" onClick={handleSubmit}>
              Place Order
            </Button>
            {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-500">{successMessage}</div>
              )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
