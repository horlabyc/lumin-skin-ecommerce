import { addItemToCart, removeItemFromCart, updateCart, reduceItemCountInFromCart } from '../utils/cart.util';

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
    case 'REDUCE_ITEM_COUNT_IN_CART':
        return {
            ...state, 
            products: reduceItemCountInFromCart(state.products, action.payload) 
        } 
    case 'REMOVE_ITEM_FROM_CART':
        return {
            ...state, 
            products: removeItemFromCart(state.products, action.payload) 
        } 
    case 'UPDATE_CART_PRICES':
        updateCart(state.products, action.payload)
        return {
            ...state
        } 
    default: return state;
  }
}