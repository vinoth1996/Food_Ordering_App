import React from 'react';
import Nav from './NavBar'

function Cart({message}) {
    return(
        <>
            <Nav />
            <div style={{ textAlign: 'center', fontSize: '2em' }}>
                <p >Your order details</p>
                <p>{message}</p>
            </div>
        </>
    );
}

export default Cart;