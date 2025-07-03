import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Common/Hero/Hero";
import ProductCardGrid from "../Common/Products/ProductCardGrid";
import ItemCardGrid from "../Common/Items/ItemCardGrid";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

  return (
    <div>
      <Hero />
      <ProductCardGrid products={products} />
      <div>
        <p className="text-3xl font-semibold text-center mb-8">Top Items</p>
      </div> 
      <ItemCardGrid items={items} />
    </div>
  );
};

export default HomePage;
