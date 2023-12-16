import Boton from "../../Utils/Boton";


const ItemDetail = ({ item }) => {
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
        
      <Boton className="bg-green-400">Agregar al carrito</Boton>
      </div>
    </div>
  </div>
  );
};

export default ItemDetail;
