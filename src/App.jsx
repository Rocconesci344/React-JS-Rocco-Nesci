import "./App.css";
import CartView from "./components/CartView/CartView";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import { UserContext, UserProvider } from "./components/context/UserContext";
import { CartProvider } from "./components/context/CartContext";

function App() {

  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>

          <Navbar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer greeting="Bienvenidos a mi tienda"/>} />
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={<CartView />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </UserProvider>

  )
}

export default App
