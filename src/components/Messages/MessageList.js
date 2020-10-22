import React, { useContext, useEffect, useRef, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import "./Message.css"
import { Card, Button, Input, Container, Divider } from "semantic-ui-react"

export const MessageList = () => {
    const { messages, getMessages, addMessage, deleteMessage } = useContext(MessageContext)

    const [message, setMessage] = useState("") 

    const [changeMessageList, setChangeMessageList] = useState({})

    useEffect(() => {
        getMessages()
        setMessage("")
        document.getElementById("message").value = ""
    }, [changeMessageList])

    const constructMessageObject = () => {
        addMessage({
            message: message,
            userId: parseInt(localStorage.getItem("CCCL_customer"))
        })
        .then(setChangeMessageList)
    }

    return (
        <>
            <Container>
            <h2>User Experiences</h2>
            <div className="messages">
                {
                    messages.map(message => {
                        return <MessageCard key={message.id} message={message} />
                    })
                }
            </div>
                <Divider />
                    <Input  type="text" 
                    onChange={e => setMessage(e.target.value)} 
                    id="message" 
                    name="name" 
                    className="messageInput" 
                    placeholder="Tell us about your experience."/>
              
                
            <Button 
            size="mini"
            className="messageSubmitBtn"
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructMessageObject()
                }}>
            Submit 
            </Button>
            </Container>
            
        </>
    )
}