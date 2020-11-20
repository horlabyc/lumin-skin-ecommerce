import React, { createContext, useReducer} from 'react';
import { CurrencyReducer } from '../reducers/currencyreducer';

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [currency, dispatch] = useReducer(CurrencyReducer, { currency: 'USD'});
  return (
    <CurrencyContext.Provider value={{ currency, dispatch }}>
      { children }
    </CurrencyContext.Provider>
  )
}

export default CurrencyContextProvider;