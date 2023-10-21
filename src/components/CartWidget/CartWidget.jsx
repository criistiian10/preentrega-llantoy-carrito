import React from 'react'
import '../NavBar/NavBar.css'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className={`CartWidget ${totalQuantity === 0 ? 'hidden' : ''}`}>
      <FaShoppingCart className='CartImg' />
      {totalQuantity}
    </Link>
  )
}

export default CartWidget