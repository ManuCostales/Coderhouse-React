

function ItemListContainer (props){

    console.log(props.children)

    return (
        <div className="wrapper">
            <p>Nueva {props.GPU}</p>
            <p>Hardware y Componentes Informaticos</p>
            <div>{props.children}</div>
        </div>
    )
}

export default ItemListContainer