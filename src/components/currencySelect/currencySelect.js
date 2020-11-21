import React, { useContext } from 'react';
import { CurrencyContext } from '../../contexts/currencycontext';

const CurrencySelector = ({ currencies, handleSelect }) => {
  const { currency } = useContext(CurrencyContext);

  if(currencies) {
    return (
      <select style={{ border: 'none', padding: '5px 16px 5px 8px', margin: '10px 20px', outline: 'none'}} onChange={(e) => handleSelect(e.target.value)} defaultValue={currency.currency}>
      {
        currencies.map((currency) => {
          return (
            <option key={currency} value={currency}>{ currency }</option>
          )
        })
      }
    </select>)
  }else {
    return null
  }
}
 
export default CurrencySelector;