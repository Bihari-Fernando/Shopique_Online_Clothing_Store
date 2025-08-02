import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
      <Link
        to={`/product/${product.id}`}
        state={{ product }}
        className="text-decoration-none text-dark"
        style={{ width: "12rem" }}
      >
        <Card
          className="border-2 m-2 rounded-xl shadow-sm transition-transform duration-200 hover:scale-105 hover:border-primary-500 hover:shadow-lg"
          style={{ width: "240px", height: "380px", borderColor: "#CECECE", }}
        >
          <Card.Img
            variant="top"
            src={`http://localhost:8000${product.image}`}
            style={{
              height: "250px",
              objectFit: "cover",
              objectPosition: "top",
              width: "100%",
              borderRadius: "0.5rem",
            }}
          />

          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title style={{ fontSize: "1rem", height: "40px", marginBottom: "1rem" }}>
                {product.name}
              </Card.Title>
              <Card.Text style={{ fontSize: "0.9rem", height: "40px", overflow: "hidden" }}>
                Price: ${product.price} <br />
                Size: {product.sizes?.join(", ")}
              </Card.Text>
            </div>
            <div className="text-primary mt-auto" style={{ fontSize: "0.85rem" }}>
              View 
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ItemCard;
