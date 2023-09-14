import React from 'react'
import '../NavBar/NavBar.css'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart className="mi-icono-personalizado"/>
      0
    </div>
  )
}

export default CartWidget