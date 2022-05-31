import ItemList from "../ItemList/ItemList.js"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../asyncmockDetails.js"

function ItemListContainer (props){

    const [products, setProducts] = useState([])

    const { id } = useParams()

    console.log(id)

    useEffect (() => {
        if(!id) {
            getProducts().then(response => {
                setProducts(response)
            })
        }
        else {
            getProductsByCategory(id).then(response => {
                setProducts(response)
            })
        }
    }, [id])

    return (
        <div className="wrapper">
            <p>Categoría: {props.cat}</p>
            <div>{props.children}</div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer