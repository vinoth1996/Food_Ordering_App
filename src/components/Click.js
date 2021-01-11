import React from 'react';
import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
// import history from '../history';
import Routes from '../routes';

function Click() {
    return(
        // <Router>
        <Link to="/Cart" style={{ textDecoration: 'none', color: 'black', borderColor: 'yellow', boxShadow: 'none', borderRadius: "25px", padding: "7px 30px" }}>
            {/* <Button variant="none" type="button" to="/Cart" style={{ borderColor: 'yellow', boxShadow: 'none', borderRadius: "25px", padding: "7px 30px" }}> */}
                Checkout
            {/* </Button> */}
        </Link>
        // </Router>
    );
}

export default Click;