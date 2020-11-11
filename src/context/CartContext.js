import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart = []}) {
    const [cart , setCart] = useState(defaultCart);
    
    // Nuestro almacen de estado de compra
    // Funciona como nuestra propia API

    function add(item) {
        // Agrega el item y actualiza el estado
        console.log('Trataste de agregar el item:', item.id);
        
        // Analizar cart y decidir si existe
        // const item = cart.find()  buscar a ver si existe
        // if(!item) {setCart([...cart, item]);} agregar
        // if(item) {
        //  item = {...item, quantity: }
        //  setCart([...cart])
        // } actualizar

        

        // Antes de terminar cada operacion actualizar el estado
    }

    function remove(itemId) {
        // remueve un item por id y actualiza el estado
        console.log('Trataste de remover el item:', itemId);

        setCart(cart.filter(item => item.id !== itemId))

        // Antes de terminar cada operacion actualizar el estado
    }

    return <CartContext.Provider value={{ cart, add, remove}}>
        {children}
    </CartContext.Provider>
}

