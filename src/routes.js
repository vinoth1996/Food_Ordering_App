import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from './components/Cart';
// import history from './history';
import Home from './components/Home';

function routes({quantity}) {
    return(
        <BrowserRouter>
            {/* <Switch> */}
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/Cart' component={() => <Cart message="hello world" quantity={quantity}/>} />
            </div>    
            {/* </Switch> */}
        </BrowserRouter>
    )
}

export default routes;