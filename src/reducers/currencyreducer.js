export const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return {currency: action.payload}
    default: return state;
  }
}