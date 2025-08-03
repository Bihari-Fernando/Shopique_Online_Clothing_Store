import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartDrawer from "../../Common/Cart/CartDrawer";

const ItemView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const { addToCart } = useContext(CartContext);

  const [mainImage, setMainImage] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;
  const getFullUrl = (url) =>
    url?.startsWith("http") ? url : `${BASE_URL}${url}`;

  const displayedMainImage = mainImage
    ? getFullUrl(mainImage)
    : getFullUrl(product?.image);

  let galleryImages = [];
  if (product?.gallery) {
    try {
      galleryImages =
        typeof product.gallery === "string"
          ? JSON.parse(product.gallery)
          : Array.isArray(product.gallery)
          ? product.gallery
          : [];
    } catch {
      galleryImages = [];
    }
  }

  let sizes = [];
  try {
    sizes = Array.isArray(product.sizes)
      ? product.sizes
      : JSON.parse(product.sizes || "[]");
  } catch {
    sizes = [];
  }

  let colors = [];
  try {
    colors = Array.isArray(product.colors)
      ? product.colors
      : JSON.parse(product.colors || "[]");
  } catch {
    colors = [];
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both a size and color before adding to cart.");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });

    alert(
      `${product.name} (Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}) has been added to your cart!`
    );
  };

  if (!product) {
    return (
      <div className="text-center mt-10 text-xl font-medium">
        <p>Product not found.</p>
        <Button className="mt-3" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <CartDrawer />
      <div className="container mx-auto my-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left: Images */}
          <div>
            <img
              src={displayedMainImage}
              alt={product.name}
              className="w-full max-w-md rounded-lg shadow-md object-cover mb-4"
            />

            {galleryImages.length > 0 && (
              <div className="flex gap-3 overflow-x-auto max-w-md">
                {[product.image, ...galleryImages].map((img, idx) => (
                  <img
                    key={idx}
                    src={getFullUrl(img)}
                    alt={`${product.name} - view ${idx + 1}`}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                      getFullUrl(img) === displayedMainImage
                        ? "border-teal-600"
                        : "border-transparent"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-lg">
              Price: <span className="font-semibold">${product.price}</span>
            </p>

            {/* Sizes */}
            {sizes.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">Available Sizes:</span>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-1 rounded border font-medium ${
                        selectedSize === size
                          ? "bg-teal-800 text-white"
                          : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {colors.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">Available Colors:</span>
                <div className="flex gap-2 flex-wrap">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-1 rounded border font-medium ${
                        selectedColor === color
                          ? "bg-teal-800 text-white"
                          : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Quantity Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Select Quantity:</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                >
                  −
                </Button>
                <span className="text-lg">{quantity}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Size Chart */}
            {product.size_chart && (
              <div>
                <button
                  onClick={() => setShowSizeChart(true)}
                  className="text-gray-300 underline hover:text-green-800 text-sm"
                >
                  View Size Chart
                </button>

                {showSizeChart && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="relative bg-white p-4 rounded-lg shadow-xl max-w-lg w-full mx-4">
                      <button
                        onClick={() => setShowSizeChart(false)}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
                        aria-label="Close"
                      >
                        ×
                      </button>
                      <img
                        src={getFullUrl(product.size_chart)}
                        alt="Size Chart"
                        className="w-full h-auto rounded border border-gray-300"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {product.description && (
              <p className="text-md mt-2">
                <span className="font-semibold">Description: </span>
                {product.description}
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <Button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-primary to-secondary hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded shadow"
              >
                Add to Cart
              </Button>
              <Button
                onClick={() => navigate(-1)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded shadow"
              >
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemView;
