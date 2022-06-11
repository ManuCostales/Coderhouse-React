import ItemCount from "./ItemCount/ItemCount"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../../context/CartContext"

function ItemDetail ( {item} ) {

    const stock = item.stock

    const [currentStock, setStock] = useState(stock)

    let [quantity, setQuantity] = useState(0)

    console.log(quantity)

    const { addItem, getItemQuantity } = useContext(CartContext) 

    const initValue = getItemQuantity(item.id)

    let addedItem = {
        id: item.id,
        name: item.name,
        unitPrice: item.price,
        stock: item.stock,
        totalPrice: item.price * quantity,
        quantity: quantity,
    }

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
            console.log("Agregue al carrito")
            console.log(quantity)
            console.log(count)
            setQuantity(count)
            console.log(quantity)
            console.log(addedItem)
            addItem(addedItem)
        }  
    }

    useEffect(() => {
        console.log(item.stock)
        setStock(item.stock)
    }, [item])

    const handleStockRest = (count) => {
        setStock(stock - count)
    }

    const handleStockSum = (count) => {
        if ( count > 0 ) {
            console.log(currentStock)
            setStock(currentStock + 1)
        }
        else {
            return
        }    
    }

    return (
        <div className="detail__card">
            <div className="img__container">
                <img alt={item.name} src={item.img}></img>
            </div>
            <div className="detail__card--body">
                <div>
                    <p>{item.use}</p>
                    <p>{item.selled}</p>
                </div>
                <h3>{item.name}</h3>
                <div>
                    <p>Calification: {item.calification}</p>
                    <p>Category: {item.category}</p>
                </div>
                <h5>${item.price}</h5>
                <p className="descr">{item.description}</p>
                <p className="specific">{item.specific}</p>
                <div className="detail__body--buy">
                    <p>Stock: {currentStock} Units</p>
                    { quantity > 0 ? <Link className="linkToCart" to="/cart">Finalizar Compra</Link> : <ItemCount onConfirm={handleOnAdd} onAddItem={handleStockRest} onRemoveItem={handleStockSum} item={item.name} stock={item.stock} initial={initValue} /> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail