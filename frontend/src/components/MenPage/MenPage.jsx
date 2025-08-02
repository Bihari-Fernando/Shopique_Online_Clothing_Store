import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSidebar from "../Common/Filter/FilterSidebar";
import ItemCardGrid from "../Common/Items/ItemCardGrid";
import Navbar from "../Common/Navbar/Navbar";
import CartDrawer from "../Common/Cart/CartDrawer";
import Footer from "../Common/Footer/Footer";

const MenPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedColor, setSelectedColor] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/men")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch men's products", err));
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

  // ✅ Clean and accurate filter logic
  const filteredItems = products.filter((product) => {
    const matchesSize =
      selectedSize === "All" || product.sizes.includes(selectedSize);

    const matchesColor =
      selectedColor === "All" ||
      product.colors.some(
        (color) => color.toLowerCase() === selectedColor.toLowerCase()
      );

    const matchesPrice = filterByPrice(product.price, selectedPrice);

    return matchesSize && matchesColor && matchesPrice;
  });

  return (
    <div>
      <Navbar />
      <CartDrawer />
      <div className="flex flex-col md:flex-row min-h-screen">
        <FilterSidebar
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
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

export default MenPage;
