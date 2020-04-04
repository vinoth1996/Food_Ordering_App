import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar';
import Cards from './components/Cards';
import { Container } from 'react-bootstrap';

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
      <div>
        <Cards key={i} itemName={item.itemname} price={item.price} />
      </div>  
    )
  })

  return (
    <Fragment>
      <NavigationBar />
      <div className="food">
        <Container className="container">
          {foodItems}
        </Container>
      </div>
    </Fragment>
  );
}

export default App;