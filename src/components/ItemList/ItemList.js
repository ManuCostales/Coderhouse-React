import Item from "../Item/Item"

function ItemList ({products}) {
    console.log(products)
    return (
        <div className="item__list">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList