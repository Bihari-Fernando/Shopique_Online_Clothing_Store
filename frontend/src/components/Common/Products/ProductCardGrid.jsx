import React from 'react';
import ProductCard from './ProductCard';
import Darkmode from '../Navbar/Darkmode';

const ProductCardGrid = ({ categories }) => {
  return (
    <div className="m-20 dark:bg-gray-900 dark:text-white">
      <div>
        <p className="text-3xl font-semibold text-center mb-8">Products</p>

      </div>  
      <div className="flex flex-wrap justify-center gap-4">
        {categories.length > 0 ? (
          categories.map((category, index) => <ProductCard key={index} category={category} />)
        ) : (
          <p className="text-center">No items match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCardGrid;
