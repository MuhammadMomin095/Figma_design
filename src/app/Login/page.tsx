'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../../components/ui/button"
import { Input } from "../components/ui/input"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login
    console.log('Form submitted:', formData)
  }

  return (
    <div>   
      <Navbar />
    <div className="grid min-h-screen md:grid-cols-2 py-40">
      {/* Left Side - Image */}
      <div className="relative hidden bg-[#CBE4E8] md:block">
        <img
          src="/images/z.png"
          alt="Shopping Cart with Phone"
          className="object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-6 px-10 lg:p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Log in to Exclusive
            </h1>
            <p className="text-sm text-gray-500">
              Enter your details below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between">
            <Link href="/">
              <Button 
                type="submit"
                className="h-12 w-32 rounded-md bg-[#DB4444] text-white hover:bg-[#DB4444]/90"
              >
                Log in
              </Button>
              </Link>
              <Link 
                href="/forgot-password" 
                className="text-sm text-[#DB4444] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="Signup" className="text-[#DB4444] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />

  </div>
  )
}

