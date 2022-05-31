import './App.css';
import React from "react"
import {Nav} from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header"><Nav /></div>
        <Routes>
          <Route path="/" element={<ItemListContainer GPU="NVIDIA GTX 3090" >
              <ItemCount item={"Ryzen 5 3600g"} stock={12} initial={1} />
              <ItemDetailContainer />
            </ItemListContainer>}/>
          <ItemListContainer >
            
          </ItemListContainer>
          <Route path="/category/:id"  />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
