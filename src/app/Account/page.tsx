'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "../components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface UserProfile {
  firstName: string
  lastName: string
  email: string
  address: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function AccountPage() {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5235, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile update
    console.log('Updating profile:', profile)
  }

  const handleCancel = () => {
    // Reset form or navigate back
    console.log('Cancelled')
  }

  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>My Account</span>
        </div>
        <div className="text-sm">
          Welcome! <span className="text-[#DB4444]">Md Rimel</span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[250px,1fr]">
        {/* Sidebar Navigation */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 font-semibold">Manage My Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-[#DB4444]">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/account/address" className="text-gray-600 hover:text-[#DB4444]">
                  Address Book
                </Link>
              </li>
              <li>
                <Link href="/account/payment" className="text-gray-600 hover:text-[#DB4444]">
                  My Payment Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">My Orders</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account/returns" className="text-gray-600 hover:text-[#DB4444]">
                  My Returns
                </Link>
              </li>
              <li>
                <Link href="/account/cancellations" className="text-gray-600 hover:text-[#DB4444]">
                  My Cancellations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">My Wishlist</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/wishlist" className="text-gray-600 hover:text-[#DB4444]">
                  View Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-[#DB4444]">Edit Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">First Name</label>
                <Input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm">Last Name</label>
                <Input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">Email</label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm">Address</label>
                <Input
                  type="text"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="font-medium">Password Changes</h3>
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Current Password"
                  value={profile.currentPassword}
                  onChange={(e) => setProfile({ ...profile, currentPassword: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  value={profile.newPassword}
                  onChange={(e) => setProfile({ ...profile, newPassword: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={profile.confirmPassword}
                  onChange={(e) => setProfile({ ...profile, confirmPassword: e.target.value })}
                  className="h-12 rounded-md border-gray-200 bg-gray-50"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="h-12 px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-12 bg-[#DB4444] px-6 hover:bg-[#DB4444]/90"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />

</div>
  )
}

