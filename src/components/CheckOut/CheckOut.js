import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const[product ,setProducts] = useState([])

    const {_id} = useParams();
    // console.log(_id);

  useEffect(() => {
    const url =`http://localhost:5080/products/${_id}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>setProducts(data[0]))
    
  },[_id])

//   console.log(product.name)

  
const {name , price} = product


    return (
        <div className="m-5 shadow-sm p-3 mb-5 bg-body rounded">
            <h1>Checkout</h1>
           <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td><h5>{name}</h5></td>
                    <td>1</td>
                    <td><h5>{price}</h5></td>
                    </tr>
                   
                   
                </tbody>
                {/* <input className="btn btn-primary" type=" submit" value="Checkout"/> */}
                    <button  className="btn btn-primary">Checkout</button>
                </table>
        </div>
    );
};

export default CheckOut;