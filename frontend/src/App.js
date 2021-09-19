import React from "react";
import Products from "./components/Products.js";
import data from "./data.js";

function App() {
  return (
    <div className="grid-container">
      <header className="row ">
        <div>
          <a className="brand" href="/">
            Amazon
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/singin">Sign In</a>
        </div>
      </header>
      <main>
        <div classNameName="row center">
          {data.products.map((products) => (
            <Products key={products._id} products={products} />
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
