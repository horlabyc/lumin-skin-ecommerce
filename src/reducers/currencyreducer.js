export const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      localStorage.setItem('currency', action.payload)
      return {currency: action.payload}
    default: return state;
  }
}