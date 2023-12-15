import "./App.css";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/" element= {<ItemListContainer greeting="Bienvenidos a mi tienda"/>} />
      <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
      <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
    </Routes>

    </BrowserRouter>
  )
}

export default App
