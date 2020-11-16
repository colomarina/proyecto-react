import React from 'react';
// import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from "./context/CartContext";



function App() {
  
  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer titulo="Ofertas del dia!" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
