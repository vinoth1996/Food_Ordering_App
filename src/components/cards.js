import React, { Component } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

class cards extends Component {
    render() {
        return(
            <Container>
                <Row>
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Row inline>
                                <Card.Title><h6>Non Veg Combo</h6></Card.Title>
                                <Card.Title as={Col}><h6>63.50</h6></Card.Title>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Row inline>
                                <Card.Title><h6>Non Veg Combo</h6></Card.Title>
                                <Card.Title as={Col}><h6>63.50</h6></Card.Title>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Row inline>
                                <Card.Title><h6>Non Veg Combo</h6></Card.Title>
                                <Card.Title as={Col}><h6>63.50</h6></Card.Title>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Row inline>
                                <Card.Title><h6>Non Veg Combo</h6></Card.Title>
                                <Card.Title as={Col}><h6>63.50</h6></Card.Title>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                
                </Row>
            </Container>
        );
    }
}

export default cards;