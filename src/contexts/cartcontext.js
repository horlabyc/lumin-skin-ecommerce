import React, { createContext, useReducer} from 'react';
import { CartReducer } from '../reducers/cartreducer';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const cartStore = JSON.parse(localStorage.getItem('cart'));
  const [cart, dispatch] = useReducer(CartReducer, { isOpen: false, products: cartStore});
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;