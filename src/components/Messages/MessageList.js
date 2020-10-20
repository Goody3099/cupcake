import React, { useContext, useEffect, useRef, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import "./Message.css"

export const MessageList = () => {
    const { messages, getMessages, addMessage, deleteMessage } = useContext(MessageContext)

    const message = useRef()

    const [changeMessageList, setChangeMessageList] = useState({})

    useEffect(() => {
        getMessages()
        message.current.value = ""
    }, [changeMessageList])

    const constructMessageObject = () => {
        addMessage({
            message: message.current.value,
            userId: parseInt(localStorage.getItem("CCCL_customer"))
        })
        .then(setChangeMessageList)
    }

    return (
        <>
            <h2>Messages</h2>
            <div className="messages">
                {
                    messages.map(message => {
                        return <MessageCard key={message.id} message={message} />
                    })
                }
            </div>
                <div className="formGroup">
                    <input type="text" ref={message} id="message" name="name" className="formControl" 
                    placeholder="..."/>
                </div>
            <button className="messageBtn"
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructMessageObject()
                }}>
            Submit 
            </button>
        </>
    )
}