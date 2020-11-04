import React from 'react';
import Item from "../Item/Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck } from 'react-bootstrap';

function ItemList({items}) {
    
    return (
        <>
        <CardDeck>
            {
                items.map((items)=>{
                    return <Item key={items.id} title={items.title} price={items.price} pictureUrl={items.pictureUrl} />
                })
            }
        </CardDeck>
        </>
    )
}

export default ItemList