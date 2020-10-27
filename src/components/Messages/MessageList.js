import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import "./Message.css"
import { Button, Input, Divider } from "semantic-ui-react"
import { useInterval } from "../../useInterval"

export const MessageList = () => {
    const { messages, getMessages, addMessage } = useContext(MessageContext)

    const [message, setMessage] = useState("") 

    useInterval(getMessages, 3000)

    const [changeMessageList, setChangeMessageList] = useState({})

    const constructMessageObject = () => {
        addMessage({
            message: message,
            userId: parseInt(localStorage.getItem("CCCL_customer")),
            date: Date.now()
        })
        .then(e => setChangeMessageList(message))
    }

    const compare = (a, b) => {
        const bandA = a.date;
        const bandB = b.date;
    
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }

    useEffect(() => {
        getMessages()
        setMessage("")
        document.getElementById("message").value = ""
    }, [changeMessageList])

    return (
        <>
            <div className="text">
            <h2>User Experiences</h2>
            <div className="messages">
                {
                    messages.sort(compare).map(message => {
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
                    event.preventDefault()
                    constructMessageObject()
                }}>
            Submit 
            </Button>
            </div>
            
        </>
    )
}