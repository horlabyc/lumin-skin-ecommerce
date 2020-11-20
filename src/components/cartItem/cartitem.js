import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cartcontext';
import { CurrencyContext } from '../../contexts/currencycontext';
import './cartitem.scss';

const CartItem = ({product}) => {
  const { currency } = useContext(CurrencyContext);
  const { cart, dispatch } = useContext(CartContext);

  const addItemToCart = () => {
    dispatch({ type:"ADD_TO_CART", payload: product})
  }

  const removeItemFromCart = () => {
    dispatch({ type:"REMOVE_FROM_CART", payload: product})
  }

  return ( 
    <section className="cartitem__wrapper">
      <div className="cartitem__header">
        <p>{ product.title}</p>
        <span> X </span>
      </div>
      <div className="cartitem__image">
        <img src={product.image_url} alt="produc"></img>
      </div>
      <div className="cartitem__metadata">
        <div className="cartitem__action">
          <p className="minus" onClick={removeItemFromCart}> - </p>
          <p className="quantity"> {product.quantity} </p>
          <p className="add" onClick={addItemToCart}> + </p>
        </div>
        <div>
          <p className="price">{new Intl.NumberFormat('en', { style: 'currency', currency: currency.currency }).format(product.totalPrice)}</p>
        </div>
        <div></div>
      </div>
    </section>
   );
}
 
export default CartItem;