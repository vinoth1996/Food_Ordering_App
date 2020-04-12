import React from 'react';
import Card from './Cards'

function CardList({foodItem}) {
    return(
        foodItem.map((item) => {
            return (
                <div>
                    <Card key={item.itemname} itemName={item.itemname} price={item.price}/>
                </div>
            )
        })
    );
}

export default CardList;