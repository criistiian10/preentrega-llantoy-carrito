import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)


  const { itemId } = useParams()

  useEffect(() => {
      

      const docRef = doc(db, 'juegos', itemId)

      getDoc(docRef)
          .then(response => {
              const data = response.data()
              const productsAdapted = {id: response.id, ...data}
              setProduct(productsAdapted)
          })
          .catch(error => {
              console.log(error)
          })
          
  }, [itemId])

    return (
      <div className='ItemDetailContainer'>
        
        <ItemDetail {...product} />
      </div>
    )
}

export default ItemDetailContainer
