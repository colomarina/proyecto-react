import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form ,Jumbotron, Button, ListGroupItem, ListGroup} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom';

function Cart() {
    const {
        cart,
        remove,
        removeAll,
        isEmpty
    } = useCartContext();
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: 'lucas@gmail.com',
        phone: '1234'
    });
    const [showOrderCompleted, setShowOrderCompleted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [orderId, setOrderId] = useState();

    const handleInputChange = (event) => {
        setUserInfo({
            ...userInfo, [event.target.name] : event.target.value
        })
    }

    const arrayPrices = cart.map(item => (item.price * item.quantity));
    const totalPrice = arrayPrices.reduce((a, b) => a + b, 0);

    async function createOrder() {
        debugger;
        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice,
        };
        
        
        try {

            setShowOrderCompleted(true);
            debugger;
            const doc = await orders.add(newOrder);
            setOrderId(doc.id);
            const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(c => c.id));
            const query = await itemsToUpdate.get();
            const batch = db.batch();
            const outOfStock = [];
            query.docs.forEach((docSnapshot, id) => {
                if (docSnapshot.data().stock >= cart[id].quantity) {
                    batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - cart[id].quantity });
                } else {
                    outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id});
                }
            })
            if (outOfStock.length === 0) {
                await batch.commit();
            }
            
            removeAll();
        } catch (error) {
            console.log('Error creando orden' + error)
        }
    }

    return !showOrderCompleted ? (
        <Container>
           { !isEmpty ? (
                <ListGroup>
                    {
                        cart.map(item => (
                            <ListGroupItem key={item.id} style={{
                                border: "1px solid #d8d8d8",
                                borderRadius: "15px",
                                marginTop: "5px"
                            }}>
                                <Row>
                                    <Col xs={6} md={4} style={{ textAlign: "center" }}>
                                        {item.quantity} {item.title}
                                    </Col>
                                    <Col xs={6} md={4} style={{ textAlign: "center" }}>
                                        $ {item.price * item.quantity}
                                    </Col>
                                    <Col xs={6} md={4} style={{ textAlign: "center" }}>
                                        <button className="buttonEliminar buttonEliminar1" onClick={() => {
                                                       remove(item.id);
                                                       setShowForm(false)
                                                   }} >
                                        Eliminar
                                        </button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
           ) : (
            <Row>
                <Col>
                    <h3 style={{ textAlign: "center" }}>Tu carrito esta vacio</h3>
                    <p style={{ textAlign: "center" }}>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
                </Col>
            </Row>
           )
        }
        {
            !showForm ? (
                <Row>
                    <Col>
                        <button className="buttonCart buttonRemove" onClick={() => {removeAll()}} >
                            Vaciar carrito
                        </button>
                    </Col>
                    <Col>
                        {
                            isEmpty ? (
                                <Link to="/"><Button variant="primary">Ir al inicio</Button></Link>
                            ) : (
                                <h4 style={{ paddingTop: "15px" }}>Total: ${totalPrice}</h4>
                            )
                        }
                    </Col>
                    <Col>
                        {
                            isEmpty ? (
                                <br></br>
                            ) : (
                                <button className="buttonCart buttonBuy" onClick={() => setShowForm(true)} >
                                    Checkout
                                </button>
                            )
                        }
                    </Col>
                </Row>
            ) : (
                <Form style={{paddingTop: '20px'}}>
            
                                    <Form.Group controlId="FullName">
                                        <Form.Label>Nombre Completo</Form.Label>
                                        <Form.Control type="text" placeholder="Ej: Pedro Garcia" onChange={handleInputChange} name="fullName"/>
                                    </Form.Group>
            
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="Email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Ej: pedrogarcia@gmail.com" onChange={handleInputChange} name="email"/>
                                        </Form.Group>
            
                                        <Form.Group as={Col} controlId="RepeatEmail">
                                            <Form.Label>Repeat Email</Form.Label>
                                            <Form.Control type="email" placeholder="Repeat Email" />
                                        </Form.Group>
                                    </Form.Row>
            
                                    <Form.Group controlId="PhoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="Ej: +542216408259" onChange={handleInputChange} name="phone"/>
                                    </Form.Group>
                                    
                                    <Row>
                                        <Col style={{ textAlign: "center" }}>
                                            <button className="buttonCart buttonBuy" onClick={ () => {createOrder()} } >Finalizar Compra </button>
                                        </Col>
                                    </Row>
                                </Form>
            )
        }
        </Container>
    ) : (
        <Jumbotron>
            <h1>¡Gracias por tu compra!</h1>
            <p>A la brevedad te enviaremos un correo electronico, confirmando la compra y para coordinar entrega de los productos!
                Tu codigo identificador de orden es: {orderId}
            </p>
            <p>
                <Link to="/">Volver al Menu</Link>
            </p>
        </Jumbotron>
    )
}

export default Cart