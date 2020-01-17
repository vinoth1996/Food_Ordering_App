import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Form, FormControl } from 'react-bootstrap'; 

function NavBar() {
    return(
        <Navbar className="bg-warning justify-content-center" expand="lg" sticky="top">
            <Navbar.Brand href="#"><FontAwesomeIcon icon={faHamburger} /></Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="search the food" className="mr-sm-2" style={{ width: '18rem' }} />  
            </Form>
        </Navbar>                                
    );
}

export default NavBar;