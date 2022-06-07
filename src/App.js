import './App.css';
import React, { useState, createContext } from "react"
import {Nav} from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, Route, BrowserRouter } from "react-router-dom"

export const Context = createContext()

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd])
  }

  return (
    <div className="App">
      <Context.Provider value={{ addItem }}>
        <BrowserRouter>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer cat="Todo" />}/>
              <Route path="/category/:id" element={<ItemListContainer cat="Filtrado"/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<h1>Cart</h1>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
