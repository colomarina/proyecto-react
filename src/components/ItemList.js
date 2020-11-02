import React from 'react';
import Item from "./Item";

function ItemList({items}) {
    
    return (
        <>
        <ul>
            {
                items.map((items)=>{
                    return <Item key={items.id} title={items.title} price={items.price} pictureUrl={items.pictureUrl} />
                })
            }
        </ul>
        </>
    )
}

export default ItemList