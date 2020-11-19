export const CartReducer = (state, action) => {
  switch (action.type) {
      case 'OPEN_CART_DRAWER':
          return {...state, isOpen: true}
      case 'CLOSE_CART_DRAWER':
          return {...state, isOpen: false}  
      default: return state;
  }
}