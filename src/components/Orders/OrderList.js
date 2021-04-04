import React from 'react';

const OrderList = (props) => {
    // console.log(props)

    const {name ,price , OrderTime} = props.order

    return (
        <div>
            <ul>
                <li> <h5  className="shadow p-3 mb-5 bg-body rounded"> {name} Price:{price} Ordered Time{OrderTime}</h5></li>
            </ul>
            
        </div>
    );
};

export default OrderList;