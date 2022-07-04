import React from "react"
import CartWidget from "./CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/CartContext"

function Nav(props){

    const { cart } = useContext(CartContext)

    const itemsInCart = cart.length

    console.log(itemsInCart)

    return(
        <div className="nav">
            <div className="navbar">
                <div style={{color: "white"}}className="navbar__title">
                    <h2 style={{fontSize: "2rem"}}><Link to={`/`}>NEBULA</Link></h2>
                    <p>PC Store</p>
                </div>
                <input className="navbar__search"></input>
                <ul className="navbar__list">
                    <li><NavLink to={`/category/CPU`} className={({ isActive }) => isActive ? "ActiveLink" : "Link" }>Procesadores</NavLink></li>
                    <li><NavLink to={`/category/Motherboard`} className={({ isActive }) => isActive ? "ActiveLink" : "Link" }>Motherboards</NavLink></li>
                    <li><NavLink to={`/category/GPU`} className={({ isActive }) => isActive ? "ActiveLink" : "Link" }>Placas de Video</NavLink></li>
                </ul>
                <CartWidget className= {itemsInCart === 0 ? "displayNone" : "displayFlex" } />
            </div>
            <div className="nav-footer"/>
        </div>
    )
}

export {
    Nav,
}


