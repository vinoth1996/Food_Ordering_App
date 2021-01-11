import React from 'react';
import Nav from './NavBar';
import { useSelector } from 'react-redux';

function Cart({message, count, itemName}) {
    const orders = useSelector(state => state.addedItems);
    console.log(orders)
    return(
        <>
            <Nav />
            <p style={{ textAlign: 'center', fontSize: '2em' }}>Your Order details</p>
            {
                orders.map((item, index) => {
                    return(
                        <div key={index} style={{ textAlign: 'center', fontSize: '2em' }}>
                            <p>{item.name} : {item.quantity}</p>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Cart;