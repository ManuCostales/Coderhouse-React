import ItemList from "../ItemList/ItemList.js"
import { useState, useEffect} from "react"
import getProducts from "../asyncmock"

function ItemListContainer (props){

    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className="wrapper">
            <p>Nueva {props.GPU}</p>
            <p>Hardware y Componentes Informaticos</p>
            <div>{props.children}</div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer