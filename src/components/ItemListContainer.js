import React from 'react';
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import TituloOfertas from './TituloOfertas';

function ItemListContainer({ titulo }) {
    return (
        <>
        <NavBar />
        <TituloOfertas titulo={ titulo }/>
        <ItemList />
        </>
    )
}

export default ItemListContainer