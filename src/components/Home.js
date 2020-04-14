import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, CardDeck } from 'react-bootstrap';
import Click from './Click';
import '../App.css';
import NavigationBar from './NavBar';
import CardList from './CardList';

function Home() {
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

    const filteredFoods = items.filter(item =>{
        return item.itemname.toLowerCase().includes(search.toLowerCase())
        //  ? (
        //   <div>
        //     <Cards key={item.itemname} itemName={item.itemname} price={item.price} />
        //   </div>
        // ) : (<div><h1>food not found</h1></div>);
    })
    
    return(
        <div>
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
        {/* <Router> */}
        <div style={{ marginTop: "100px", marginBottom: "20px", textAlign: "center" }}>
          {/* <Link to="/cart">
          <Button variant="none" type="button" style={{ borderColor: 'yellow', boxShadow: 'none', borderRadius: "25px", padding: "7px 30px" }}>Checkout</Button>
          </Link> */}
          <Click />
        </div>
        {/* <Switch>
        <Route exact path='/cart' component={Cart}/>
        </Switch>
        </Router> */}
        {/* <Routes /> */}
        </div>
    );
}

export default Home;