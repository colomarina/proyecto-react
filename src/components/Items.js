import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';

function Items({nombre}) {
    return (
        <Card>
            <Card.Header>{nombre}</Card.Header>
            <Card.Body>
                <Card.Title>Imagen</Card.Title>
                <Card.Text>
                Hamburguesa doble carne, doble queso cheddar, lechuga, tomate y salsa dunn
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Items