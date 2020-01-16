import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function cards({itemName, price}) {
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
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </Container>
        );
}

export default cards;