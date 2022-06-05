import './App.css';
import React from "react"
import {Nav} from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer cat="Todo" />}/>
            <Route path="/category/:id" element={<ItemListContainer cat="Filtrado"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
