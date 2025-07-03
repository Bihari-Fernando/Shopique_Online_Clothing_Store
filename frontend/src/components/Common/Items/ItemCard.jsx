import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
      <Card style={{ width: '16rem' }} className="border-1 m-2 shadow">
        <Card.Img 
          variant="top" 
          src={item.image} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Price: ${item.price} <br />
            Size: {item.size}
          </Card.Text>
          <Button  as={Link} to={`/item/${item.id}`} state={{ item }} variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
