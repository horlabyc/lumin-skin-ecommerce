export const addItemToCart = (cartItems, itemToAdd) => {
  // check if the new item is in cart items in state
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if(existingCartItem){ // if it is there
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id 
      ? {
        ...cartItem, 
        actualPrice: itemToAdd.price,
        totalPrice: cartItem.actualPrice * (cartItem.quantity + 1),
        quantity: cartItem.quantity + 1, 
      }
      : cartItem)
  } //else 
  return [...cartItems, {...itemToAdd, quantity: 1, actualPrice: itemToAdd.price, totalPrice: itemToAdd.price}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
  }
  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1, actualPrice: cartItemToRemove.price, totalPrice: cartItem.actualPrice * (cartItem.quantity - 1),}
    : cartItem)
}