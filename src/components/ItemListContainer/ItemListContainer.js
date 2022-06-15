import ItemList from "./ItemList/ItemList.js"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
// import { getProducts, getProductsByCategory } from "../asyncmockDetails.js"
import { getDocs, collection, query, where } from "firebase/firestore"
import { database } from "../../services/firebase"

function ItemListContainer (props){

    const [products, setProducts] = useState([])

    const { id } = useParams()

    console.log(id)

    const onResize = () => console.log("cambio de tamaño")

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    useEffect (() => { 

        const collRef = id ?
        query(collection(database, "products"), where("category", "==", id))
        : (collection(database, "products"))

        getDocs(collRef).then(response => {
            console.log(response.docs)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() } 
            })
            setProducts(products)
        }).catch(error => console.log(error))

        // if(!id) {
        //     getProducts().then(response => {
        //         setProducts(response)
        //     })
        // }
        // else {
        //     getProductsByCategory(id).then(response => {
        //         setProducts(response)
        //     })
        // }
    },)

    return (
        <div className="wrapper">
            <p>Categoría: {props.cat}</p>
            <div>{props.children}</div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer