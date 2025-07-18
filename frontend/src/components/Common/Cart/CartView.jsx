import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; 
import { useNavigate } from 'react-router-dom';

const CartView = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2>Your cart is empty.</h2>
        <Button className="mt-3" onClick={() => navigate('/')}>Go Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container my-10">
      <h2 className="mb-4 text-2xl font-bold text-center">Your Cart</h2>
      <div className="flex flex-col gap-4">
        {cartItems.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between p-4 border rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                className="rounded"
              />
              <div>
                <h5>{product.name}</h5>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-5 text-center">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
        <div className="flex gap-3 justify-center mt-3">
          <Button variant="warning" onClick={clearCart}>Clear Cart</Button>
          <Button variant="success">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
