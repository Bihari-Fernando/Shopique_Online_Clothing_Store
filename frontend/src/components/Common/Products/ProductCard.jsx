import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const backendBaseUrl = "http://localhost:8000"; // Update if your backend URL is different

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
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <Card
        className="shadow-sm rounded overflow-hidden"
        style={{
          width: "20rem",
          border: "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={imageUrl}
            alt={category.name}
            style={{
              height: "240px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            className="card-image"
          />
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.25)",
              opacity: 0,
              transition: "opacity 0.3s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "600",
              fontSize: "1.1rem",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {category.name}
          </div>
        </div>
        <Card.Body className="text-center p-3">
          <Card.Title
            style={{
              fontWeight: "500",
              fontSize: "1rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={category.name}
          >
            {category.name}
          </Card.Title>
        </Card.Body>
      </Card>

      <style>
        {`
          .shadow-sm {
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }
          .shadow-sm:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }
          div:hover .card-image {
            transform: scale(1.1);
          }
          div:hover .overlay {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default ProductCard;
