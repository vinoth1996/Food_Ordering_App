import React from 'react';
// import { Card, Row, Col, Container } from 'react-bootstrap';

function cards({itemName}) {
        return(
            <div>
                {/* {
                    itemName.map(items => {
                    return (
                    <div>
                    <h1 key={items.itemnname}>{itemName}</h1>
                    <br />
                    </div>
                    )
                    })
                } */}
                <h1 key={itemName}>{itemName}</h1>
            </div>
            // <Container>
            //     <Row>
            //     <Col sm={3}>
            //         <Card style={{ width: '16rem' }}>
            //             <Card.Body>
            //                 <Row>
            //                     <Card.Title><h6>{this.props.itemName}</h6></Card.Title>
            //                     <Card.Title as={Col}><h6>{this.props.price}</h6></Card.Title>
            //                 </Row>
            //             </Card.Body>
            //         </Card>
            //     </Col>
            //     </Row>
            // </Container>
        );
}

export default cards;