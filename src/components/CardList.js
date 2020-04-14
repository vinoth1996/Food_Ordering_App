import React from 'react';
import Card from './Cards';

function CardList({foodItem}) {
    return(
        foodItem.map((item, index) => {
            return (
                <div>
                    <Card key={index} itemName={item.itemname} price={item.price}/>
                </div>
            )
        })
    );
}

export default CardList;