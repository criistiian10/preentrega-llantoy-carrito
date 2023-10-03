import { useEffect, useState } from 'react'
import { getProducts,  getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    // Verificamos si categoryId está definido
    if (categoryId) {
      getProductsByCategory(categoryId) // Llamar a getProductsByCategory si categoryId está definido
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      // Llamar a getProducts si categoryId no está definido
      getProducts()
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer