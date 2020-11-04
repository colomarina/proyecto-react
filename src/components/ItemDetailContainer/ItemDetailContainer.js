import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const cerveza = {id:1, title:"AMERICAN IPA", price:"100" , pictureUrl:"../Imagenes/cerveza.png"}
const traerItem = ({id}) => { 
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(cerveza);
        }, 2000)
    })
}

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    // function viewDetail({items}) {
    //     return <ItemDetail key={items.id} title={items.title} price={items.price} pictureUrl={items.pictureUrl} />;
    // }
    useEffect(()=>{
        console.log('Inicializado');
        traerItem( id ).then(item => {
            setItem(item)

        })
    }, [])
    return (
        <>
        {
            item && <ItemDetail key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} />
        }        
        </>
    )
}

export default ItemDetailContainer