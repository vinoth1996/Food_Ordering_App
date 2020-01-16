import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import Cards from './components/cards';

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

  return (
    <div className="App">
      <NavigationBar />
      <br />
      {
        items.map((item, i) => {
          return(
            <div>
            <Cards key={i} itemName={item.itemname} price={item.price} />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
