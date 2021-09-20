import React, { useEffect, useState } from "react";
import Products from "../components/Products.js";
// import data from "../data.js";
import axios from "axios";
import LoadingBox from "../components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  //Hook to show loading
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products"); //array in backend will be transformed to the data in frontend
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger"> {error}</MessageBox>
      ) : (
        <div classNameName="row center">
          {products.map((products) => (
            <Products key={products._id} products={products} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
