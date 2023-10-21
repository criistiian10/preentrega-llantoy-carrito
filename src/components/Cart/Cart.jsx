import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'



const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    
    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
      <div className='boleta2'>
          { cart.map(p => <CartItem key={p.id} {...p}/>) }
          <div className='totalLimpiar'>
              <h3>Total: ${total}</h3>
              <button onClick={() => clearCart()} className='Button1'>Limpiar carrito</button>
          </div>
          <Link to='/checkout' className='Option'>Checkout</Link>
      </div>
    )
}

export default Cart
