import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar({totalItems}) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Dunn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">Historia</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tragos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Papas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Hamburguesas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <CartWidget totalItems={totalItems}/>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar