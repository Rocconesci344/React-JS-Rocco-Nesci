import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container m-auto mt-8">

      <h2 className="text-4xl font-bold flex justify-center">Productos</h2>
      <div className="grid-cols-3 grid justify-start gap-10 items-center pt-2	m-7">
        {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
      </div>
    </section>
  );
};

export default ItemList;
