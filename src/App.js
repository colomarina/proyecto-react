import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[items, setItems] = useState(0);
  function agregarItem(cantidad) {
    setItems(items + cantidad);
  }
  return (
    <div className="App">
        <NavBar totalItems={items} />
        <ItemListContainer titulo="Ofertas del dia!" onAdd={cantidad => agregarItem(cantidad)}/>
    </div>
  );
}

export default App;
