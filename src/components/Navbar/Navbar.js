import React from "react"
import CartWidget from "./CartWidget/CartWidget"


function Nav(props){
    return(
        <div className="nav">
            <div className="navbar">
                <div className="navbar__title">
                    <h2>NEBULA</h2>
                    <p>PC Store</p>
                </div>
                <input className="navbar__search"></input>
                <ul className="navbar__list ">
                    <li><a href="">SHOP</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
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


