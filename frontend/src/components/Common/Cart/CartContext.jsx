// src/components/Cart/CartContext.jsx
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev); // ✅
  };

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.id === item.id &&
          i.name === item.name &&
          i.size === item.size &&
          i.color === item.color
      );

      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id &&
          i.name === item.name &&
          i.size === item.size &&
          i.color === item.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
