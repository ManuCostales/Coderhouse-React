import Item from "./Item/Item.js"

function ItemList ({products}) {
    return (
        <div className="item__list">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList