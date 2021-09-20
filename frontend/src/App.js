import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
