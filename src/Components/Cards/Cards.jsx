import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.descr}</Card.Text>
          <Card.Text>{item.imdb}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
