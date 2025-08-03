import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const backendBaseUrl = `${import.meta.env.VITE_API_BASE_URL}`;

const ProductCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(category.route);
  };

  const imageUrl = category.image.startsWith("http")
    ? category.image
    : backendBaseUrl + category.image;

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <Card
        className="overflow-hidden m-2 rounded-2xl border-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl d-flex flex-column"
        style={{
          width: "260px",
          height: "420px", // fixed total height
          borderColor: "#D1D5DB",
        }}
      >
        {/* Image container with fixed height */}
        <div style={{ position: "relative", height: "320px", flexShrink: 0 }}>
          <Card.Img
            variant="top"
            src={imageUrl}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          />
        </div>

        {/* Card body fills remaining space */}
        <Card.Body
          className="d-flex flex-column justify-content-center p-3"
          style={{ flexGrow: 1 }}
        >
          <Card.Title
            className="text-center text-dark fw-semibold"
            style={{ fontSize: "1.1rem" }}
          >
            {category.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
