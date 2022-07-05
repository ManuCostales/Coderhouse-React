import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CartForm (props) {

    const buyer = props.buyerData

    const setBuyerData = props.setBuyerData

    return (
        <div className="cart__form">
            <form>
                <label>Full Name
                    <input type="text" value={buyer.name} onChange={(e) => setBuyerData({...buyer, name: e.target.value})}></input>
                </label>
                <label>Email
                    <input type="email" value={buyer.email} onChange={(e) => setBuyerData({...buyer, email: e.target.value})}></input>
                </label>
                <label>Phone
                    <input type="tel" value={buyer.phone} onChange={(e) => setBuyerData({...buyer, phone: e.target.value})}></input>
                </label>
                <label>Address
                    <input type="text" value={buyer.address} onChange={(e) => setBuyerData({...buyer, address: e.target.value})}></input>
                </label>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    toast("Datos de Comprador Tomados!", {className:"buyerToast"})
                }}>Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}


export default CartForm