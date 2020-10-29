import React from 'react';
import ItemList from "./ItemList";
import TituloOfertas from './TituloOfertas';

function ItemListContainer({ titulo }) {
    
    return (
        <>
        <div>
            <TituloOfertas titulo={ titulo }/>
            <ItemList />
        </div>
        </>
    )
}

export default ItemListContainer