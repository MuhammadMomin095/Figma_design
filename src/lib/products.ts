
export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images?: string[]
  category: string
  rating: number
  reviews: number
  colors?: string[]
  sizes?: string[]
  description?: string
}



export const products: Product[] = [
  {
    id: '1',
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: '/images/2.png',
    category: 'Bags',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '2',
    name: 'RGB liquid CPU Cooler',
    price: 1660,
    image: '/images/3.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '3',
    name: 'GP11 Shooter USB Gamepad',
    price: 550,
    image: '/images/g.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '4',
    name: 'Quilted Satin Jacket',
    price: 750,
    image: '/images/h.png',
    category: 'Fashion',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '5',
    name: 'ASUS FHD Gaming Laptop',
    price: 9600,
    image: '/images/c.png',
    category: 'Electronic',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '6',
    name: 'IPS LCD Gaming Monitor',
    price: 1160,
    image: '/images/k.png',
    category: 'Electronic',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '7',
    name: 'HAVIT HV-G92 Gamepad',
    price: 560,
    image: '/images/i.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '8',
    name: 'AK-900 Wired Keyboard',
    price: 200,
    image: '/images/j.png',
    category: 'Electronic',
    rating: 4.5,
    reviews: 65,
  },
]



export const relatedProducts: Product[] = [
  {
    id: '1',
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: '/images/2.png',
    category: 'Bags',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '2',
    name: 'RGB liquid CPU Cooler',
    price: 1660,
    image: '/images/3.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '3',
    name: 'GP11 Shooter USB Gamepad',
    price: 550,
    image: '/images/g.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '4',
    name: 'Quilted Satin Jacket',
    price: 750,
    image: '/images/h.png',
    category: 'Fashion',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '5',
    name: 'ASUS FHD Gaming Laptop',
    price: 9600,
    image: '/images/c.png',
    category: 'Electronic',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '6',
    name: 'IPS LCD Gaming Monitor',
    price: 1160,
    image: '/images/k.png',
    category: 'Electronic',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '7',
    name: 'HAVIT HV-G92 Gamepad',
    price: 560,
    image: '/images/i.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 65,
  },
  {
    id: '8',
    name: 'AK-900 Wired Keyboard',
    price: 200,
    image: '/images/j.png',
    category: 'Electronic',
    rating: 4.5,
    reviews: 65,
  },
]

