import React, { useEffect, useState } from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';

const staticCategory = [
  {categoryId: 'cervezas', name: 'Cervezas'},
  {categoryId: 'papas', name: 'Papas'},
  {categoryId: 'pizzas', name: 'Pizzas'}
]

function NavBar() {
    const {
      size
    } = useCartContext();
    // const [categoryId , setCategoryId] = useState([])
    // useEffect(() => {
    //   const db = getFirestore();
    //   debugger;
    //   // let categoryCollection = db.collection('category');
    //   let citiesRef = db.collection('category');
    //   let query = citiesRef.get()
    //     .then(snapshot => {
    //       if (snapshot.empty) {
    //         console.log('No matching documents.');
    //         return;
    //       }

    //       snapshot.forEach(doc => {
    //         console.log(doc.id, '=>', doc.data());
    //       });
    //     })
    //     .catch(err => {
    //       console.log('Error getting documents', err);
    //     });
    // },[])

    return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" ><Navbar.Brand >Dunn</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              {
                staticCategory.map(cat => (
                  <NavDropdown.Item key={cat.categoryId}>
                    <NavLink to={`/category/${cat.categoryId}`} key={cat.categoryId}>
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