import ItemList from "./ItemList/ItemList.js"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore"
import { SpinnerCircular } from 'spinners-react'

function ItemListContainer (props){

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect (() => { 

        getProducts(id).then(response  => {
            setProducts(response)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
        }).finally(() => {
        })
    },[id])

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