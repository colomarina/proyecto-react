import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function Item({id, title, price, pictureUrl}) {
    return (
        <>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item