import './App.css';
import React from "react"
import {Nav} from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
        <div className="App-header"><Nav /></div>
        <ItemListContainer />
        <ItemDetailContainer />
    </div>
  );
}

export default App;
