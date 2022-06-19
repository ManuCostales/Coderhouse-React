import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout(props){

    const orderData = props.orderData

    console.log(orderData)

    return(
        <div className="checkout">
            <div>
                <h2>Orden Realizada!</h2>
                <p>Order Realizada Bajo el ID: {orderData.id}</p>
            </div>
            <div className="info__container">
                <p>Información del Comprador</p>
                <ul className="buyer__info">
                    <li>Nombre: {orderData.buyerData.name}</li>
                    <li>Email: {orderData.buyerData.email}</li>
                    <li>Telefono: {orderData.buyerData.phone}</li>
                    <li>Dirección: {orderData.buyerData.address}</li>
                </ul>
                <p>Información de Productos</p>
                {orderData.products.map(prod => <div className="product__info" key={prod.id}>
                    <div>Name: { prod.name }</div>
                    <div>Unit Price: ${ prod.unitPrice }</div>
                    <div>Total Price: ${ prod.totalPrice }</div>
                    <div>Stock: { prod.stock }</div>
                    <div>Quantity: { prod.quantity }</div>
                    </div>)}
            </div>
            <p className="total__pay">Total a Pagar: ${orderData.total}</p>
        </div>
    )
}

export default Checkout