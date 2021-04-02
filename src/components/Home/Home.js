import React, { useEffect, useState } from "react";
import Product from "./Product";
import Search from "./Search";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5080/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  //  console.log(products.length)

  return (
    <div>
      <div>
        <Search />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 p-5">

        {
              products.length === 0 && <div style={{paddingLeft:'40%', paddingTop:'3%'}}> 
                <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
              </div>

            
        }
        
        {products?.map((product, _id) => (
          <Product key={_id} product={product}>
            {" "}
          </Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
