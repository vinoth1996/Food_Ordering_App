import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, CardDeck } from 'react-bootstrap';
import Click from './Click';
import '../App.css';
import { fetchFoodData } from '../api/';
import NavigationBar from './NavBar';
import CardList from './CardList';
// import FoodCards from './Cards';

function Home() {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      foods();
    }, [])
  
    const foods = async() => {
      // const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
      // const data = await response.json();
      // setItems(data);
      // dispatch({ type: 'pushItems', items: data});
      const data = await fetchFoodData(dispatch);
      console.log(data);
      setItems(data);
    }

    const onSearchChange = (event) => {
      setSearch(event.target.value);
    }

    const filteredFoods = items.filter(item =>{
      return item.itemname.toLowerCase().includes(search.toLowerCase())
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