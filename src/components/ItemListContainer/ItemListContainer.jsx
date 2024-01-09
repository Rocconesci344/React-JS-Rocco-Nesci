import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer= () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
                        ? query( productosRef, where('category', '==', categoryId))
                        : productosRef

        getDocs(docsRef)
            .then((querySnapshot) => {
            const docs = querySnapshot.docs.map(doc => {
                return {
                ...doc.data(),
                id: doc.id
                }
            })
        
            setProductos( docs )
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    return(
        <>
        {loading ? (
            <div className="flex justify-center flex-col items-center">
                <h2 className="text-center text-4xl mt-8">Cargando productos, Por favor espere...</h2>
                <Loading/>
            </div>
        
        ) : (
            <ItemList productos={productos} />
        )}

        </>
    )
}

export default ItemListContainer