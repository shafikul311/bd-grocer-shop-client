import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderList from "./OrderList";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5080/orders?email=` + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h6 style={{ color: "#686de0", paddingBottom: "10px" }}>
        Hi {loggedInUser.name} Welcome to BD Grocer shop
      </h6>
      <h2 style={{ color: "#70a1ff", paddingBottom: "10px" }}>
        Here is all of your Ordered Items List
      </h2>

      {orders.length === 0 && (
        <div style={{ paddingLeft: "40%", paddingTop: "3%" }}>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      )}

      {orders.map((order, id) => (
        <OrderList key={id} order={order}></OrderList>
      ))}
    </div>
  );
};

export default Orders;
