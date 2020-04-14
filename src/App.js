import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavBar';
import CardList from './components/CardList';
// import Cart from './components/Cart';
import Click from './components/Click';
import Home from './components/Home';
import Cart from './components/Cart';
import Routes from './routes';

function App() {
  
  // const [items, setItems] = useState([]);
  // const [search, setSearch] = useState('');

  // useEffect(() => {
  //   foods();
  // }, [])

  // const foods = async() => {
  //   const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
  //   const data = await response.json();
  //   setItems(data);
  // }

  // const onSearchChange = (event) => {
  //   setSearch(event.target.value);
  // }

  // // let foodItems = items.map((item) => {
  // //   return(
  // //     <div>
  // //       <Cards key={item.itemname} itemName={item.itemname} price={item.price} />
  // //     </div>  
  // //   )
  // // })

  // const filteredFoods = items.filter(item =>{
  //   return item.itemname.toLowerCase().includes(search.toLowerCase())
  //   //  ? (
  //   //   <div>
  //   //     <Cards key={item.itemname} itemName={item.itemname} price={item.price} />
  //   //   </div>
  //   // ) : (<div><h1>food not found</h1></div>);
  // })

  return (
    <Fragment>
      {/* <Router>
        <div>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Cart' component={Cart} />
          </Switch>
        </div>
      </Router> */}
      <Routes />
    </Fragment>
  );
}

export default App;