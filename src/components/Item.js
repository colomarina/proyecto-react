import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

function Item({id, title, price, pictureUrl}) {
    // Usar ASYNC MOCK(PROMISE)
    return (
        <>
        <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>{pictureUrl}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <ItemCount stock={10} initial={2} onAdd={cantidad => alert(cantidad)}/>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item