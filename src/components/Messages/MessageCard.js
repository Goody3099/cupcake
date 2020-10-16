import React, { useContext } from "react"
import "./Message.css"
import { MessageContext } from "./MessageProvider"

export const MessageCard = ({ message }) => {

    const { deleteMessage, editMessage } = useContext(MessageContext)

    return (
        <section className="message">
            <h3 className="messageText">{message.message}</h3>
            <div className="messageUser">{message.user.username}</div>
            <button className="messageDeleteBtn"
                onClick={event => {
                    event.preventDefault()
                    deleteMessage(message.id)
                }}>
                Delete
            </button>
            <button className="messageEditBtn"
                onClick={event => {
                    event.preventDefault()
                    editMessage(message.id, {
                        message: message.message,
                        userId: parseInt(localStorage.getItem("CCCL_customer"))
                    })
                }
                }>Edit</button>
        </section>
    )
}