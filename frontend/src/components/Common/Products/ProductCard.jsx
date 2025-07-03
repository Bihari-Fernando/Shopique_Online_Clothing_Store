import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../../../assets/Hero/women.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(product.route);
  };

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4 "
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <Card style={{ width: "14rem" }} className="border-1 m-2 shadow">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
