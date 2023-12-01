import CardWidget from "./CardWidget"

const Navbar = () => {

    return(
    <header className="header">
        <div className="HeaderContent">
            <nav className="">
                <a className="TextHeader" href= '#'> Home</a>
                <a className="TextHeader" href= '#'> Juegos</a>
                <a className="TextHeader" href= '#'> Consolas</a>
            </nav>
            <CardWidget/>
        </div>
    </header>
    )
}

export default Navbar