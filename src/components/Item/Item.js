import { Link } from "react-router-dom"

function Item ({id, name, price, category, img}) {
    return (
        <div className="card">
            <div className="card__head">
                <p>{id}</p>
                <h3>{name}</h3>
            </div>
            <div className="item__img">
                <img src={img} alt={name}></img>
            </div>
            <p className="card__price">${price}</p>
            <p className="card__category">{category}</p>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item