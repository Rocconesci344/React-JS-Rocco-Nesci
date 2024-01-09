import "./App.css";
import CartView from "./components/CartView/CartView";
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContext, UserProvider } from "./components/context/UserContext";
import { CartProvider } from "./components/context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer/>} />
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  )
  
}

export default App
