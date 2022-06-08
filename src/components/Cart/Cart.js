import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartDetail from "./CartDetail/CartDetail"


const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    console.log(cart)

    return (
        <div className="cart">
            <h1>Cart</h1>
            <CartDetail />
            { cart.length === 0 ? <div className="no__items">No Items on Cart</div> : <button className="clear__cart"onClick={clearCart}>Remove All</button> } 
        </div>
    )
}

export default Cart