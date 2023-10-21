import React from 'react';
import './CartItem.css'

const CartItem = ({ name, quantity, price }) => {
  return (
    <div className='boleta'>
      <p>{name}</p>
      <p>Cantidad: {quantity}</p>
      <p>Precio x Unidad: ${price}</p>
    </div>
  );
};

export default CartItem;