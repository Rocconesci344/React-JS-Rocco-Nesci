import CardWidget from "./CardWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

    return(
    <header className="header">
        <div className="HeaderContent">
            <nav className="">
                <Link to= '/' className="TextHeader mx-2.5"> Home</Link>
                <Link to= '/productos/Game4' className="TextHeader mx-2.5"> Juegos PS4</Link>
                <Link to= '/productos/Game5' className="TextHeader mx-2.5"> Juegos PS5</Link>
                <Link to= '/productos/Headset' className="TextHeader mx-2.5"> Headsets</Link>
                <Link to= '/productos/Console' className="TextHeader mx-2.5"> Consolas</Link>
            </nav>
            <CardWidget/>
        </div>
    </header>
    )
}

export default Navbar