import { useState } from "react"

function ItemCount ({ onConfirm, onAddItem, onRemoveItem, item, stock, initial, onAdd}){

    let [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 0){
            setCount(prev => prev - 1)
        }
        else {
            return
        }
    }

    const increment = () => {
        if (count < item.stock){
            setCount(prev => prev + 1)
        }
        else {
            return
        }
    }

    onAdd = () => {
        if (count === 0){
            alert("Por favor, selecciona una cantidad")
        }
        else if(stock < 1){
            alert("Lo sentimos, no hay stock")
            return
        }
        else {
            alert("Has seleccionado " + count + " " + item.name)
        }
    }

    return (
        <div className="itemCount">
            <p className="itemName">{item.name}</p>
            <div className="itemCountInput">
                <button onClick={()=>{
                    decrement()
                    onRemoveItem(count - 1)
                }}>-</button>
                <p>{count}</p>
                <button onClick={()=>{
                    increment()
                    onAddItem(count + 1)
                    }}>+</button>
            </div>
            <button className="addToCart" onClick={() => onConfirm(count)}>Agregar al Carrito</button>
        </div>
    )
}


export default ItemCount