import React, {  useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar,ButtonGroup,Button } from 'react-bootstrap';

function ItemCount({ stock , initial , onAdd }) {
    const [count, setCount] = useState(initial);

    function decreaseCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function increaseCount() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    return (
        <>
        <ButtonToolbar className="justify-content-md-center embed-responsive" aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="primary" onClick={decreaseCount} disabled={count < 1}>-</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button variant="primary">{count}</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Third group">
                <Button variant="primary" onClick={increaseCount} disabled={count >= stock}>+</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup className="pt-2">
                <Button variant="primary" onClick={() => onAdd(count)} disabled={count > stock || count < 1}>Agregar al <i class="fas fa-shopping-cart"></i></Button>
            </ButtonGroup>
        </ButtonToolbar>
        </>
        )
    }
export default ItemCount