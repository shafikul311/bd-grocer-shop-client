import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';



const Orders = () => {

    const [orders , setOrders] = useState([])


    useEffect(() => {
        const url = `http://localhost:5080/orders`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, []);


     
  
    return (
        <div>

            <h3>Here is all of your order List</h3> <hr/>

            {
              orders.length === 0 && <div style={{paddingLeft:'40%', paddingTop:'3%'}}> 
                <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
              </div>

            
        }
           {
               orders.map((order, _id) => <OrderList key={_id} order={order} ></OrderList>)
           }
            
        </div>
    );
};

export default Orders;