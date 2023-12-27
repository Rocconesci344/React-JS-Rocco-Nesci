import { Link } from "react-router-dom";
import Boton from "../../Utils/Boton";

const ItemCard = ({item}) => {

  return (
    <article className="w-80 h-card flex flex-col m-2 shadow-lg	shadow-black p-2  hover:scale-110">
      <img className="w-96	h-96	" src={item.img} alt={item.name} />
      <h3 className="text-2xl font-semibol font-bold flex justify-center">{item.name}</h3>
      <p className="h-p font-mono">Se puede realizar el pago en 1, 3, 6, 9, y 12 cuotas sin interres</p>
      <p className="text-xl font-bold justify-center flex text-lime-700	">Precio: ${item.price}</p>
      <Boton>
      <Link to={`/item/${item.id}`}>Detalle</Link>
      </Boton>
      
    </article>
  );
};

export default ItemCard;
