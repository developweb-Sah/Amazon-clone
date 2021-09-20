import React from "react";
import Products from "../components/Products.js";
import data from "../data.js";

function HomeScreen() {
  return (
    <div classNameName="row center">
      {data.products.map((products) => (
        <Products key={products._id} products={products} />
      ))}
    </div>
  );
}

export default HomeScreen;
