import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartDetail from "./CartDetail/CartDetail"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    const cartTotalPrices = cart.map(item=> item.totalPrice)


    console.log(cart)

    return (
        <div className="cart">
            <h1>Cart</h1>
            <CartDetail />
            { cart.length === 0 ? <div className="no__items">No Items on Cart</div> : <button className="clear__cart"onClick={clearCart}>Remove All</button> }
            { cartTotalPrices.length === 0 ? <Link to="/" className="backToHome">Volver a Comprar</Link> : <p>Total: {cartTotalPrices.reduce((accum, currentItem) => {
            return accum + currentItem
            })}</p> }
        </div>
    )
}

export default Cart