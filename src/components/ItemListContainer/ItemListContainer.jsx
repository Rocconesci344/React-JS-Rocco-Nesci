import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react"
import { pedirDatos } from "./Datos";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemListContainer= ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
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