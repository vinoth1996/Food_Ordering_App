import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function cards({itemName}) {
        return(
            <Container>
                <Row>
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Row>
                                {
                                    itemName.map(items => { 
                                        return (
                                            <div>
                                                <Card.Title key={items.itemname}><h6>{items.itemname}</h6></Card.Title>
                                                <Card.Title as={Col} key={items.price.toString()}><h6>{items.price}</h6></Card.Title>
                                                <br />
                                            </div>
                                        )
                                    })  
                                }
                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        );
}

export default cards;