import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function CartWidget( {totalItems} ) {
    return (
    <Button variant="light"><i class="fas fa-shopping-cart"></i> {totalItems}</Button>
    )
}

export default CartWidget