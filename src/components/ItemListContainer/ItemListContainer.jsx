

const ItemListContainer= ({greeting}) => {

    return(
        <section>
            <div className="DivTitulo">
                <h1 className="Titulo">Catalogo</h1>
                <p className="greeting">{greeting}</p>
            </div>
        </section>
    )
}

export default ItemListContainer