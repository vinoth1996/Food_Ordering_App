import React from 'react';
import Nav from './NavBar'

function Cart() {
    return(
        <div>
            <Nav />
            <p style={{ textAlign: 'center', fontSize: '2em' }}>Your order details</p>
        </div>
    );
}

export default Cart;