import React, { useState } from 'react';
import { Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

function Cards({itemName, price}) {

    const [count, setCount] = useState(0);

        return(
            <Card body border="light" className="shadow-sm" style={{ height: '9rem', width: '12rem', marginBottom: '30px' }}>
                <Row>
                    <Card.Title><h6>{itemName}</h6></Card.Title>
                    <Card.Title as={Col}><h6>&#8377; {price}</h6></Card.Title>
                </Row>
                <ButtonGroup>
                    <Button variant="none" onClick={() => setCount(count - 1)} style={{ borderColor: 'yellow', boxShadow: 'none' }}>-</Button>
                    <Button variant="none" style={{ borderColor: 'yellow', boxShadow: 'none' }}>{count}</Button>
                    <Button variant="none" onClick={() => setCount(count + 1)} style={{ borderColor: 'yellow', boxShadow: 'none' }}>+</Button>
                </ButtonGroup>                                
            </Card>
        );
}

export default Cards;