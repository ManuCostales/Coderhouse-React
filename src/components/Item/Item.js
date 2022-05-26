

function Item ({id, name, price, category, img}) {
    return (
        <div className="card">
            <div className="card__head">
                <p>{id}</p>
                <h3>{name}</h3>
            </div>
            <img src={img} alt={name}></img>
            <p className="card__price">${price}</p>
            <p className="card__category">{category}</p>
        </div>
    )
}

export default Item