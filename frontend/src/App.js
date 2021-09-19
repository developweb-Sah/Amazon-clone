import React from "react";
import data from "./data.js";

function App() {
  return (
    <div className="grid-container">
      <header className="row ">
        <div>
          <a className="brand" href="index.html">
            Amazon
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="singin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div classNameName="row center">
          {data.products.map((products) => (
            <div className="card">
              <a href="product.html">
                {/* <!-- Image size:680px by 830px --> */}
                <img
                  className="medium"
                  src={products.image}
                  alt={products.name}
                />
              </a>
              <div key={products._id} className="card-body">
                <a href={`/products/${products._id}`}>
                  <h2>{products.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${products.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
