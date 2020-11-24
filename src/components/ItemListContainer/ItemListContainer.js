import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemList from "../ItemList/ItemList";
import TituloOfertas from '../TituloOfertas/TituloOfertas';

function ItemListContainer({ titulo }) {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    useEffect(()=>{
        const db = getFirestore();
        let itemCollection = db.collection("items");

        if (categoryId){
            itemCollection = itemCollection.where('categoryId', '==', categoryId);
        }
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
    }, [categoryId])
    return (
        <>
            <TituloOfertas titulo={ titulo }/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer