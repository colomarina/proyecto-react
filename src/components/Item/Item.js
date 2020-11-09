import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import cerveza from '../Imagenes/cerveza.png';
import { Link } from 'react-router-dom';

const style = {
    imagen: {
        maxWidth: '150px',
        maxHeight: '150px',
    }
}

function Item({id, title, price, pictureUrl}) {
    return (
        <>
        <Card>
            <Link to={`/item/${id}`}><Card.Img variant="top" style={style.imagen} src={cerveza} /></Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>${price}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item

