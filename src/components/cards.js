import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class cards extends Component {
    render() {
        return(
            <Card style={{ width: '16rem', padding: '0' }}>
                <Card.Body>
                    <Row>
                        <Card.Title as={Col}>a</Card.Title>
                        <Card.Title as={Col}>b</Card.Title>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default cards;