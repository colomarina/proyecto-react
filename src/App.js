import React from 'react';
import ItemListContainer from "./components/ItemListContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <div className="App">
        <ItemListContainer titulo="Ofertas del dia!" />
    </div>
  );
}

export default App;
