import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CartForm (props) {

    const buyer = props.buyerData
    const setBuyerData = props.setBuyerData

    const setValidation = props.setValidation

        const handleValidation = () => {

            const validateName = /^[a-zA-Z]+ [a-zA-Z]+$/
            const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const validatePhone = /^\d+$/
    
            if (!buyer.name.match(validateName) || buyer.name === "") {
                console.log("NOMBRE NO VALIDO")
                alert("Nombre no valido, por favor escribe: Nombre Apellido")
            }
            else if (!buyer.email.toLowerCase().match(validateEmail) || buyer.name === ""){
                alert("Email no valido, introduce un Email correcto")
                console.log("EMAIL NO VALIDO")
            }
            else if (!buyer.phone.match(validatePhone) || buyer.name === ""){
                alert("Telefono no valido, introduce solo números")
                console.log("TELEFONO NO VALIDO")
            }
            else if (buyer.address === "") {
                alert("Introduce una dirección valida")
            }
            else {
                setValidation(true)
                toast("Datos de Comprador Tomados!", {className:"buyerToast"})
            }
        }

    return (
        <div className="cart__form">
            <form>
                <label>Full Name
                    <input type="text" placeholder="first Name Last Name" value={buyer.name} onChange={(e) => setBuyerData({...buyer, name: e.target.value})}></input>
                </label>
                <label>Email
                    <input type="email" placeholder="Enter your Email" value={buyer.email} onChange={(e) => setBuyerData({...buyer, email: e.target.value})}></input>
                </label>
                <label>Phone
                    <input type="tel" placeholder="Enter your Phone Number" value={buyer.phone} onChange={(e) => setBuyerData({...buyer, phone: e.target.value})}></input>
                </label>
                <label>Address
                    <input type="text" placeholder="Enter your Address" value={buyer.address} onChange={(e) => setBuyerData({...buyer, address: e.target.value})}></input>
                </label>
                <button type="button" onClick={(e) => {
                    e.preventDefault()
                    handleValidation()
                }}>Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}


export default CartForm