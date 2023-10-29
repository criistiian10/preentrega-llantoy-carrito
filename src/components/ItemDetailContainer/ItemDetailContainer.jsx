import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             setProduct(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [itemId])

    useEffect(() => {
      if (id) {
        const collectionProd = collection(db, 'juegos');
        const referenciaAlDoc = doc(collectionProd, id);
    
        getDoc(referenciaAlDoc)
          .then((res) => setProduct({ id: res.id, ...res.data() }))
          .catch((error) => console.log(error));
      }
    }, [id]);

    return (
      <div className='ItemDetailContainer'>
        
        <ItemDetail {...product} />
      </div>
    )
}

export default ItemDetailContainer
