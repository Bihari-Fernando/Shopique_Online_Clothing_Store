import React from 'react';

const FilterSidebar = ({
  selectedSize,
  setSelectedSize,
  selectedPrice,
  setSelectedPrice,
  selectedColor,
  setSelectedColor,
}) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $30', value: 'under30' },
    { label: '$30 - $60', value: '30to60' },
    { label: 'Above $60', value: 'above60' },
  ];
  const colors = ['All', 'Red', 'Blue', 'Black', 'White', 'Green'];

  return (
    <div className="w-full md:w-1/4 p-4 dark:bg-gray-800 dark:text-white border-r">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">size</h3>
        {sizes.map(size => (
          <div key={size}>
            <input
              type="radio"
              id={size}
              name="size"
              checked={selectedSize === size}
              onChange={() => setSelectedSize(size)}
              className="mr-2"
            />
            <label htmlFor={size}>{size}</label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        {priceRanges.map(range => (
          <div key={range.value}>
            <input
              type="radio"
              id={range.value}
              name="price"
              checked={selectedPrice === range.value}
              onChange={() => setSelectedPrice(range.value)}
              className="mr-2"
            />
            <label htmlFor={range.value}>{range.label}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        {colors.map(color => (
          <div key={color}>
            <input
              type="radio"
              id={color}
              name="color"
              checked={selectedColor === color}
              onChange={() => setSelectedColor(color)}
              className="mr-2"
            />
            <label htmlFor={color}>{color}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
