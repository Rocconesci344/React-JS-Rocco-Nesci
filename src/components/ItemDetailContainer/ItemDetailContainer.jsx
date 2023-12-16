import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../ItemListContainer/Datos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        pedirDatos()
            .then((data) => {
            setItem( data.find(prod => prod.id === Number(itemId)) )
        })
            .finally(() => setLoading(false));
    }, []);

    return (
    <>
        {loading ? (
            <div className="flex justify-center flex-col items-center">
                <h2 className="text-center text-4xl mt-8">Cargando Producto ...</h2>
                <Loading/>
            </div>
        ) : (
            <ItemDetail item={item}/>
        )}
    </>
    );
};
    export default ItemDetailContainer;