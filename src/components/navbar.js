import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import { Navbar, Form, FormControl } from 'react-bootstrap'; 

class navbar extends Component {
    render() {
        return(
            <Navbar className="bg-warning justify-content-center" expand="lg" sticky="top">
                <Navbar.Brand href="#"><FontAwesomeIcon icon={faUtensils} /></Navbar.Brand>
                <Form inline>
                  <FormControl type="text" placeholder="search the food" className="mr-sm-2" />  
                </Form>
            </Navbar>                                
        );
    }
}

export default navbar;