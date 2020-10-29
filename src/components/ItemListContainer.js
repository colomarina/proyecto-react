import React, {useState} from 'react';
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import TituloOfertas from './TituloOfertas';

function ItemListContainer({ titulo }) {
    const[items, setItems] = useState(0);
    function agregarItem(cantidad) {
        setItems(items + cantidad);
    }
    return (
        <>
        <NavBar />
        <TituloOfertas titulo={ titulo } onAdd={cantidad => agregarItem(cantidad)}/>
        <ItemList />
        </>
    )
}

export default ItemListContainer