import React from 'react';
import Item from "./Item";

function ItemList() {
    const items = [
        {id:1, title:"AMERICAN IPA", price:"100" , pictureUrl:"..."},
        {id:2, title:"OKTOBER", price:"80" , pictureUrl:"..."},
        {id:3, title:"IMPERIAL STOUT", price:"80" , pictureUrl:"..."},
        {id:4, title:"HONEY", price:"50" , pictureUrl:"..."},
        {id:5, title:"IRISH", price:"50" , pictureUrl:"..."},
    ]
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