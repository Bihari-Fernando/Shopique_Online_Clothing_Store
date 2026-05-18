import React, {
  createContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Load cart from localStorage initially
  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cartItems");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // Load cart from database if user logged in
  useEffect(() => {

    const fetchCart = async () => {

      try {

        const token = localStorage.getItem("token");

        if (!token) return;

        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/cart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCartItems(res.data);

      } catch (error) {

        console.error("Error fetching cart:", error);

      }
    };

    fetchCart();

  }, []);

  const toggleCart = () => {

    setIsCartOpen((prev) => !prev);

  };

  // Add item to cart
  const addToCart = async (product) => {

    try {

      const token = localStorage.getItem("token");

      // Update frontend cart immediately
      setCartItems((prev) => {

        const existingItemIndex = prev.findIndex(
          (i) =>
            i.id === product.id &&
            i.size === product.size &&
            i.color === product.color
        );

        if (existingItemIndex !== -1) {

          const updatedCart = [...prev];

          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity:
              updatedCart[existingItemIndex].quantity +
              (product.quantity || 1),
          };

          return updatedCart;

        } else {

          return [
            ...prev,
            {
              ...product,
              quantity: product.quantity || 1,
            },
          ];
        }
      });

      // Save to database if logged in
      if (token) {

        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/cart/add`,
          {
            product_id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity || 1,
            size: product.size,
            color: product.color,
            image: product.image,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

    } catch (error) {

      console.error("Error adding to cart:", error);

    }
  };

  // Backend quantity update helper
  const updateQuantityBackend = async (
    category,
    id,
    action
  ) => {

    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/products/${category}/${id}/quantity`,
        { action }
      );

      return res.data;

    } catch (error) {

      console.error(
        "Error updating quantity:",
        error
      );

      alert(
        "Failed to update stock quantity."
      );

      throw error;
    }
  };

  // Increase quantity
  const increaseQuantity = async (product) => {

    try {

      await updateQuantityBackend(
        product.category,
        product.id,
        "increment"
      );

      setCartItems((prev) =>
        prev.map((i) =>
          i.id === product.id &&
          i.size === product.size &&
          i.color === product.color
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        )
      );

    } catch (error) {

  console.error(
    "Error increasing quantity:",
    error
  );

  alert(
    "Failed to increase quantity."
  );
}
  };

  // Decrease quantity
  const decreaseQuantity = async (product) => {

    try {

      if (product.quantity <= 1) {

        removeFromCart(product);

        return;
      }

      await updateQuantityBackend(
        product.category,
        product.id,
        "decrement"
      );

      setCartItems((prev) =>
        prev.map((i) =>
          i.id === product.id &&
          i.size === product.size &&
          i.color === product.color
            ? {
                ...i,
                quantity: i.quantity - 1,
              }
            : i
        )
      );

    } catch (error) {

  console.error(
    "Error decreasing quantity:",
    error
  );

  alert(
    "Failed to decrease quantity."
  );
}
  };

  // Remove item
  const removeFromCart = (productToRemove) => {

    setCartItems((prev) =>
      prev.filter(
        (product) =>
          !(
            product.id === productToRemove.id &&
            product.size === productToRemove.size &&
            product.color ===
              productToRemove.color
          )
      )
    );
  };

  // Clear cart
  const clearCart = () => {

    setCartItems([]);

    localStorage.removeItem("cartItems");

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