export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
};
  
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
  
  