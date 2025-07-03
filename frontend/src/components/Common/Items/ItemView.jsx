import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';

const ItemView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity: 1 });
    //alert(`${item.name} has been added to your cart!`);
  };

  if (!item) {
    return (
      <div className="text-center mt-10 text-xl font-medium">
        <p>Product not found.</p>
        <Button className="mt-3" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={item.image}
          alt={item.name}
          className="w-full max-w-md rounded-lg shadow-md object-cover"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <p className="text-lg">Price: <span className="font-semibold">${item.price}</span></p>
          <p className="text-lg">Size: <span className="font-semibold">{item.size}</span></p>
          <p className="text-lg">Color: <span className="font-semibold">{item.color}</span></p>
          <div className="flex gap-3">
            <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>Back to Products</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
