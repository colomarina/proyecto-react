import React, {useState} from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const {
        cart,
        add,
        remove,
        removeAll,
        size,
        isEmpty,
        hasItem
    } = useCartContext();
    const [show, setShow] = useState();
    const [ currentCart , newCurrentCart] = useState("");

    return (
        <>
        <Card>
            {
                !isEmpty ? (
                    <ul className="lista">
                        {cart.map(item => (
                            <div key={item.id}>
                                <h3 style={{textAlign: 'center'}}>{item.title} x {item.quantity}</h3>
                                <div className="fila1_columna2">
                                    <div>
                                        <button className="buttonCart buttonRemove" onClick={() => {
                                            remove(item.id)
                                        }} >Eliminar</button>
                                    </div>
                                    {/* <div>
                                        Cantidad: {item.quantity}
                                    </div> */}
                                    <div>
                                        <h3>$ {item.price * item.quantity}</h3>
                                    </div>
                                </div>
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
            <div className="fila1_columna2">
                <div>
                    <button className="buttonCart buttonRemove" 
                            onClick={() => {removeAll()}} >
                                Vaciar carrito
                    </button>
                </div>
                <div>
                    <button className="buttonCart buttonBuy">Finalizar Compra</button>
                </div>
                
            </div>
        </Card>
        </>
    )
}

export default Cart