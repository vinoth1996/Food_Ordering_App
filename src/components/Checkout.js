import React from 'react';

function Checkout({name, quantity}) {
    return(
        <div>
            <p>{name} {quantity}</p>
        </div>
    );
}

export default Checkout;