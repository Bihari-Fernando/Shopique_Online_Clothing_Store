import React from 'react';
import ProductCard from './ProductCard';

const ProductCardGrid = ({ categories }) => {
  return (
    <div className="py-10 px-4 dark:bg-gray-900 dark:text-white">
      <div>
        <p className="text-3xl font-semibold text-center mb-8">Categories</p>
      </div>  
      <div className="flex flex-wrap justify-center gap-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <ProductCard key={category.id || category.name} category={category} />
          ))
        ) : (
          <p className="text-center">No items match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCardGrid;
