import { addItemToCart, removeItemFromCart } from '../utils/cart.util';

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_CART_DRAWER':
        return {...state, isOpen: true}
    case 'CLOSE_CART_DRAWER':
        return {...state, isOpen: false} 
    case 'ADD_TO_CART':
        return {
            ...state, 
            products: addItemToCart(state.products, action.payload) 
        }
    case 'REMOVE_FROM_CART':
        return {
            ...state, 
            products: removeItemFromCart(state.products, action.payload) 
        } 
    default: return state;
  }
}