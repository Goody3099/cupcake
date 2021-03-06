import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, Divider, Input } from "semantic-ui-react"
import { useInterval } from "../../useInterval"
import { CartContext } from "./CartProvider"

export const CartRequestDetail = () => {

    const {userId} = useParams()

    const [user, setUser] = useState({})
    const [message, setMessage] = useState("")
    const [x, setX] = useState([])

    const {messages, getMessages, getUserById, addMessage} = useContext(CartContext)

    useInterval(getMessages, 3000)

    useEffect(() => {
        getMessages()
        getUserById(userId).then(setUser)
        document.getElementById("message").value = ""
    },[x])
    
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
      
    return (
        <div className="requests">
            <h2>{user[0]?.username}</h2>
            {messages.filter(e => e.sentId === parseInt(userId)).concat(messages.filter(e => e.recId === parseInt(userId))).sort(compare).map(message => {
                return <Card className="messageCard">{message.sentUsername}: {message.message}</Card>
            })}
            <Divider hidden/>
            <Input  type="text" 
                    onChange={e => setMessage(e.target.value)} 
                    id="message" 
                    name="name" 
                    className="messageInput" 
                    />
              
                
            <Button 
            size="mini"
            className="messageSubmitBtn"
                onClick={event => {
                    event.preventDefault()
                    addMessage(
                        {
                            sentId: parseInt(localStorage.getItem("CCCL_customer")),
                            recId: parseInt(userId),
                            sentUsername: localStorage.getItem("CCCL_username"),
                            message: message,
                            date: Date.now()
                        }
                    )
                    .then(setX)
                }}>
            Submit 
            </Button>
        </div>
    )
}