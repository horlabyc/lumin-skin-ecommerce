import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cartcontext';
import { CurrencyContext } from '../../contexts/currencycontext';
import Button from '../button/button';
import Image from '../image/image';
import './productItem.scss';

const ProductItem = ({product}) => {

  const { currency } = useContext(CurrencyContext);
  const { dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product});
    dispatch({ type: 'OPEN_CART_DRAWER'})
  }

  return (  
    <div className="item__wrapper">
      <Image imageSrc={product.image_url} altText="product"/>
      <p className="description">{product.title || ''}</p>
      <p className="price">From {new Intl.NumberFormat('en', { style: 'currency', currency: currency.currency }).format(product.price || 0)}</p>
      <Button actionText="Add to cart" handleClick={() => addToCart(product)}/>
    </div>
  );
}
 
export default ProductItem;