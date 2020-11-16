import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import cerveza from '../Imagenes/cerveza.png';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';

function ItemDetail({id, title, price, pictureUrl}) {
    const { add } = useCartContext();

    const [show, setShow] = useState(true);
    const [quantity , setQuantity] = useState();
    function onAdd(quantity) {
        setQuantity(quantity);
        setShow(false);
        add({id, title, price}, quantity);
    }

    return (
        <>
        <div className="row">
            <div className="column">
                <br></br>
                <h2>{title}</h2>
                <h3>Precio: {price}</h3>
                <p>Praesent condimentum class tincidunt cursus quisque ipsum malesuada, cursus sollicitudin iaculis morbi egestas. Lorem diam senectus tincidunt dolor. Fermentum facilisis parturient quam ac mi adipiscing in molestie. Senectus venenatis ornare aenean erat enim hendrerit dolor. Tempor volutpat lectus sodales sem neque eu porttitor placerat ligula! Cras a sed condimentum bibendum accumsan ut.</p>
            </div>
            <div className="column">
                <br></br>
                <img className="imagen" src={cerveza}/>
            </div>
        </div>
        <div className="row">
            <div className="column">
            </div>
            <div className="column">
                <br></br>
                {
                    show ? (
                        <ItemCount stock={10} initial={2} onAdd={quantity => onAdd(quantity)}/>
                    ) : (
                        <Link to="/cart">
                            <button className="button button1">Ver mi carrito<br /></button>
                        </Link>
                    )
                }
            </div>
        </div>
        
        {/* <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Gorra</Card.Title>
                <Card.Text>Praesent condimentum class tincidunt cursus quisque ipsum malesuada, cursus sollicitudin iaculis morbi egestas. Lorem diam senectus tincidunt dolor. Fermentum facilisis parturient quam ac mi adipiscing in molestie. Senectus venenatis ornare aenean erat enim hendrerit dolor. Tempor volutpat lectus sodales sem neque eu porttitor placerat ligula! Cras a sed condimentum bibendum accumsan ut.</Card.Text>
            </Card.Body>
            <Card.Footer>
                <ItemCount stock={10} initial={2} onAdd={cantidad => alert(cantidad)}/>
            </Card.Footer>
        </Card> */}
        </>
    )
}

export default ItemDetail