import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
  return (
    
    <article className='CardItem'>
        
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <section>
            <br />
            <p className='Info'>
                Precio: ${price}
            </p>
            <p className='Info'>
                Stock disponible: {stock}
            </p>
            <p>
                Codigo de Juego: {id}
            </p>
            <br />
        </section>
        <footer className='ItemFooter'>
            <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
        </footer>
        <br/>
        
        
        
    </article>
  )
}

export default Item
