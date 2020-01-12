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
    const recipe = data.map((datas, i) => {
      // const arr = []
      // var items = {}
      // items.name = datas.itemname
      // items.price = datas.price
      // arr.push(items)
      // console.log(datas.itemname)
      return datas.itemname;
    })
    setItems(recipe);
    // console.log(recipe);
  }

  console.log(items)

  // const filteredItems = items.map(item => {
  //   return item;
  // })

  return (
    <div className="App">
      <NavigationBar />
      <br />
      {/* {items.map(item => */}
        <Cards itemName={items} />
        <br />
      {/* )} */}
    </div>
  );
}

export default App;
