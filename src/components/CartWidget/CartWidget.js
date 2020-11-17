import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartWidget( {totalItems} ) {
    return (
        <Link to="/cart"><Button variant="light"><i class="fas fa-shopping-cart"></i> {totalItems}</Button></Link>
    )
}

export default CartWidget