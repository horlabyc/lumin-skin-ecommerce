import React from 'react';
import './button.scss';

const Button = ({actionText, handleClick}) => {
  return ( 
    <button onClick={() => handleClick()}>{actionText}</button>
  );
}
 
export default Button;