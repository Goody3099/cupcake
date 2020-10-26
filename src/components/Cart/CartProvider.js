import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const [messages, setMessages] = useState([])
    const [requests, setRequests] = useState([])
    const [responses, setResponses] = useState([])

    const getCart = () => {
        return fetch(`http://localhost:8088/cart?userId=${parseInt(localStorage.getItem("CCCL_customer"))}`)
        .then(res => res.json())
        .then(setItems)
    }

    const getUserById = (x) => {
        return fetch(`http://localhost:8088/users?id=${x}`)
        .then(res => res.json())
    }

    const getUsers = () => {
        return fetch(`http://localhost:8088/users`)
        .then(res => res.json())
    }

    const getRequestedOrders = () => {
        console.log("called?")
        return fetch(`http://localhost:8088/messages?sentId=${parseInt(localStorage.getItem("CCCL_customer"))}`)
        .then(res => res.json())
        .then(res => {
            setRequests(res)
            return res})
    }

    const getRequestedResponses = () => {
        console.log("called?")
        return fetch(`http://localhost:8088/messages?recId=${parseInt(localStorage.getItem("CCCL_customer"))}`)
        .then(res => res.json())
        .then(res => {
            setResponses(res)
            return res})
    }

    const removeFromCart = (x) => {
        return fetch(`http://localhost:8088/cart/${x}`, {
            method: "DELETE"
        })
        .then(getCart)
    }

    const getMessages = () => {
        return fetch(`http://localhost:8088/messages`)
        .then(res => res.json())
        .then(res => {
            setMessages(res)
            return res})
    }

    const addMessage = (x) => {
        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    return (
        <CartContext.Provider value={{
            items, messages, getUserById, getUsers, getCart, removeFromCart, getMessages, addMessage, requests, getRequestedOrders, responses, getRequestedResponses, setRequests
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
