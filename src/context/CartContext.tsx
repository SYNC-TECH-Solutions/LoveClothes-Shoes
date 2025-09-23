'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { Product } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Lazy initialization from localStorage
    if (typeof window === 'undefined') {
        return [];
    }
    try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        return [];
    }
  });

  useEffect(() => {
    // Persist cart to localStorage
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error("Failed to save cart to localStorage", error);
    }
  }, [cart]);

  const addToCart = (product: Product, size: string) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.size === size
      );

      let newCart: CartItem[];

      if (existingItemIndex > -1) {
        // Update quantity if item already exists
        newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
      } else {
        // Add new item
        newCart = [...prevCart, { product, quantity: 1, size }];
      }
      
      toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your cart.`,
      });

      return newCart;
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart(prevCart => prevCart.filter(item => !(item.product.id === productId && item.size === size)));
     toast({
        title: "Item removed",
        description: `The item has been removed from your cart.`,
     });
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
        title: "Cart cleared",
        description: `Your shopping cart has been emptied.`,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
