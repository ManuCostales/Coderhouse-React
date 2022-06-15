import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { getDetails } from "../asyncmockDetails"
import { useParams } from "react-router-dom"
import CartContext from "../../context/CartContext"
import { getDoc, doc } from "firebase/firestore" 
import { database } from "../../services/firebase"

function ItemDetailContainer ({ setCart }) {

    const [detail, setDetail] = useState({})

    const {id} = useParams()

    console.log(id)

    useEffect(() => {

        getDoc(doc(database, "products", id)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data() }
            setDetail(product)
        }).catch(error => console.log(error))
        // getDetails(id).then(response => setDetail(response) )
    }, [])

    console.log(detail)

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={detail} />
        </div>
    )

}

export default ItemDetailContainer