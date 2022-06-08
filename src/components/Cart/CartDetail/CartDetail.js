import { useContext } from "react"
import CartContext from "../../../context/CartContext"

function CartDetail () {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <div className="cart__detail">
                {cart.map(prod => <div className="cart__detail--row" key={prod.id}>
                    <div>Name: { prod.name }</div>
                    <div>Price: ${ prod.price }</div>
                    <div>Stock: { prod.stock }</div>
                    <div>Quantity: { prod.quantity }</div>
                    <button className="remove__item" onClick={() => removeItem(prod.id)}>X</button>
                    </div>)}
            </div>
    )

}

export default CartDetail