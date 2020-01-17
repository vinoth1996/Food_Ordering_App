import React, { useState } from 'react';
import { Card, Row, Col, Container, ButtonGroup, Button } from 'react-bootstrap';

function Cards({itemName, price}) {

    const [count, setCount] = useState(0);

        return(
            <Container>
                <div className="row card-columns">
                    <Col>
                        <Card className="shadow-sm" style={{ height: '9rem', width: '12rem' }}>
                            <Card.Body>
                                <Row>
                                    <Card.Title><h6>{itemName}</h6></Card.Title>
                                    <Card.Title as={Col}><h6>&#8377;{price}</h6></Card.Title>
                                    <br />
                                    <ButtonGroup>
                                        <Button variant="none" onClick={() => setCount(count - 1)} style={{ borderColor: 'yellow', boxShadow: 'none' }}>-</Button>
                                        <Button variant="none" style={{ borderColor: 'yellow', boxShadow: 'none' }}>{count}</Button>
                                        <Button variant="none" onClick={() => setCount(count + 1)} style={{ borderColor: 'yellow', boxShadow: 'none' }}>+</Button>
                                    </ButtonGroup>                                
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </Container>
        );
}

export default Cards;