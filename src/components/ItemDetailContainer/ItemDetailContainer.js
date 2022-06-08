import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { getDetails } from "../asyncmockDetails"
import { useParams } from "react-router-dom"
import CartContext from "../../context/CartContext"

function ItemDetailContainer ({ setCart }) {

    const [detail, setDetail] = useState({})

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        getDetails(id).then(response => setDetail(response) )
    }, [])

    console.log(detail)

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={detail} />
        </div>
    )

}

export default ItemDetailContainer