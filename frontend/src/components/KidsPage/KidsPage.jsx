import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSidebar from "../Common/Filter/FilterSidebar";
import ItemCardGrid from "../Common/Items/ItemCardGrid";
import Navbar from "../Common/Navbar/Navbar";
import CartDrawer from "../Common/Cart/CartDrawer";
import Footer from "../Common/Footer/Footer";

const KidsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedColor, setSelectedColor] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/kids")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch kids's products", err));
  }, []);

  const filterByPrice = (price, range) => {
    switch (range) {
      case "under30":
        return price < 30;
      case "30to60":
        return price >= 30 && price <= 60;
      case "above60":
        return price > 60;
      default:
        return true;
    }
  };

  // ✅ Filter logic
  const filteredItems = products.filter(
    (product) =>
      (selectedSize === "All" || product.size === selectedSize) &&
      (selectedColor === "All" || product.color === selectedColor) &&
      filterByPrice(product.price, selectedPrice)
  );

  return (
    <div>
      <Navbar />
      <CartDrawer />
      <div className="flex flex-col md:flex-row min-h-screen">
        <FilterSidebar
          selectedCategory={selectedSize}
          setSelectedCategory={setSelectedSize}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <ItemCardGrid products={filteredItems} />
      </div>
      <Footer />
    </div>
  );
};

export default KidsPage;
