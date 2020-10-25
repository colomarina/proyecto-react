import React from 'react';
import Items from "../components/Items";
import TituloOfertas from './TituloOfertas';

function ItemListContainer({ titulo }) {
    return (
        <div>
            <TituloOfertas titulo={ titulo }/>
            <Items nombre="Hamburguesa Dunn" descripcion="Hamburguesa doble carne, doble queso cheddar, lechuga, tomate y salsa dunn"/>
            <Items nombre="Pizza Dunn" descripcion="Pizza a base de tomate, queso mozzarella, salchichas alemanas y huevo frito"/>
        </div>
    )
}

export default ItemListContainer