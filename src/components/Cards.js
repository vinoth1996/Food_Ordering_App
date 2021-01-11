import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

function Cards({itemName, price}) {

    const dispatch = useDispatch();
    let addedItems = [];
    addedItems = useSelector(state => state.addedItems)
    let food = addedItems.find(item => item.name === itemName)
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    
    const addButton = () => {
        setClicked(true);
    }

    // const decreaseQuantity = () => {
    //     let quantity = count > 0? setCount(count - 1): setCount(0)
    //     handleQuantity(count, itemName);
    // }

    // const increaseQuantity = () => {
    //     let quantity = count>=0? setCount(count + 1): setCount(0)
    //     handleQuantity(count, itemName);
    // }

    // const handleQuantity = (count, itemName) => {
    //     this.props.addToCart(count, itemName)        
    // }

    return(
        <Card body border="light" className="shadow-sm" style={{ height: '9rem', width: '12rem', marginBottom: '10px', margin: '5px' }}>
            <Row>
                <Card.Title><h6>{itemName}</h6></Card.Title>
                <Card.Title as={Col}><h6>&#8377; {price}</h6></Card.Title>
            </Row>
            {   clicked === false ? 
                <Button variant="none" onClick={addButton} style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px", borderRadius: "25px", padding: "7px 30px" }}>Add</Button>:
                <>
                    <ButtonGroup>
                        <Button variant="none" onClick={() => dispatch({ type: 'decreaseQuantity', name: itemName, price: price })} style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>-</Button>
                        {
                            food ?
                            <Button variant="none" style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>{food && food.quantity}</Button>
                            :
                            <Button variant="none" style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>0</Button>
                        }
                        {/* <Button variant="none" style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>{count}</Button> */}
                        <Button variant="none" onClick={() => dispatch({ type: 'increaseQuantity', name: itemName, price: price })} style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>+</Button>
                    </ButtonGroup>
                </>
            }
        </Card>
    );
}

export default Cards;
