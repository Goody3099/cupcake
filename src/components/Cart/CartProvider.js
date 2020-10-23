import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const [messages, setMessages] = useState([])

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

    const getMessages = () => {
        return fetch(`http://localhost:8088/messages`)
        .then(res => res.json())
        .then(setMessages)
    }

    const addMessage = (x) => {
        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
        .then(getMessages)
    }

    return (
        <CartContext.Provider value={{
            items, messages, getCart, removeFromCart, getMessages, addMessage
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
