import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col } from 'react-bootstrap';
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
    const [show , setShow] = useState(false);

    async function createOrder() {
        const newOrder = {
            buyer: { name: 'Colito', phone: '+542216408251', email: 'asd@asd.com'},
            // item tomarlos del cart
            items: [
                { id: '1', title: 'Golde', price: 200, quantity: 2},
                { id: '2', title: 'Red', price: 200, quantity: 2},
            ],
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: 500,
        };
        const db = getFirestore();
        const orders = db.collection("orders");

        try {
            const doc = await orders.add(newOrder);
            setShow(true);
            console.log('Orden creada con el id:', doc.id)
            // actualizo aca
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
                                border: "2px solid black",
                                marginTop: "5px"
                                }}>

                            <Row>
                                <Col xs={6} md={4} style={{textAlign: "center"}}>
                                    <h4>{item.quantity} {item.title}</h4>
                                </Col>
                                <Col xs={6} md={4} style={{textAlign: "center"}}>
                                    <h4>$ {item.price * item.quantity}</h4>
                                </Col>
                                <Col xs={6} md={4} style={{textAlign: "center"}}>
                                <button className="buttonEliminar buttonEliminar1" onClick={() => {
                                            remove(item.id)
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
            <Row>
                <Col style={{textAlign: "center"}}>
                    <h4>Hola</h4>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "center"}}>
                    <button className="buttonCart buttonRemove" 
                            onClick={() => {removeAll()}} >
                                Vaciar carrito
                    </button>
                </Col>
                <Col style={{textAlign: "center"}}>
                    {
                        isEmpty ? (
                            <br />
                        ) : (
                            <button className="buttonCart buttonBuy"
                                    onClick={() => {createOrder()}} > 
                                    Crear Orden
                            </button>
                        )
                    }
                </Col>
            </Row>
            <form>
                <Row>
                    <Col>
                        <label>Nombre</label>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Apellido</label>
                        <input type="text" />
                    </Col>
                </Row>
                    <Col>
                    {/* <button className="buttonCart buttonBuy">Finalizar Compra {}</button> */}
                    </Col>
            </form>
        </Container>
        </>
    )
}

export default Cart