export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
    
  }
  
  export interface BillingDetails {
    firstName: string
    companyName?: string
    streetAddress: string
    apartment?: string
    town: string
    phoneNumber: string
    emailAddress: string
    saveInformation: boolean
  }
  
  