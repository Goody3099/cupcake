import React, { createContext, useState } from "react"
import "./Message.css"

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    
    const getMessages = () => {
        return fetch(`http://localhost:8088/reviews?_expand=user`)
        .then(res => res.json())
        .then(setMessages)
    }

    const addMessage = (x) => {
        return fetch(`http://localhost:8088/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
        .then(getMessages)
    }

    const deleteMessage = (x) => {
        return fetch(`http://localhost:8088/reviews/${x}`, {
            method: "DELETE"
        })
        .then(getMessages)
    }

    const editMessage = (id, x) => {
        return fetch(`http://localhost:8088/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
        .then(getMessages)
    }

    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/reviews/${id}`)
        .then(res => res.json())
        .then(res => {
            setMessages(res)
            return res})
    }

    return ( 
        <MessageContext.Provider value={{
            messages, getMessages, getMessageById, addMessage, deleteMessage, editMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}