import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function cards({itemName, price}) {
        return(
            <Container>
                <Row>
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Row>
                                <Card.Title><h6>{itemName}</h6></Card.Title>
                                <Card.Title as={Col}><h6>{price}</h6></Card.Title>
                                <br />                                
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        );
}

export default cards;