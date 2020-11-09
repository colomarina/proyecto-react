import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartWidget( {totalItems} ) {
    return (
    <Button variant="light"><Link to="/cart"><i class="fas fa-shopping-cart"></i></Link> {totalItems}</Button>
    )
}

export default CartWidget