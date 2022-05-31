import React from "react"
import CartWidget from "./CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"


function Nav(props){
    return(
        <div className="nav">
            <div className="navbar">
                <div style={{color: "white"}}className="navbar__title">
                    <h2 style={{fontSize: "2rem"}}><Link to={`/`}>NEBULA</Link></h2>
                    <p>PC Store</p>
                </div>
                <input className="navbar__search"></input>
                <ul className="navbar__list">
                    {/* <li><Link to={`/category/GPU`}>Placas de Video</Link></li>
                    <li><Link to={`/category/CPU`}>Procesadores</Link></li>
                    <li><Link to={`/category/Motherboard`}>Motherboards</Link></li> */}
                    <li><NavLink to={`/category/CPU`} className={({ isActive }) => isActive ? "ActiveLink" : "Link" }>Procesadores</NavLink></li>
                    <li><NavLink to={`/category/Motherboard`} className={({ isActive }) => isActive ? "ActiveLink" : "Link" }>Motherboards</NavLink></li>
                    <li><NavLink to={`/category/GPU`} className={({ isActive }) => isActive ? "ActiveLink" : "Link" }>Placas de Video</NavLink></li>
                </ul>
                <CartWidget />
            </div>
            <div className="nav-footer"/>
        </div>
    )
}

export {
    Nav,
}


