import React from "react";
import data from "../data";
import Rating from "../components/Rating.js";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product not Found</div>;
  }
  return (
    <>
      <Link to="/">Back to results</Link>
      <div className="row top">
        <div className="col-2">
          <img
            className="large"
            style={{ width: "50rem" }}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-1">
          <ul>
            <li>{product.name}</li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />{" "}
            </li>
            <li>Price : ${product.price}</li>
            <li>Description : ${product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">: In Stock </span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
