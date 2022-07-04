import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import CartDetail from "./CartDetail/CartDetail"
import CartForm from "./CartForm/CartForm"
import Checkout from "./Checkout/Checkout"
import { Link } from "react-router-dom"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch  }from "firebase/firestore" 
import { database } from "../../services/firebase"


const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    cart.forEach(item => console.log(item))

    const cartTotalPrices = cart.map(item => item.totalPrice)

    let [orderData, setOrderData] = useState({})
    let [buyingState, setBuyingState] = useState(false)
    let [loadingOrder, setLoadingOrder] = useState(true)

    const [buyerData, setBuyerData] = useState({
            name: "",
            email: "",
            phone: "",
            address: ""
    })

    const createOrder = () => {

        const obj = {
            id: '',
            buyerData: buyerData,
            products: cart,
            total: cartTotalPrices
        }

        const collectionRef = collection(database, "orders")

        setBuyingState(true)

        const ids = cart.map(product => product.id)

        const batch = writeBatch(database)

        console.log(ids)

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), "in", ids))).then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const productQuantity = cart.find(product => product.id === doc.id)?.productQuantity

                if(dataDoc.stock >= productQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - productQuantity})
                }else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })  
        }).then (() => {
            if (outOfStock.length===0) {
                const collectionRef = collection(database, "orders")
                addDoc(collectionRef, obj).then(({ id }) => {
                    console.log(id)
                    obj.id = id
                    setLoadingOrder(false)
                })
            } else {
                return Promise.reject({type: "No Stock", products: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit()
            clearCart()
            console.log(`El id de la orden es: ${id}`)
            obj.id = id
            setLoadingOrder(false)
        }).catch(error => {
            console.log(error)
            if (error.type === "No Stock") {

            }
        })
        console.log(obj)
        setOrderData(obj)
        console.log(database)

        // cart.forEach(item =
        cart.map(item => collection(database, "products").doc(item.id).update({
            stock: item.stock - item.quantity
            })
        )
    }

    

    return (
        <div className="cart">
            <h1>Cart</h1>
            <CartDetail />
            { cart.length === 0 ? <div className="no__items">No Items on Cart</div> : <div class="btn__container">
                <button className="clear__cart" onClick={clearCart}>Remove All Items</button>
                <CartForm buyerData={buyerData} setBuyerData={setBuyerData}/>
                <button className="generate__cart" onClick={createOrder}>Generate Order</button>
            </div>}
            { cartTotalPrices.length === 0 ? <Link to="/" className="backToHome">Volver a Comprar</Link> : <p>Total: ${cartTotalPrices.reduce((accum, currentItem) => {
            return accum + currentItem
            })}</p> }
            { loadingOrder === false && <Checkout orderData={orderData} /> }
        </div>
    )
}

export default Cart