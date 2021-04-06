import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [product, setProducts] = useState([]);

  const { _id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5080/products/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data[0]));
  }, [_id]);

  const handleCheckOut = () => {
    const orderDetails = {
      ...loggedInUser,
      ...product,
      OrderTime: new Date().toDateString(),
    };


    //   console.log('product checked')

    fetch("http://localhost:5080/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then(res => res.json())

      .then((data) => {

        if (data) {
          console.log("Order Placed");
         
        }
      });
  };

  const { name, price } = product;

  return (
    <div className="m-2 shadow-sm p-3 bg-body rounded">
      <h1>Checkout</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <h5>{name}</h5>
              </td>
              <td>1</td>
              <td>
                <h5>{price}</h5>
              </td>
            </tr>
          </tbody>
        </table>

        <button onClick={handleCheckOut} className="btn btn-primary float-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
