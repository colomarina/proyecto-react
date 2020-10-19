import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Dunn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">Historia</Nav.Link>
            <NavDropdown title="Comidas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tragos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebida</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Papas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Hamburguesas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar