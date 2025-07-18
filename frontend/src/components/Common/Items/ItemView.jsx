import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ItemView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    alert(`${product.name} has been added to your cart!`);
  };

  const [mainImage, setMainImage] = useState(null);

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

  const BASE_URL = "http://localhost:8000";

  // Helper to get full URL of image
  const getFullUrl = (url) =>
    url?.startsWith("http") ? url : `${BASE_URL}${url}`;

  // Determine the main image to show (default to product.image)
  const displayedMainImage = mainImage
    ? getFullUrl(mainImage)
    : getFullUrl(product.image);

  // Parse gallery JSON if it's a string (depending on your API)
  let galleryImages = [];
  if (product.gallery) {
    if (typeof product.gallery === "string") {
      try {
        galleryImages = JSON.parse(product.gallery);
      } catch {
        galleryImages = [];
      }
    } else if (Array.isArray(product.gallery)) {
      galleryImages = product.gallery;
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div>
            {/* Main large image */}
            <img
              src={displayedMainImage}
              alt={product.name}
              className="w-full max-w-md rounded-lg shadow-md object-cover mb-4"
            />

            {/* Gallery thumbnails */}
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

          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-lg">
              Price: <span className="font-semibold">${product.price}</span>
            </p>
            <p className="text-lg">
              Size: <span className="font-semibold">{product.size}</span>
            </p>
            <p className="text-lg">
              Color: <span className="font-semibold">{product.color}</span>
            </p>
            <div className="flex gap-3 mt-4">
              <Button
                onClick={handleAddToCart}
                className="bg-green-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded shadow"
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
      <Footer/>
    </div>
  );
};

export default ItemView;
