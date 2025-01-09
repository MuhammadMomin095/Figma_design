'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"

interface Category {
  name: string
  href: string
  subCategories?: { name: string; href: string }[]
}

interface SlideContent {
  title: string
  subtitle: string
  cta: string
  image: string
  logo?: string
  background: string
}

const categories: Category[] = [
  {
    name: "Woman's Fashion",
    href: "#",
    subCategories: [
      { name: "Dresses", href: "#" },
      { name: "Tops", href: "#" },
    ]
  },
  {
    name: "Men's Fashion",
    href: "#",
    subCategories: [
      { name: "Shirts", href: "#" },
      { name: "Pants", href: "#" },
    ]
  },
  { name: "Electronics", href: "#" },
  { name: "Home & Lifestyle", href: "#" },
  { name: "Medicine", href: "#" },
  { name: "Sports & Outdoor", href: "#" },
  { name: "Baby's & Toys", href: "#" },
  { name: "Groceries & Pets", href: "#" },
  { name: "Health & Beauty", href: "#" },
]

const slides: SlideContent[] = [
  {
    title: "Up to 10%",
    subtitle: "off Voucher",
    cta: "Shop Now",
    image: "/images/iphone.png",
    logo: "/images/logo.png",
    background: "bg-black"
  },
  {
    title: "New Arrivals",
    subtitle: "Spring Collection",
    cta: "Shop Now",
    image: "/images/iphone.png",
    background: "bg-black "
  },
  {
    title: "Special Offer",
    subtitle: "Save Big Today",
    cta: "Shop Now",
    image: "/images/iphone.png",
    background: "bg-black"
  }
]

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Category Sidebar */}
        <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-sm">
          <nav className="py-2">
            {categories.map((category) => (
              <div
                key={category.name}
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
                className="relative"
              >
                <Link
                  href={category.href}
                  className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50"
                >
                  {category.name}
                  {category.subCategories && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </Link>
                
                {/* Submenu */}
                {category.subCategories && activeCategory === category.name && (
                  <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                    {category.subCategories.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Hero Carousel */}
        <div className="w-full lg:w-3/4">
        <Carousel
         className="w-full"
         >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className={`relative h-[400px] px-10 rounded-lg overflow-hidden ${slide.background}`}>
                    <div className="absolute inset-0 flex items-center justify-between p-12">
                      <div className="text-white">
                        {slide.logo && (
                          <img
                            src={slide.logo}
                            alt="Brand Logo"
                            className="w-12 h-12 mb-4"
                          />
                        )}
                        <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                        <p className="text-2xl mb-6">{slide.subtitle}</p>
                        <Link
                          href="#"
                          className="inline-flex items-center px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                        >
                          {slide.cta}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                      <img
                        src={slide.image}
                        alt="Product"
                        className="w-2/3 h-auto object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

