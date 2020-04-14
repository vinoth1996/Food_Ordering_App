import React from 'react';
import {useLocation, Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'; 

function NavBar({searchChange}) {

    let location = useLocation();

    return(
        <Navbar className="bg-warning justify-content-center" expand="lg" sticky="top">
            {
                location.pathname == '/'
                ?   <>
                        <Form inline>
                            <FormControl type="text" onChange={searchChange} placeholder="search the food" className="mr-sm-2" style={{ width: '18rem' }} />
                        </Form>
                    </>
                :   <>
                        <Navbar.Brand href="#">Orders</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Items</Nav.Link>
                        </Nav>
                    </>
            }                      
        </Navbar>                                
    );
}

export default NavBar;