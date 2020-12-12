import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

function TituloOfertas({ titulo , color}) {
    return (
        <Alert variant={color}>
        <Alert.Heading>{ titulo }</Alert.Heading>
        </Alert>
    )
}

export default TituloOfertas