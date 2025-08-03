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
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
      .then((res) => {
    console.log("API Response:", res.data);  // 👈 ADD THIS LINE
    setProducts(res.data);                   // 👈 Might need to change this
  })
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

   // Filter top products
  const topProducts = products.filter((product) => product.top_product === 1);

  return (
    <div>
      <Navbar/>
      <CartDrawer/>
      <Hero />
      <ProductCardGrid categories={categories} />
      <div>
        <p className="text-3xl font-semibold text-center mb-8">Top Items</p>

      </div> 
      <ItemCardGrid products={topProducts} />
      <Footer/>
    </div>
  );
};

export default HomePage;
