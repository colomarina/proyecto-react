import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import imagen from '../Imagenes/imagen.jpg';
import { Link } from 'react-router-dom';

function Item({id, title, price, description}) {
    return (
        <>
        <Card>
            <Link to={`/item/${id}`}><Card.Img variant="top"  src={imagen} /></Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Precio Unitario ${price}</small>
            </Card.Footer>
        </Card>
        </>
    )
}

export default Item

