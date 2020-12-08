import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Row, Col, Container } from 'react-bootstrap';

function ItemNotFound() {

    return (
        <>
            <Container style={{paddingTop: '15px'}}>
                <Alert variant={'danger'} >
                    Producto no encontrado....
                </Alert>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <Link to='/'>
                            <Button variant="info" style={{textAlign: 'center' }}>
                                Volver al menu
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemNotFound