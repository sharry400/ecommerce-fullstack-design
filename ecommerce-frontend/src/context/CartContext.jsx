import React, { createContext, useState, useEffect } from 'react';

// Context create kar rahe hain
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Local storage se purana cart uthayen (agar ho), warna khali array banayen
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Jab bhi cart update ho, usay Local Storage mein save kar dein
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Product ko cart mein add karne ka function
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        // Agar pehle se hai toh sirf quantity barhayen
        return prevCart.map(item => 
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Agar naya hai toh cart mein add karein
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Cart se product nikalne ka function
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};