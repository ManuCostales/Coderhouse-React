import ItemList from "./ItemList/ItemList.js"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
// import { getProducts, getProductsByCategory } from "../asyncmockDetails.js"
// import { getDocs, collection, query, where } from "firebase/firestore"
// import { database } from "../../services/firebase"
import { getProducts } from "../../services/firebase/firestore"
import { SpinnerCircular } from 'spinners-react'

function ItemListContainer (props){

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    console.log(id)

    useEffect (() => { 

        getProducts(id).then(response  => {
            setProducts(response)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            console.log(error)
        }).finally(() => {
        })
    },)

    return (
        <div className="list__container">
            { loading === true ? <SpinnerCircular size="300px" сolor='#00FFD1' /> : 
            <div className="wrapper">
                <p className="category__name">{ id === undefined ? "Todos Los Productos" : id + "s"}</p>
                <div>{props.children}</div>
                <ItemList products={products}/>
            </div>}
        </div>
        
    )
}

export default ItemListContainer