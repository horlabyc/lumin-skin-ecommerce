export const addItemToCart = (cartItems, itemToAdd) => {
  // check if the new item is in cart items in state
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  let newState;
  if(existingCartItem){ // if it is there
    newState = cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id 
      ? {
        ...cartItem, 
        actualPrice: itemToAdd.price,
        totalPrice: cartItem.actualPrice * (cartItem.quantity + 1),
        quantity: cartItem.quantity + 1, 
      }
      : cartItem);
      localStorage.setItem('cart', JSON.stringify(newState));
    return newState;
  } //else 
  newState = [...cartItems, {...itemToAdd, quantity: 1, actualPrice: itemToAdd.price, totalPrice: itemToAdd.price}];
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  let newState;
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
  if(existingCartItem.quantity === 1){
   newState = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id );
   localStorage.setItem('cart', JSON.stringify(newState));
   return newState;
  }
  newState = cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1, actualPrice: cartItemToRemove.price, totalPrice: cartItem.actualPrice * (cartItem.quantity - 1),}
    : cartItem);
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

export const updateCart = (cartItems, allProducts) => {
  cartItems.forEach((item, index) => {
    const itemInAllProducts = allProducts.products.find((product) => product.id === item.id);
    if(itemInAllProducts){
      cartItems[index] = {
        ...cartItems[index],
        price: itemInAllProducts.price,
        actualPrice: itemInAllProducts.price,
        totalPrice: itemInAllProducts.price * (cartItems[index].quantity),
        quantity: cartItems[index].quantity, 
      }
    }
  })
}