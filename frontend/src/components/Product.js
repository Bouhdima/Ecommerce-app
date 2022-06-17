import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";

function Products(props) {
  const { product } = props;
  return (
    <Card className="text-center card-bg  ">
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          className="card-img-top img"
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <h5>
            <Card.Title>{product.name}</Card.Title>
          </h5>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
       />
        <Card.Text>
          <b>${product.price}</b>
        </Card.Text>
        <Button type="button">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;
