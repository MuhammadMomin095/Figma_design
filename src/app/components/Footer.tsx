'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "../components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Exclusive</h2>
          <div className="space-y-2">
            <p>Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-gray-600"
                required
              />
              <Button type="submit" variant="outline" size="icon">
                <ArrowRight className="h-4 w-4 text-black" />
              </Button>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Support</h2>
          <div className="space-y-2 text-sm">
            <p>Nazimabad, Karachi,</p>
            <p>Nazimabad, Karachi Pakistan.</p>
            <p>mominshykh7@gmail.com</p>
            <p>+92-315-23095-03</p>
          </div>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Account</h2>
          <nav className="space-y-2 text-sm">
            <Link href="Account" className="block hover:text-gray-300">
              My Account
            </Link>
            <Link href="Signup" className="block hover:text-gray-300">
              Login / Register
            </Link>
            <Link href="Cart" className="block hover:text-gray-300">
              Cart
            </Link>
            <Link href="Wishlist" className="block hover:text-gray-300">
              Wishlist
            </Link>
            <Link href="Wishlist" className="block hover:text-gray-300">
              Shop
            </Link>
          </nav>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Link</h2>
          <nav className="space-y-2 text-sm">
            <Link href="/privacy-policy" className="block hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block hover:text-gray-300">
              Terms Of Use
            </Link>
            <Link href="/faq" className="block hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/contact" className="block hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Download App</h2>
          <p className="text-sm">Save $3 with App New User Only</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative aspect-square w-full max-w-[120px]">
              <Image
                src="/images/code.png"
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/playstore.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        <p>© Copyright Rimel 2023. All right reserved</p>
      </div>
    </footer>
  )
}

