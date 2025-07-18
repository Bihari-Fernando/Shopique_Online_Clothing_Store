import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev); 
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.id === product.id &&
          i.name === product.name &&
          i.size === product.size &&
          i.color === product.color
      );

      if (existingItem) {
        return prev.map((i) =>
          i.id === product.id &&
          i.name === product.name &&
          i.size === product.size &&
          i.color === product.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((product) => product.id !== id));
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
