import React from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';

function Cart() {
    const {
        cart,
        remove,
        removeAll,
        isEmpty
    } = useCartContext();

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