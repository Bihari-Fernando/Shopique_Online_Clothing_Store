// src/components/Cart/CartDrawer.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, removeFromCart, clearCart, isCartOpen, toggleCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <h3 className="text-xl font-bold">Your Cart</h3>
        <FaTimes onClick={toggleCart} className="cursor-pointer text-xl" />
      </div>

      {/* Cart Items */}
      <div className="p-4 overflow-y-auto flex-1">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((product, index) => (
              <div
                key={product.id || index}
                className="flex items-center justify-between gap-3 border-b pb-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ${product.price} × {product.quantity}
                  </p>
                </div>
                <Button size="sm" variant="outline-danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total & Actions */}
      {cartItems.length > 0 && (
        <div className="p-4 border-t border-gray-300 dark:border-gray-700">
          <h4 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h4>
          <div className="mt-3 flex gap-2">
            <Button variant="warning" onClick={clearCart} size="sm">Clear</Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                toggleCart();
                navigate('/cart');
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
