import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const itemId = db.collection("items").doc(id); 
        itemId.get().then(doc =>{
            setItem({id: doc.id, ...doc.data()});
        })
    }, [id])
    return (
        <>
        {
            item && <ItemDetail key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} />
        }        
        </>
    )
}

export default ItemDetailContainer