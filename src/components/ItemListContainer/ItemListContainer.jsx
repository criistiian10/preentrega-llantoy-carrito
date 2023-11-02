
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoriaId ? 
        query(collection(db, 'juegos'), where('category', '==', categoriaId))
        : collection(db, 'juegos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        },[categoriaId])

    return(
        <div>
            { 
            loading ? <p>cargando...</p> 
            : <div><h1 className="greeting">{greeting}</h1>
                <h1 className="greeting">{categoriaId}</h1>
                <ItemList products={products} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer;