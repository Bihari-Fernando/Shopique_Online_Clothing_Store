import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSidebar from "../Common/Filter/FilterSidebar";
import ItemCardGrid from "../Common/Items/ItemCardGrid";
import Navbar from "../Common/Navbar/Navbar";
import CartDrawer from "../Common/Cart/CartDrawer";
import Footer from "../Common/Footer/Footer";

const TopRatedPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedColor, setSelectedColor] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

  // Filter top products
  const topProducts = products.filter((product) => product.top_product === 1);
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
  const filteredItems = topProducts.filter((topProduct) => {
    const matchesSize =
      selectedSize === "All" || topProduct.sizes?.includes(selectedSize);

    const matchesColor =
      selectedColor === "All" ||
      topProduct.colors?.some(
        (color) => color.toLowerCase() === selectedColor.toLowerCase()
      );

    const matchesPrice = filterByPrice(topProduct.price, selectedPrice);

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

export default TopRatedPage;
