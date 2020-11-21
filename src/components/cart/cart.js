import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cartcontext';
import { gql, useQuery } from '@apollo/client';
import { CurrencyContext } from '../../contexts/currencycontext';
import CurrencySelector from '../currencySelect/currencySelect';
import './cart.scss';
import CartItem from '../cartItem/cartitem';
import { ProductsContext } from '../../contexts/productsContext';
import Button from '../button/button';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { currency, dispatch: currencyDispatch } = useContext(CurrencyContext);
  const { products: cartItems } = cart;
  const { products } = useContext(ProductsContext);
  const closeDrawer = () => {
    dispatch({type: 'CLOSE_CART_DRAWER'})
  }

  const changeCurrency = (currency) => {
    currencyDispatch({type: 'SET_CURRENCY', payload: currency.toUpperCase()})
  }
  
  useEffect(() => {
    dispatch({ type: 'UPDATE_CART_PRICES', payload: products})
  }, [products, dispatch]);

  const CURRENCIES = gql`
    query GetCurrency {
      currency
  }`;

  const { data } = useQuery(CURRENCIES);
  const totalCartItemPrice = () => {
    if(cartItems){
      return cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0)
    } 
    return 0;
  }

  return (  
    <div className={`drawer ${ cart.isOpen? 'open' : ''}`}>
      <div className="drawerBackdrop"></div>
      <div className={`contentWrapper`}>
        <div className="content">
          <div className="actions">
            <div className="arrow" onClick={closeDrawer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004" style={{height: 15, width: 10, fill: 'rgb(43, 46, 43)'}}><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path></svg>
            </div>
            <div className="header">
              <p id="header-text">Your cart</p>
            </div>
            <div></div>
          </div>
          <div className="cart__body">
            <CurrencySelector currencies={data?.currency} handleSelect={(value) => changeCurrency(value)}/>
            {
              cartItems ? 
                <ul className="cartItems">
                  {
                    cartItems.map((product) => {
                      return (
                        <li className="cartItem" key={`${product.id}-${product.title}`}>
                        <CartItem product={product}/>
                      </li>)
                    })
                  }
                </ul>
              : null
            }
          </div>
          <section className="cart__total">
            <div className="total">
              <p className="title">Subtotal</p>
              <p className="price">{new Intl.NumberFormat('en', { style: 'currency', currency: currency.currency }).format(totalCartItemPrice())}</p>
            </div>
            <div className="btn">
              <Button actionText="Proceed to checkout" style={{ width: 100}}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
 
export default Cart;