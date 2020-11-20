import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartcontext';
import './cart.scss';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const closeDrawer = () => {
    dispatch({type: 'CLOSE_CART_DRAWER'})
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
          <div className="body">
            <section className={`menuItems`}>
              <p>Home</p>
              <p>Blog</p>
              <a href="mailto:olabisisulaiman@gmail.com" target="_blank">Send me a mail</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Cart;