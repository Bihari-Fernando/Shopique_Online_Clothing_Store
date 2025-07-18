// src/components/Product/ProductView.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProductView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category;

  if (!category) {
    return (
      <div className="text-center mt-10 text-xl font-medium">
        <p>Category not found.</p>
        <Button className="mt-3" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={category.image}
          alt={category.name}
          className="w-full max-w-md rounded-lg shadow-md object-cover"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{category.name}</h2>
          <p className="text-lg">Price: <span className="font-semibold">${category.price}</span></p>
          <p className="text-lg">Size: <span className="font-semibold">{category.size}</span></p>
          <p className="text-lg">Color: <span className="font-semibold">{category.color}</span></p>
          <Button variant="primary" onClick={() => navigate(-1)}>Back to Products</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
