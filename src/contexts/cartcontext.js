import React, { createContext, useReducer} from 'react';
import { CartReducer } from '../reducers/cartreducer';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, { isOpen: false, products: []});
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;