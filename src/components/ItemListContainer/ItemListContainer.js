import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import ItemList from "../ItemList/ItemList";
import TituloOfertas from '../TituloOfertas/TituloOfertas';

function ItemListContainer({ titulo }) {
    const [items, setItems] = useState([]);
    // const item = [
    //     {id:1, title:"AMERICAN IPA", price:"100" , pictureUrl:"..."},
    //     {id:2, title:"OKTOBER", price:"80" , pictureUrl:"..."},
    //     {id:3, title:"IMPERIAL STOUT", price:"80" , pictureUrl:"..."},
    //     {id:4, title:"IRISH", price:"50" , pictureUrl:"..."},
    // ]
    // const traerItems = () => { 
    //     return new Promise( resolve => {
    //         setTimeout(() => {
    //             resolve(item);
    //         }, 2000)
    //     })
    // }

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items");
        // Traer los items con precios mayores a 200
        // const priceItems = itemCollection.where('price', '>', 200);
        // const catCollection = itemCollection.where('category', '==', 'cerveza');
        // const catCollection = itemCollection.where('category', '==', 'cerveza').where('price', '>', 200);
        
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No hay resultados");
            };
            setItems(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        });

        // traerItems().then(items => {
        //     setItems(items)
        // })
    }, [])
    return (
        <>
            <TituloOfertas titulo={ titulo }/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer