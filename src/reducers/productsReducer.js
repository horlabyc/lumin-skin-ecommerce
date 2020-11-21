export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {products: action.payload}
    default: return state;
  }
}