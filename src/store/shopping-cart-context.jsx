import React, { createContext } from 'react'

const CartContext = createContext({
    items: [],
    addItemCart: () => { },
});

export default CartContext;