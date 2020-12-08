import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemNotFound from '../ItemNotFound/ItemNotFound';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const [show, setShow] = useState(true);
    const { id } = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const itemId = db.collection("items").doc(id); 
        itemId.get().then(doc =>{
            if (doc.exists === true) {
                setShow(true)
                setItem({id: doc.id, ...doc.data()});
            } else {
                setShow(false)
            }
        }).catch(error => {console.log(error)})
    }, [id])
    return (
        <>
        {
            show ? (
                item && <ItemDetail key={item.id} id={item.id} title={item.title} price={item.price} stock={item.stock} description={item.description} imageId={item.imageId} />
            ) : (
                <ItemNotFound />
            )
        }        
        </>
    )
}

export default ItemDetailContainer