"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, CartContextType } from '../app/types/cart';

// Define CartProviderProps to include children
type CartProviderProps = {
  children: React.ReactNode;
};

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to manage state
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Load cart from localStorage if available
  const loadCartFromLocalStorage = (): CartItem[] => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  };

  const [cart, setCart] = useState<CartItem[]>(loadCartFromLocalStorage);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
