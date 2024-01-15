import Boton from "../../Utils/Boton";
import { useContext, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    }

    addToCart(itemToCart)
  }

  const handleVolver = () => {
    navigate(-1)
  }



  return (
  <div className="container m-auto mt-8">
    <div className="gap-8 pt-4 Grid-ID">
      <div className="flex justify-center">
        <img className="w-96 h" src={item.img} alt={item.name} />
      </div>

      
      <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl font-semibold">{item.name}</h3>
        <p className="font-mono p-4">{item.description}</p>
        <p className="text-xl font-bold text-lime-700	">Precio: ${item.price}</p>
        { item.stock <= 5 && <p className="font-bold text-red-500">Quedan sólo {item.stock} unidades</p> }
        {
          isInCart( item.id )
            ? <>
                <Boton><Link to="/cart">Terminar mi compra</Link></Boton> 
                <Boton onClick={handleVolver}>Volver</Boton>
              </>
              
            : <>
                <QuantitySelector 
                  cantidad={cantidad}
                  stock={item.stock}
                  setCantidad={ setCantidad }
                />          
                <Boton className="bg-green-400" onClick={handleAgregar} disabled={item.stock === 0}>Agregar al carrito</Boton>
                <Boton onClick={handleVolver}>Volver</Boton>
              </>
          }
      </div>
    </div>
  </div>
  );
};

export default ItemDetail;
