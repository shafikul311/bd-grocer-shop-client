import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Product from "./Product";
import Search from "./Search";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const url = `http://localhost:5080/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div>
        <Search />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 p-5">
        {products?.map((product, id) => (
          <Product key={id} product={product}>
            {" "}
          </Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
