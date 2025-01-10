import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const stats = [
  { number: '10k', label: 'Sellers active our site' },
  { number: '33k', label: 'Monthly Product Sale' },
  { number: '45k', label: 'Customer active in our site' },
  { number: '25k', label: 'Annual gross sale in our site' },
]

const team = [
  {
    name: 'Momin',
    role: 'Founder & Chairman',
    image: '/images/o.png',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Umer',
    role: 'Managing Director',
    image: '/images/q.png',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Bilal',
    role: 'Product Designer',
    image: '/images/o.png',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
    },
  },
]

const services = [
  {
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
    icon: '🚚',
  },
  {
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    icon: '🎧',
  },
  {
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
    icon: '💰',
  },
]

export default function AboutPage() {
  return (
    <div>   
      <Navbar />
    <div className="container mx-auto px-20 py-40">
      {/* Story Section */}
      <div className="mb-20 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Our Story</h1>
          <p className="text-gray-600">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide range of
            tailored marketing, data and service solutions, Exclusive has 10,500
            sellers and 300 brands and serves 3 millions customers across the region.
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 Million products to offer, growing at a very
            fast. Exclusive offers a diverse assortment in categories ranging from
            consumer.
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/n.png"
            alt="Shopping Experience"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-20 grid grid-cols-2 py-16 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative rounded-lg border p-8 text-center transition-all  hover:bg-red-500 hover:text-white"
          >
            <div className="text-3xl font-bold">{stat.number}</div>
            <div className="mt-2 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-54 h-full  transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mb-4 text-gray-600">{member.role}</p>
              <div className="flex justify-center gap-4">
                <Link href={member.social.facebook} className="text-gray-400 hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href={member.social.twitter} className="text-gray-400 hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href={member.social.linkedin} className="text-gray-400 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="grid gap-8 md:grid-cols-3 py-16 px-10">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
              {service.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />

  </div>
  )
}
