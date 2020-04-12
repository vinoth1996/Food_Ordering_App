import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar';
import CardList from './components/CardList';
import { Button, Container, CardDeck, Jumbotron } from 'react-bootstrap';

function App() {
  
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    foods();
  }, [])

  const foods = async() => {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
    const data = await response.json();
    setItems(data);
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  }

  // let foodItems = items.map((item) => {
  //   return(
  //     <div>
  //       <Cards key={item.itemname} itemName={item.itemname} price={item.price} />
  //     </div>  
  //   )
  // })

  const filteredFoods = items.filter(item =>{
    return item.itemname.toLowerCase().includes(search.toLowerCase())
    //  ? (
    //   <div>
    //     <Cards key={item.itemname} itemName={item.itemname} price={item.price} />
    //   </div>
    // ) : (<div><h1>food not found</h1></div>);
  })

  return (
    <Fragment>
      <NavigationBar searchChange={onSearchChange}/>
      <div className="food">
        <Container style={{  }}>
          {/* <Jumbotron style={{ borderRadius: "0", backgroundSize: "100%"}}> */}
            <CardDeck>
              <CardList foodItem={filteredFoods}/>
            </CardDeck>
          {/* </Jumbotron>   */}
        </Container>
      </div>
      <div style={{ marginTop: "100px", marginBottom: "20px", textAlign: "center" }}>
        <Button variant="none" type="button" style={{ borderColor: 'yellow', boxShadow: 'none', borderRadius: "25px", padding: "7px 30px" }}>Checkout</Button>
      </div>
    </Fragment>
  );
}

export default App;