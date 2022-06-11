import React from "react"
import cart from "./cart.svg"
import { useContext } from "react"
import CartContext from "../../../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget({className = ""}){

    const { getQuantity } = useContext(CartContext) 

    const quantity = getQuantity()

    return(
        <Link to="/cart" className={className}>
            <img src={cart} alt="cart"></img>
            {quantity}
        </Link>
    )
}

export default CartWidget