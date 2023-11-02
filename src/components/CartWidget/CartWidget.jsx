import React from 'react';
import '../NavBar/NavBar.css'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const visibilityClass = totalQuantity > 0 ? '' : 'hidden';

  return (
      <Link to='/cart' className={`cart-widget ${visibilityClass}`}>
          <FaShoppingCart className='CartImg' alt="cart-widget" />
          <p>{totalQuantity}</p>
      </Link>
  )
}

export default CartWidget;