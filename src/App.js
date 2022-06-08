import './App.css';
import React, { useState, createContext } from "react"
import {Nav} from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cart from "./components/Cart/Cart.js"  
import { CartContextProvider } from "./context/CartContext"

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer cat="Todo" />}/>
              <Route path="/category/:id" element={<ItemListContainer cat="Filtrado"/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
