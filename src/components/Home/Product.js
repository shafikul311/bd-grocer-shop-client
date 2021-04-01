import { Button } from "bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props);

  const { name, price, image } = props.product;
  return (
    <div className="col-md-4 shadow-sm p-3 mb-5 bg-body rounded p-2">
      <img style={{ height: "250px" }} src={image} alt="" />
      <hr />
      <h3>{name}</h3>
      <h3>{price}</h3>


      <Link to="/order">
      <button className="btn btn-primary">
        {" "}
        <FontAwesomeIcon icon={faCartPlus} /> Buy Now
      </button>

      </Link>
    </div>
  );
};

export default Product;
