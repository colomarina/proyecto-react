import React from 'react';
import Item from "../Item/Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';

function ItemList({items}) {
    
    return (
        <>
        <CardColumns>
            {
                items.map((items)=>{
                    return <Item key={items.id} id={items.id} title={items.title} price={items.price} description={items.description} pictureUrl={items.pictureUrl} />
                })
            }
        </CardColumns>
        </>
    )
}

export default ItemList