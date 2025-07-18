import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"; // you can keep this or replace with your own button styling
import { CartContext } from "../Cart/CartContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ItemView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const { addToCart } = useContext(CartContext);

  const [mainImage, setMainImage] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);

  const BASE_URL = "http://localhost:8000";

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

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    alert(`${product.name} has been added to your cart!`);
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
      <div className="container mx-auto my-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div>
            {/* Main Image */}
            <img
              src={displayedMainImage}
              alt={product.name}
              className="w-full max-w-md rounded-lg shadow-md object-cover mb-4"
            />

            {/* Gallery Thumbnails */}
            {galleryImages.length > 0 && (
              <div className="flex gap-3 overflow-x-auto max-w-md">
                {[product.image, ...galleryImages].map((img, idx) => (
                  <img
                    key={idx}
                    src={getFullUrl(img)}
                    alt={`${product.name} - view ${idx + 1}`}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                      getFullUrl(img) === displayedMainImage
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-lg">
              Price: <span className="font-semibold">${product.price}</span>
            </p>
            <p className="text-lg">
              Size: <span className="font-semibold">{product.size}</span>
            </p>

            {/* Size Chart Link */}
            {product.size_chart && (
              <div>
                <button
                  onClick={() => setShowSizeChart(true)}
                  className="text-blue-600 underline hover:text-blue-800 text-sm"
                >
                  View Size Chart
                </button>

                {/* Tailwind Modal */}
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

            <p className="text-lg">
              Color: <span className="font-semibold">{product.color}</span>
            </p>
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
