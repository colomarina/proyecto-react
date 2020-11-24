import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const staticCategory = [
  {categoryId: 'cervezas', name: 'Cervezas'},
  {categoryId: 'papas_fritas', name: 'Papas Fritas'},
  {categoryId: 'pizzas', name: 'Pizzas'}
]

function NavBar() {
    const {
      size
    } = useCartContext();

    return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/" ><Navbar.Brand >Dunn</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {
                staticCategory.map(cat => (
                  <NavDropdown.Item key={cat.categoryId}>
                    <NavLink to={`/category/${cat.categoryId}`}>
                        {cat.name}
                    </NavLink>
                  </NavDropdown.Item>
                ))
              }
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