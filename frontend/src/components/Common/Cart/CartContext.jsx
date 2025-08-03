import React, { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (i) =>
          i.id === product.id &&
          i.name === product.name &&
          i.size === product.size &&
          i.color === product.color
      );

      if (existingItemIndex !== -1) {
        // Update quantity of the existing item
        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity:
            updatedCart[existingItemIndex].quantity + (product.quantity || 1),
        };
        return updatedCart;
      } else {
        // Add new item with quantity (default to 1 if not provided)
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  // Helper function to update quantity on backend
  const updateQuantityBackend = async (category, id, action) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/products/${category}/${id}/quantity`,
        { action }
      );
      return res.data;
    } catch (error) {
      console.error("Error updating quantity on backend:", error);
      alert("Failed to update stock quantity. Please try again.");
      throw error;
    }
  };

  const increaseQuantity = async (product) => {
    try {
      // Update backend quantity first
      await updateQuantityBackend(product.category, product.id, "increment");

      // Then update frontend cart
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === product.id &&
          i.name === product.name &&
          i.size === product.size &&
          i.color === product.color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } catch {
      // Error handled in updateQuantityBackend
    }
  };

  const decreaseQuantity = async (product) => {
    try {
      if (product.quantity <= 1) {
        // Remove if quantity would go below 1
        removeFromCart(product);
        return;
      }

      // Update backend quantity first
      await updateQuantityBackend(product.category, product.id, "decrement");

      // Then update frontend cart
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === product.id &&
          i.name === product.name &&
          i.size === product.size &&
          i.color === product.color
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
      );
    } catch {
      // Error handled in updateQuantityBackend
    }
  };

  const removeFromCart = (productToRemove) => {
    setCartItems((prev) =>
      prev.filter(
        (product) =>
          !(
            product.id === productToRemove.id &&
            product.name === productToRemove.name &&
            product.size === productToRemove.size &&
            product.color === productToRemove.color
          )
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
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
