import React from 'react';

const OrderList = (props) => {
    // console.log(props)

    const {name ,price , OrderTime} = props.order

    return (
        <div className="m-3" style={{backgroundColor:'#70a1ff'}}>
            
            <ul >
                <li> <h6  className="shadow p-3 mb-5 bg-body rounded"> {name} | Price:{price} | Ordered Time :{OrderTime}</h6></li>
            </ul>
            
        </div>
    );
};

export default OrderList;