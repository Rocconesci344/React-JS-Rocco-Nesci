import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        const docRef= doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
            .finally (() => setLoading(false))
    }, [itemId]); 

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