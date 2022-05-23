import { useState } from "react"

function ItemCount ({ item, stock, initial, onAdd}){

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count < 1){
            return
        }
        setCount(count - 1)
        console.log(count)
    }

    const increment = () => {
        if (count + 1 > stock){
            return
        }
        setCount(count + 1)
        console.log(count)
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
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <button className="addToCart" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}


export default ItemCount