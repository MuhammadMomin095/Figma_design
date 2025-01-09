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
  
  export interface WishlistItem extends Product {
    inWishlist: boolean
  }
  

  