import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
// import history from './history';
import Home from './components/Home';

function routes() {
    return(
        <BrowserRouter>
            {/* <Switch> */}
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/Cart' component={Cart} />
            </div>    
            {/* </Switch> */}
        </BrowserRouter>
    )
}

export default routes;