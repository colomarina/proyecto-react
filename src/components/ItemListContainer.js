import React from 'react';
import Items from "../components/Items";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card,Button } from 'react-bootstrap';

function ItemListContainer() {
    return (
        <div>
            <Items nombre="Hamburguesa Dunn"/>
            <Items nombre="Pizza Dunn"/>
        </div>
    )
}

export default ItemListContainer