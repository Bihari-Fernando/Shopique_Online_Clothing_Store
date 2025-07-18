import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Common/Hero/Hero";
import ProductCardGrid from "../Common/Products/ProductCardGrid";
import ItemCardGrid from "../Common/Items/ItemCardGrid";
import Navbar from "../Common/Navbar/Navbar";
import CartDrawer from "../Common/Cart/CartDrawer";
import Footer from "../Common/Footer/Footer";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

  return (
    <div>
      <Navbar/>
      <CartDrawer/>
      <Hero />
      <ProductCardGrid categories={categories} />
      <div>
        <p className="text-3xl font-semibold text-center mb-8">Top Items</p>
      </div> 
      <ItemCardGrid products={products} />
      <Footer/>
    </div>
  );
};

export default HomePage;
