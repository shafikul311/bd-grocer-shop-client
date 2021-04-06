import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ManageProductList from "./ManageProductList";



const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5080/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  
  return (
    <div className="container m-3 p-1">
      <div className="row">
        <div className="col-3 pt-4 bg-secondary">
          <Link to="/admin">
            <h2>
              {" "}
              <FontAwesomeIcon icon={faPlusCircle} /> Add Products{" "}
            </h2>
          </Link>
        </div>
        <div className="col-9  ">
          <h1>Manage Products</h1>
          <table className="table me-2 ">
            <thead>
              <tr className=" shadow p-3 mb-2 bg-body rounded">
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {products.map((product, _id) => (
              <ManageProductList key={_id} product={product}>
                {" "}
              </ManageProductList>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
