
function ItemDetail ( {item} ) {
    return (
        <div className="detail__card">
            <img alt={item.name} src={item.img}></img>
            <div className="detail__card--body">
                <div>
                    <p>{item.use}</p>
                    <p>{item.selled}</p>
                </div>
                <h3>{item.name}</h3>
                <div>
                    <p>Calification: {item.calification}</p>
                    <p>Category: {item.category}</p>
                </div>
                <h5>${item.price}</h5>
                <p className="descr">{item.description}</p>
                <p className="specific">{item.specific}</p>
                <div className="detail__body--buy">
                    <p>Stock: {item.stock} Units</p>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail