import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react"
import { pedirDatos } from "./Datos";
import { useParams } from "react-router-dom";

const ItemListContainer= ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos() // <= Promise
            .then((data) => {
                const items = categoryId 
                    ? data.filter(prod => prod.category === categoryId)
                    : data

                setProductos(items)
            })
            .finally(() => setLoading( false ))
    }, [categoryId])

    return(
        <>
        
        {loading ? (
        <h2 className="text-center text-4xl mt-8">Cargando productos, Por favor espere...</h2>
        ) : (
            <ItemList productos={productos} />
        )}

        </>
    )
}

export default ItemListContainer