import ItemCount from "./ItemCount/ItemCount"
import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import CartContext from "../../../context/CartContext"

function ItemDetail ( {item} ) {

    const navigate = useNavigate();

    const stock = item.stock

    const [currentStock, setStock] = useState(item.stock)

    const [buyingState, setBuyingState] = useState(true)

    let [quantity, setQuantity] = useState(0)

    const { addItem, getItemQuantity } = useContext(CartContext) 

    const initValue = getItemQuantity(item.id)

    const handleOnAdd = (count) => {
        if (count === 0){
            alert("Por favor, selecciona una cantidad")
        }
        else if(stock < 1){
            alert("Lo sentimos, no hay stock")
            return
        }
        else {
            alert("Has seleccionado " + count + " " + item.name)
            setQuantity(count)
            let addedItem = {
                id: item.id,
                name: item.name,
                unitPrice: item.price,
                stock: item.stock,
                totalPrice: item.price * count,
                quantity: count,
            }
            addItem(addedItem)
            setBuyingState(false)
        }
    }

    useEffect(() => {
        setStock(item.stock)
    }, [item])

    const handleStockRest = (count) => {
        if (item.stock >= currentStock && currentStock > 0) {
            setStock(currentStock - 1)
        }
        else {
            return
        }
    }

    const handleStockSum = (count) => {
        if ( currentStock >= 0 && currentStock < item.stock) {
            setStock(currentStock + 1)
        }
        else {
            return
        }    
    }

    return (
        <div className="detail__card">
            <div className="card__div img__container">
                <img alt={item.name} src={item.img}></img>
            </div>
            <div className="detail__card--body">
                <div className="close__div" >
                    <a onClick={() => navigate(-1)}>
                        <img className="close__img" src="https://icongr.am/fontawesome/times-circle.svg?size=128&color=ffffff"></img>
                    </a>
                </div>
                <div className="card__div">
                    <p>{item.use}</p>
                    <p>{item.selled}</p>
                </div>
                <h3>{item.name}</h3>
                <div className="card__div">
                    <p>Calification: {item.calification}</p>
                    <p>Category: {item.category}</p>
                </div>
                <h5>${item.price}</h5>
                <p className="descr">{item.description}</p>
                <p className="specific">{item.specific}</p>
                <div className="card__div detail__body--buy">
                    <p>Stock: {currentStock} Units</p>
                    { buyingState === false ? <Link className="linkToCart" to="/cart">Finalizar Compra</Link> : <ItemCount onConfirm={handleOnAdd} onAddItem={handleStockRest} onRemoveItem={handleStockSum} item={item} stock={currentStock} initial={quantity} /> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail