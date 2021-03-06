import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, price, image, _id } = props.product;
  // console.log(image)

  return (
    <div className="col-md-3 shadow-sm m-5 bg-body rounded pt-2 pb-2 bg-white">
      <img style={{ height: "250px" }} src={image} alt="" />
      <hr />
      <h3>{name}</h3>
      <h3>{price}</h3>
      <Link to={`/checkout/${_id}`}>
        <button className="btn btn-primary">
          {" "}
          <FontAwesomeIcon icon={faCartPlus} /> Buy Now
        </button>
      </Link>
    </div>
  );
};

export default Product;
