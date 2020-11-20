import React, {useContext} from 'react';
import { CurrencyContext } from '../../contexts/currencycontext';
import Button from '../button/button';
import Image from '../image/image';
import './productItem.scss';

const ProductItem = ({product}) => {

  const { currency } = useContext(CurrencyContext);

  const addToCart = () => {
    console.log(product)
  }

  return (  
    <div className="item__wrapper">
      <Image imageSrc={product.image_url} altText="product"/>
      <p className="description">{product.title || ''}</p>
      <p className="price">From {new Intl.NumberFormat('en', { style: 'currency', currency: currency.currency }).format(product.price || 0)}</p>
      <Button actionText="Add to cart" handleClick={addToCart}/>
    </div>
  );
}
 
export default ProductItem;