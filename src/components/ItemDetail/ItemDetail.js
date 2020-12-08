import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imagen from '../Imagenes/imagen.jpg';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';

function ItemDetail({id, title, price, description, stock , imageId}) {
    const { add } = useCartContext();

    const [show, setShow] = useState(true);
    const [quantity , setQuantity] = useState();
    function onAdd(quantity) {
        setQuantity(quantity);
        setShow(false);
        add({id, title, price}, quantity);
    }

    return (
        <Container key={id}>
            <Card>
                <Card.Img variant="top" style={{ maxHeight: "342px"}} src={imagen} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col xs={8} md={6}>
                                Descripcion: {description}
                                <br></br>
                                Stock: {stock}
                            </Col>
                            <Col xs={8} md={6}>
                            {
                                show ? (
                                    <ItemCount stock={stock} initial={2} onAdd={quantity => onAdd(quantity)}/>
                                ) : (
                                    <Link to="/cart">
                                        <button className="button button1">Ver mi carrito<br /></button>
                                    </Link>
                                )
                            }
                            </Col>
                        </Row>
                        
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <Row>
                            <Col xs={8} md={6}><small className="text-muted">Precio Unitario ${price} </small></Col>
                            <Col xs={8} md={6}>
                                {
                                    show ? (
                                        <small className="text-muted">Precio total</small>
                                    ) : (
                                        <small className="text-muted">Precio total ${price * quantity} </small>
                                    )
                                }    
                            </Col>
                        </Row>
                    
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ItemDetail