import React from "react"
import cart from "./cart.svg"

function Cart(props){
    return(
        <div className="cart__div">
            <img src={cart} alt="cart"></img>
            <p className="cart__items--number">0</p>
        </div>
    )
}

export default Cart