import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import getDetails from "../asyncmockDetails"

function ItemDetailContainer () {

    const [detail, setDetail] = useState({})

    useEffect(() => {
        getDetails("1").then(response => setDetail(response) )
    }, [])

    console.log(detail)

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={detail}/>
        </div>
    )

}

export default ItemDetailContainer