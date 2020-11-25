import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase';

function Cart() {
    // const 
    const {
        cart,
        remove,
        removeAll,
        isEmpty
    } = useCartContext();
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        phone: ''
    });
    // const [showButtons, setShowButtons] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (event) => {
        setUserInfo({
            ...userInfo, [event.target.name] : event.target.value
        })
    }
    const arrayPrices = cart.map(item => (item.price * item.quantity)
        );
    const  totalPrice = arrayPrices.reduce((a, b) => a + b, 0);
    async function createOrder() {
        
        console.log(userInfo);
        console.log(cart)
        
        // debugger;
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice,
        };
        const db = getFirestore();
        const orders = db.collection("orders");

        try {
            // setShow(true);
            // actualizo aca
            // cart.map(c => (
            //     console.log(c.id)
            //     ))
            // console.log(cart);
            // debugger;
            // const itemQueryByManyId = await db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(c => c.id)).get()
            // console.log(itemQueryByManyId);
            // const [item] = itemQueryByManyId.docs;
            // debugger;
            // await item.ref.update({ stock: item.data().stock - 1 });
            const doc = await orders.add(newOrder);
            console.log('Orden creada con el id:', doc.id)
        } catch (error) {
            console.log('Error creando orden')
        }


    }

    return (
        <>
            <Container>
                {
                    !isEmpty ? (
                        <ul className="lista">
                            {cart.map(item => (
                                <div style={{
                                    border: "1px solid #d8d8d8",
                                    borderRadius: "15px",
                                    marginTop: "5px"
                                }} key={item.id}>

                                    <Row>
                                        <Col xs={6} md={4} style={{ textAlign: "center" }}>
                                            <h4>{item.quantity} {item.title}</h4>
                                        </Col>
                                        <Col xs={6} md={4} style={{ textAlign: "center" }}>
                                            <h4>$ {item.price * item.quantity}</h4>
                                        </Col>
                                        <Col xs={6} md={4} style={{ textAlign: "center" }}>
                                            <button className="buttonEliminar buttonEliminar1" onClick={() => {
                                                remove(item.id);
                                                setShowForm(false)
                                            }} >Eliminar</button>
                                            {/* <button>Eliminar</button> */}
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </ul>
                        
                    ) : (
                            <div className="fila1_columna1" >
                                <div className="item_centrado" >
                                    <h3>Tu carrito esta vacio</h3>
                            ¿No sabés qué comprar? ¡Miles de productos te esperan!
                        </div>
                            </div>
                        )
                }
                {
                    !showForm ? (
                            <Row style={{ paddingTop: "10px" }}>
                                <Col style={{ textAlign: "center" }}>
                                    <button className="buttonCart buttonRemove"
                                        onClick={() => { removeAll() }} >
                                        Vaciar carrito
                                </button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <h4 style={{ paddingTop: "15px" }}>Total: ${totalPrice}</h4>

                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    {
                                        isEmpty ? (
                                            <br />
                                        ) : (
                                                <button className="buttonCart buttonBuy"
                                                    onClick={() => setShowForm(true)} >
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
                                <button className="buttonCart buttonBuy" onClick={() => { createOrder() }} >Finalizar Compra </button>
                            </Col>
                        </Row>
                    </Form>
                    )
                }

            </Container>
        </>
    )
}

export default Cart