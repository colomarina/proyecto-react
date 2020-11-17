import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function NavBar({totalItems}) {
    const {
      cart,
      size
    } = useCartContext();

    return (
    <>
      {/* <div className="topNav">
        <ul>
          <li><Link>DÜNN</Link></li>
          <li><Link>Historia</Link></li>
          <li className="dropdown">
            <Link className="dropbtn">Menu</Link>
            <div className="dropdown-content">
              <Link>Cervezas</Link>
              <Link>Pizzas</Link>
              <Link>Hamburguesas</Link>
              <Link>Papas</Link>
              <Link>Tragos de Autor</Link>
            </div>
          </li>
        </ul>
      </div> */}
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand ><Link to="/">Dunn</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/historia">Historia</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              
              <NavDropdown.Item ><Link to="/" >Cervezas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/" >Tragos</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/" >Papas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/" >Hamburguesas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/" >Pizzas</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <CartWidget totalItems={size}/>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
    )
}

export default NavBar