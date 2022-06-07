import ItemCount from "./ItemCount/ItemCount"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../App"

function ItemDetail ( {item} ) {

    const stock = item.stock

    const [currentStock, setStock] = useState(stock)

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(Context)

    let addedItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity,
    }

    const handleOnAdd = (count) => {
        console.log("Agregue al carrito")
        console.log(quantity)
        console.log(count)
        setQuantity(count)
        console.log(quantity)
        addItem(addedItem)  
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
                    { quantity > 0 ? <Link className="linkToCart" to="/cart">Finalizar Compra</Link> : <ItemCount onConfirm={handleOnAdd} onAddItem={handleStockRest} onRemoveItem={handleStockSum} item={item.name} stock={item.stock} initial={0} /> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail