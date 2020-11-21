import React, { createContext, useReducer} from 'react';
import { ProductsReducer } from '../reducers/productsReducer';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductsReducer, { products: []});
  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      { children }
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider;