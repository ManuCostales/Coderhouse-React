import { useState, createContext } from "react"

const CartContext = createContext("Context Inaccesible")

export function CartContextProvider ({children}) {
    
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
      return cart.some(item => item.id === id)
    }

    const addItem = (productToAdd) => {

      if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])
        } else {
          const newCart = cart.map(item => {
            if(item.id === productToAdd.id){
              const AddedItem = {
                ...item,
                quantity: productToAdd.quantity
              }
              return AddedItem
            }
            else {
              return item
            }
          })
          setCart(newCart)
        }
      }

    const removeItem = (id) => {
      const newCart = cart.filter(item => item.id !== id)
      setCart(newCart)
    }

    const clearCart = () => {
      const newCart = []
      setCart(newCart)
    }

    const getQuantity = () => {
      let count = 0
      cart.forEach (item => {
        count += item.quantity
      })
      return count
    }

    const getItemQuantity = (id) => {
      const item = cart.find(prod => prod.id === id)
      return item ? item.quantity : 0
    }

  return (
      <CartContext.Provider value={{ cart, addItem, getQuantity, getItemQuantity, removeItem, clearCart }}>
          {children}
      </CartContext.Provider>
  )
}

export default CartContext