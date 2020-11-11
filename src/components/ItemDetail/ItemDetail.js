import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import cerveza from '../Imagenes/cerveza.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const style = {
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '20px',
    },
    column: {
        flex: '25%',
        maxWidth: '80%',
        padding: '4px',
    },
    imagen: {
        maxWidth: '250px',
        maxHeight: '250px',
    },
}

function ItemDetail({id, title, price, pictureUrl}) {
    const [show, setShow] = useState(true);
    const [quantity , setQuantity] = useState();
    function onAdd(cantidad) {
        setQuantity(cantidad);
        setShow(false)
    }

    return (
        <>
        <div style={style.row}>
            <div style={style.column}>
                <br></br>
                <h2>{title}</h2>
                <h3>Precio: {price}</h3>
                <p>Praesent condimentum class tincidunt cursus quisque ipsum malesuada, cursus sollicitudin iaculis morbi egestas. Lorem diam senectus tincidunt dolor. Fermentum facilisis parturient quam ac mi adipiscing in molestie. Senectus venenatis ornare aenean erat enim hendrerit dolor. Tempor volutpat lectus sodales sem neque eu porttitor placerat ligula! Cras a sed condimentum bibendum accumsan ut.</p>
            </div>
            <div style={style.column}>
                <br></br>
                <img style={style.imagen} src={cerveza}/>
            </div>
        </div>
        <div style={style.row}>
            <div style={style.column}>
            </div>
            <div style={style.column}>
                <br></br>
                {
                    show ? (
                        <ItemCount stock={10} initial={2} onAdd={cantidad => onAdd(cantidad)}/>
                    ) : (
                        <Button variant="primary" >Terminar mi compra</Button>
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