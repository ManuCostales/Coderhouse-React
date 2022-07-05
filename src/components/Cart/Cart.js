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

        const collectionRef2 = collection(database, "products")

        setBuyingState(true)

        const ids = cart.map(product => product.id)

        const batch = writeBatch(database)

        const outOfStock = []

        getDocs(query(collectionRef2, where(documentId(), "in", ids))).then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const productQuantity = cart.find(product => product.id === doc.id)?.quantity
                if(dataDoc.stock >= productQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - productQuantity})
                }else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })  
        }).then (() => {
            if (outOfStock.length === 0) {
                const collectionRef = collection(database, "orders")
                setLoadingOrder(false)
                return addDoc(collectionRef, obj)
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
        setOrderData(obj)
    }

    

    return (
        <div className="cart">
            <div className="close__div" >
                <h1>Cart</h1>
                <Link to="/">
                    <img className="close__img" src="https://icongr.am/fontawesome/times-circle.svg?size=128&color=ffffff"></img>
                </Link>
            </div>
            <CartDetail />
            { cart.length === 0 ? <div className="no__items">No Items on Cart</div> : <div class="btn__container">
                <button className="clear__cart" onClick={clearCart}>Remove All Items</button>
                <CartForm buyerData={buyerData} setBuyerData={setBuyerData}/>
                <button className="generate__cart" onClick={createOrder}>Generate Order</button>
            </div>}
            { cartTotalPrices.length === 0 ? <Link to="/" className="backToHome">Volver a Comprar</Link> : <p className="total__price">Total: ${cartTotalPrices.reduce((accum, currentItem) => {
            return accum + currentItem
            })}</p> }
            { loadingOrder === false && <Checkout orderData={orderData} /> }
        </div>
    )
}

export default Cart