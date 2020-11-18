import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children}) {
    const [cart , setCart] = useState([]);
    // Nuestro almacen de estado de compra
    // Funciona como nuestra propia API
    function add(item, quantity) {
        // Agrega el item y actualiza el estado

        if (!cart.find(i => i.id === item.id)) {
            item = {...item, quantity}
            setCart([...cart, item ])
        } 
        if (cart.find(i => i.id === item.id)) {
            cart.forEach( i => {
                if (i.id === item.id) {
                    i.quantity = i.quantity + quantity;
                }
            })
        }
    }

    function remove(itemId) {
        setCart(cart.filter(item => item.id !== itemId))
        console.log('Removiste el item:', itemId);
    }

    function removeAll() {
        setCart([])
    }

    return <CartContext.Provider value={{ cart, 
            add, 
            remove, 
            removeAll, 
            size: cart.length,
            isEmpty: cart.length === 0,
            hasItem: item => {
                return cart.find(i => i === item);
            }
    }}>
        {children}
    </CartContext.Provider>
}

