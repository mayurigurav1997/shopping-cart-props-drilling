import React, { createContext } from 'react'

const CartContext = createContext({
    items: [],
    addItemCart: () => { },
    updateItemQuantity: () => { }
});

export default CartContext;