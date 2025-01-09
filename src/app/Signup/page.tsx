'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from "../components/ui/input"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup
    console.log('Form submitted:', formData)
  }

  return (
    <div>   
      <Navbar />
    <div className="grid min-h-screen md:grid-cols-2 py-40">
      {/* Left Side - Image */}
      <div className="relative hidden bg-[#CBE4E8] md:block">
        <Image
          src="/images/z.png"
          alt="Shopping Cart with Phone"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center px-10 p-6 lg:p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-gray-500">
              Enter your details below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Name"
                type="text"
                className="h-12 rounded-md border-gray-200 bg-gray-50/50 px-4"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Email or Phone Number"
                type="text"
                className="h-12 rounded-md border-gray-200 bg-gray-50/50 px-4"
                value={formData.emailOrPhone}
                onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Password"
                type="password"
                className="h-12 rounded-md border-gray-200 bg-gray-50/50 px-4"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <Link href="Account">
            <Button 
              type="submit"
              className="h-12 w-full mt-6 rounded-md bg-[#DB4444] text-white hover:bg-[#DB4444]/90"
            >
              Create Account
            </Button>
            </Link>

          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="h-12 w-full rounded-md border border-gray-200"
          >
            <Image
              src="/google.svg"
              alt="Google"
              width={24}
              height={24}
              className="mr-2"
            />
            Sign up with Google
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="Login" className="text-[#DB4444] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />

  </div>
  )
}

