import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageProductList = (props) => {
  const { name, price, _id } = props.product;

  const handleDeleteProduct = () => {
    console.log(_id);

    // fetch(`http://localhost:5080/products/${_id}`,{
    //   method: 'DELETE'
    // })
    // .then(res =>res.json())
    // .then(data =>console.log(data))
  };

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <FontAwesomeIcon className="fs-1 text-primary" icon={faPenSquare} />{" "}
          <FontAwesomeIcon
            onClick={handleDeleteProduct}
            className="fs-1 text-danger"
            icon={faTrashAlt}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ManageProductList;
