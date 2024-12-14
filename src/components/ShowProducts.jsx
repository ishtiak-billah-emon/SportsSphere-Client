import React, { useEffect, useState } from "react";
import ShowAProduct from "./ShowAProduct";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        products.map(product => <ShowAProduct product={product}></ShowAProduct>)
      }
    </div>
  );
};

export default ShowProducts;
