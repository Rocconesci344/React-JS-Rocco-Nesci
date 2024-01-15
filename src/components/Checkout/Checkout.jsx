import { useContext, useState } from "react";
import { db } from "../../firebase/config";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, setDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore";
import Boton from "../../Utils/Boton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });
    
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orden = {
        cliente: values,
        items: cart,
        total: totalCart(),
        fecha: new Date(),
    };

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, 'productos')
    const itemsQuery = query(productsRef, where( documentId(), 'in', cart.map(prod => prod.id) ))
    const querySnapshot = await getDocs(itemsQuery)

    const outOfStock = []

    querySnapshot.docs.forEach(doc =>{
        const item = cart.find(prod => prod.id === doc.id)
        const stock = doc.data().stock

        if (stock >= item.cantidad){
            batch.update(doc.ref, {
                stock: stock - item.cantidad
            })
        } else {
            outOfStock.push(item)
        }
    })
    if (outOfStock.length === 0) {
        batch.commit()
            .then(() => {      
                addDoc(ordersRef, orden).then((doc) => {
                    setOrderId(doc.id)
                    clearCart()
                });
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hay items sin stock, Revisar",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    };

    if (orderId) {
        return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
            <p>Tu ordenID es: <span className="font-bold text-2xl">{orderId}</span></p>
            <Boton><Link to={"/"}>Volver</Link></Boton>
        </div>
        );
    }

    return (
    <div className="container m-auto mt-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold">Checkout</h2>
        <h4>Ingresta tus datos:</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mt-4">
            <input className="border p-2" type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name="nombre"/>
            <input className="border p-2" type="text" placeholder="Dirección" value={values.direccion} onChange={handleInputChange} name="direccion"/>
            <input className="border p-2" type="email" placeholder="Email" value={values.email} onChange={handleInputChange}  name="email"/>
            <button type="submit" className="bg-blue-500 text-white py-2">Enviar</button>
        </form>
    </div>
    );
};

    export default Checkout;