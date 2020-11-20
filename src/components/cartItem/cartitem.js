import React, {useContext} from 'react';
import { CurrencyContext } from '../../contexts/currencycontext';
import './cartitem.scss';

const CartItem = () => {
  const { currency } = useContext(CurrencyContext);

  const product = {
    "id": 3,
    "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
    "title": "Premium-Grade Moisturizing Balm",
    "price": 29
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
          <p className="minus"> - </p>
          <p className="quantity"> 20 </p>
          <p className="add"> + </p>
        </div>
        <div>
          <p className="price">{new Intl.NumberFormat('en', { style: 'currency', currency: currency.currency }).format(product.price)}</p>
        </div>
        <div></div>
      </div>
    </section>
   );
}
 
export default CartItem;