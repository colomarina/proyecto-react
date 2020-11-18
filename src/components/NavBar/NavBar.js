import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function NavBar() {
    const {
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
        <Link to="/" ><Navbar.Brand >Dunn</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <Link to="/" ><NavDropdown.Item >Cervezas</NavDropdown.Item></Link>
              <Link to="/" ><NavDropdown.Item >Tragos</NavDropdown.Item></Link>
              <Link to="/" ><NavDropdown.Item >Papas</NavDropdown.Item></Link>
              <Link to="/" ><NavDropdown.Item >Hamburguesas</NavDropdown.Item></Link>
              <Link to="/" ><NavDropdown.Item >Pizzas</NavDropdown.Item></Link>
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