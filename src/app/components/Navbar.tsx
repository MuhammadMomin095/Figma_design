'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, Heart, ShoppingCart, User, ChevronDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '../components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden md:block" /> {/* Spacer */}
          <p className="text-sm text-center flex-1">
            Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
          </p>
          <Button variant="link" className="text-white text-sm hover:text-gray-200">
            ShopNow
          </Button>

          <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden md:flex gap-1">
                    English
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                  <DropdownMenuItem>Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="text-xl font-bold"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    Exclusive
                  </Link>
                  <nav className="flex flex-col gap-2">
                    <Link href="/" className="hover:text-gray-100 text-gray-200">
                      Home
                    </Link>
                    <Link href="Contact" className="hover:text-gray-100 text-gray-200">
                      Contact
                    </Link>
                    <Link href="About" className="hover:text-gray-100 text-gray-200">
                      About
                    </Link>
                    <Link href="Signup" className="hover:text-gray-100 text-gray-200">
                      Sign Up
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              Exclusive
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link href="Contact" className="hover:text-gray-600">
                Contact
              </Link>
              <Link href="About" className="hover:text-gray-600">
                About
              </Link>
              <Link href="Signup" className="hover:text-gray-600">
                Sign Up
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center relative">
                <Input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-[300px] pr-8"
                />
                <Search className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>

              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>

              {/* Language Selector */}
              
            </div>
          </div>

          {/* Mobile Search (Conditional Render) */}
          {isSearchOpen && (
            <div className="md:hidden py-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full pr-8"
                />
                <Search className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

