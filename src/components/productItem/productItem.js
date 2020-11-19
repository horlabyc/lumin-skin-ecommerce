import React from 'react';
import Button from '../button/button';
import Image from '../image/image';
import './productItem.scss';

const ProductItem = ({product}) => {

  const addToCart = () => {
    console.log('clicked')
  }

  return (  
    <div className="item__wrapper">
      <Image imageSrc="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968" altText="product"/>
      <p className="description">Age Management Set</p>
      <p className="price">$10.00</p>
      <Button actionText="Add to cart" handleClick={addToCart}/>
    </div>
  );
}
 
export default ProductItem;