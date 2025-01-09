'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail } from 'lucide-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-12">
          {/* Call Us Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 bg-primary text-white">
                <Phone className="h-6 w-6 bg-red-500" />
              </div>
              <h2 className="text-2xl font-bold">Call To Us</h2>
            </div>
            <p className="text-gray-500">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-500">Phone: +92-315-23095-03</p>
          </div>

          {/* Write To Us Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center bg-red-500 justify-center rounded-full bg-primary text-white">
                <Mail className="h-6 w-6 bg-red-500" />
              </div>
              <h2 className="text-2xl font-bold">Write To Us</h2>
            </div>
            <p className="text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <div className="space-y-1">
              <p className="text-gray-600">Emails: mominshykh7@gmail.com</p>
              <p className="text-gray-600">Emails: mominshykh8@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-gray-50 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[200px]"
              required
            />
            <Button type="submit" className="w-full bg-red-500 md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
    <Footer />

  </div>
  )
}

