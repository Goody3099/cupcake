import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const getCart = () => {
        return fetch(`http://localhost:8088/cart?userId=${parseInt(localStorage.getItem("CCCL_customer"))}`)
        .then(res => res.json())
        .then(setItems)
    }

    const removeFromCart = (x) => {
        console.log(x)
        return fetch(`http://localhost:8088/cart/${x}`, {
            method: "DELETE"
        })
        .then(getCart)
    }

    return (
        <CartContext.Provider value={{
            items, getCart, removeFromCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
