import { useState } from "react"

function ItemCount ({ onConfirm, onAddItem, onRemoveItem, item, stock, initial, onAdd}){

    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count < 1){
            return
        }
        setCount(prev => prev - 1)
        console.log(count)
    }

    const increment = () => {
        if (count + 1 > stock){
            return
        }
        else if (count === 0){
            setCount(count + 1)
            console.log(count)
        }
        else {
            setCount(prev => prev + 1)
            console.log(count)
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
            alert("Has seleccionado " + count + " " + item)
        }
    }

    return (
        <div className="itemCount">
            <p className="itemName">{item}</p>
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