import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer />
    </div>
  );
}

export default App;
