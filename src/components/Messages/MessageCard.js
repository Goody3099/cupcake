import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./Message.css"
import { MessageContext } from "./MessageProvider"

export const MessageCard = ({ message }) => {

    const { deleteMessage } = useContext(MessageContext)

    const history = useHistory()

    const hideDelete = () => {
        if (parseInt(localStorage.getItem("CCCL_customer")) === message.userId) {
            return false
        }
        if (localStorage.getItem("CCCL_admin")) {
            return false
        }
        else { return true }
    }

    const hideEdit = () => {
        if (parseInt(localStorage.getItem("CCCL_customer")) === message.userId) {
            return false
        }
        else {
            return true
        }
    }
    
    return (
        <section className="message">
            <h3 className="messageText">{message.message}</h3>
            <div className="messageUser">{message.user.username}</div>
            <button hidden={hideDelete()}
                className="messageDeleteBtn"
                onClick={event => {
                    event.preventDefault()
                    deleteMessage(message.id)
                }}>
                Delete
            </button>
            <button hidden={hideEdit()} className="messageEditBtn"
                onClick={event => {
                    history.push(`/edit/${message.id}`)
                }}>Edit</button>
        </section>
    )
}