import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBarComponent = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="#home">Beelicious</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar"/>
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto">
                    <Nav.Link href="#recipes">Recipes</Nav.Link>
                    <Nav.Link href="#articles">Articles</Nav.Link>
                    <Nav.Link href="#organization">Organization</Nav.Link>
                    <Nav.Link href="#donate">Donate</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarComponent;