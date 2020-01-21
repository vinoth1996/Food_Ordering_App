import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar';
import Cards from './components/Cards';
import { Jumbotron, Col, Container, Row } from 'react-bootstrap';

function App() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    foods();
  }, [])

  const foods = async() => {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
    const data = await response.json();
    setItems(data);
  }

  let foodItems = items.map((item, i) => {
    return(
      <Col sm="3">
        <Cards key={i} itemName={item.itemname} price={item.price}/>
        <br/>
      </Col>
    )
  })

  return (
    <Fragment>
      <NavigationBar />
      <div className="food">
        
          <Container>
          <Jumbotron>
            <Row>
            {foodItems}
            
            </Row>
            </Jumbotron>
          </Container>
        {/* {
          items.map((item, i) => {
            return(
              <div className="card-columns">
                <Cards key={i} itemName={item.itemname} price={item.price} />
              </div>
            )
          })
        } */} 
        
      </div>
    </Fragment>
  );
}

export default App;
