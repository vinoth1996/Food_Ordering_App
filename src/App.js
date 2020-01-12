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
    const recipe = data.map(food => {
      return food;
    })
    setItems(recipe);
  }

  return (
    <div className="App">
      <NavigationBar />
      <br />
      <Cards itemName={items} />
    </div>
  );
}

export default App;
