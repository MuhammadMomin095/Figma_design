'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  icon: React.ElementType
}

const categories: Category[] = [
  { id: 'phones', name: 'Phones', icon: Smartphone },
  { id: 'computers', name: 'Computers', icon: Monitor },
  { id: 'smartwatch', name: 'SmartWatch', icon: Watch },
  { id: 'camera', name: 'Camera', icon: Camera },
  { id: 'headphones', name: 'HeadPhones', icon: Headphones },
  { id: 'gaming', name: 'Gaming', icon: Gamepad },
  
]

export default function CategoryBrowser() {
  const [activeCategory, setActiveCategory] = useState('camera')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
        <div className="flex gap-2">
          <div className="inline-block bg-red-500 text-white px-2 py-5 text-sm rounded-md mb-2">
          </div>
          <p className='text-2xl text-red-500 flex text-center items-center'>Categories</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Browse By Category</h2>
        </div>
        <div className="flex gap-2">
          <button 
            className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous categories"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next categories"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex flex-col items-center justify-center p-6 border rounded-lg transition-all hover:border-red-500",
                "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
                activeCategory === category.id ? "bg-red-500 text-white border-red-500" : "bg-white"
              )}
            >
              <Icon 
                className={cn(
                  "w-8 h-8 mb-3",
                  activeCategory === category.id ? "stroke-white" : "stroke-gray-600"
                )} 
              />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          )}
        )}
      </div>
    </div>
  )
}

