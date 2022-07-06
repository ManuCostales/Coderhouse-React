import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore" 
import { database } from "../../services/firebase"
import { Link } from "react-router-dom"

function ItemDetailContainer ({ setCart }) {

    const [detail, setDetail] = useState({})

    const {id} = useParams()

    useEffect(() => {

        getDoc(doc(database, "products", id)).then(response => {
            const product = { id: response.id, ...response.data() }
            setDetail(product)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div className="itemDetailContainer">
            { detail == null || undefined ? <p>Ups! Este producto ya no existe! <Link to={'/'}>Volver a Comprar</Link></p> : <ItemDetail item={detail}/>}
        </div>
    )

}

export default ItemDetailContainer