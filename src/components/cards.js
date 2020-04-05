import React, { useState } from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

function Cards({itemName, price}) {

    const [count, setCount] = useState(0);

        return(
            <Card body border="light" className="shadow-sm" style={{ height: '9rem', width: '12rem', marginBottom: '10px', margin: '5px' }}>
                <Row>
                    <Card.Title><h6>{itemName}</h6></Card.Title>
                    <Card.Title as={Col}><h6>&#8377; {price}</h6></Card.Title>
                </Row>
                <ButtonGroup>
                    <Button variant="none" onClick={() => count>0? setCount(count - 1): setCount(0)} style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>-</Button>
                    <Button variant="none" style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>{count}</Button>
                    <Button variant="none" onClick={() => count>=0? setCount(count + 1): setCount(0)} style={{ borderColor: 'yellow', boxShadow: 'none', marginTop: "30px" }}>+</Button>
                </ButtonGroup>                                
            </Card>
        );
}

export default Cards;