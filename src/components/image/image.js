import React from 'react';
import './image.scss';

const Image = ({ imageSrc, altText }) => {
  let alt = altText ? altText : 'picture';
  return (  
    <img src={imageSrc} alt={alt}></img>
  );
}
 
export default Image;