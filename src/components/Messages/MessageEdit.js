import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MessageContext } from "./MessageProvider"

export const MessageEdit = () => {
    const { editMessage, getMessageById } = useContext(MessageContext)

    const [isLoading, setIsLoading] = useState(true)
    const [messages, setMessages] = useState({})

    const {messageId} = useParams()
    const history = useHistory()

    const handleInputChange = (e) => {
        const newMessage = {...messages}
        newMessage[e.target.name] = e.target.value
        console.log("change", newMessage)
        setMessages(newMessage)
    }

    useEffect(() => {
        getMessageById(messageId)
        .then(x => {
            setMessages(x)
            setIsLoading(false)
        })
    }, [])

    const constructEditMessageObject = () => {
        console.log("messages", messages)
        editMessage(messageId, {
            message: messages.message,
        })
        .then(() => history.push(`/`))
    }

    return ( 
        <form className="messageForm">
            <h2 className="messageFormTitle">Edit Message</h2>
            <fieldset>
                <div className="formGroup">
                    <input htmlFor="message" name="message" required autoFocus 
                    className="formControl"
                    onChange={handleInputChange}
                    defaultValue={messages.message}/>
                </div>
            </fieldset>
            <button className="editBtn"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                constructEditMessageObject()
            }}>Save</button>
        </form>
    )
}
