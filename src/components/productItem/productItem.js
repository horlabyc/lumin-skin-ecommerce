import React from 'react';
import Button from '../button/button';
import Image from '../image/image';
import './productItem.scss';

const ProductItem = ({product}) => {
  console.log({product});
  const addToCart = () => {
    console.log('clicked')
  }

  return (  
    <div className="item__wrapper">
      <Image imageSrc={product.image_url} altText="product"/>
      <p className="description">{product.title || ''}</p>
      <p className="price">${product.price || 0}</p>
      <Button actionText="Add to cart" handleClick={addToCart}/>
    </div>
  );
}
 
export default ProductItem;