import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const cerveza = {id:1, title:"AMERICAN IPA", price:"100" , pictureUrl:"../Imagenes/cerveza.png"}
// const cerveza = [
//     {id:1, title:"AMERICAN IPA", price:"100" , pictureUrl:"..."},
//     {id:2, title:"OKTOBER", price:"80" , pictureUrl:"..."},
//     {id:3, title:"IMPERIAL STOUT", price:"80" , pictureUrl:"..."},
//     {id:4, title:"IRISH", price:"50" , pictureUrl:"..."},
// ];
console.log(cerveza);
const traerItem = ({id}) => { 
    return new Promise( resolve => {
        setTimeout(() => {
            // console.log({id})
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
        console.log('Inicializado el componente', id);
        traerItem( id ).then(item => {
            setItem(item);
            // console.log(item);
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