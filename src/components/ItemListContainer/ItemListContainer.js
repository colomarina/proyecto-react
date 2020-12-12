import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemList from "../ItemList/ItemList";
import TituloOfertas from '../TituloOfertas/TituloOfertas';

function ItemListContainer({ titulo , color }) {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    useEffect(()=>{
        const db = getFirestore();
        let itemCollection = db.collection("items");

        if (categoryId){
            itemCollection = itemCollection.where('categoryId', '==', categoryId);
        }        
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No hay resultados");
            };
            setItems(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        });
    }, [categoryId])
    return (
        <>
            <TituloOfertas titulo={ titulo } color={color} />
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer