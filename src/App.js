import './App.css';
import React from "react"
import {Nav} from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  return (
    <div className="App">
      <div className="App-header"><Nav /></div>
      
      <ItemListContainer GPU="NVIDIA GTX 3090">
        <ItemCount item={"Ryzen 5 3600g"} stock={12} initial={1} />
      </ItemListContainer>
    </div>
  );
}

export default App;
