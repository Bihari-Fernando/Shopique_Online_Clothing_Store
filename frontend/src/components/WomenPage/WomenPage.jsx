import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSidebar from '../Common/Filter/FilterSidebar';
import ItemCardGrid from '../Common/Items/ItemCardGrid';

const WomenPage = () => {
  const [items, setItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedColor, setSelectedColor] = useState('All');

  useEffect(() => {
    axios.get("http://localhost:8000/api/women-products?category=Women's")
      .then(res => setItems(res.data))
      .catch(err => console.error("Failed to fetch women's products", err));
  }, []);

  const filterByPrice = (price, range) => {
    switch (range) {
      case 'under30':
        return price < 30;
      case '30to60':
        return price >= 30 && price <= 60;
      case 'above60':
        return price > 60;
      default:
        return true;
    }
  };

  // ✅ Filter logic
  const filteredItems = items.filter(item =>
    (selectedSize === 'All' || item.size === selectedSize) &&
    (selectedColor === 'All' || item.color === selectedColor) &&
    filterByPrice(item.price, selectedPrice)
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <FilterSidebar
        selectedCategory={selectedSize}
        setSelectedCategory={setSelectedSize}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ItemCardGrid items={filteredItems} />
    </div>
  );
};

export default WomenPage;
