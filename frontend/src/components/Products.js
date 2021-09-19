import React from "react";
import Rating from "./Rating";

function Products(props) {
  const { products } = props;

  return (
    <div className="card">
      <a href="/product">
        {/* <!-- Image size:680px by 830px --> */}
        <img className="medium" src={products.image} alt={products.name} />
      </a>
      <div key={products._id} className="card-body">
        <a href={`/products/${products._id}`}>
          <h2>{products.name}</h2>
        </a>
        <Rating rating={products.rating} numReviews={products.numReviews} />
        <div className="price">${products.price}</div>
      </div>
    </div>
  );
}

export default Products;
