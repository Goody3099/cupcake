import React, { useContext, useEffect, useState } from "react"
import { isElement } from "react-dom/test-utils"
import { Button, Container, Divider, Input } from "semantic-ui-react"
import { CartCard } from "./CartCard"
import { CartChat } from "./CartChat"
import { CartContext } from "./CartProvider"

export const CartList = () => {

    const { items, getCart, requests, getRequestedOrders, responses, getRequestedResponses, addMessage  } = useContext(CartContext)

    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        getRequestedOrders()
        getRequestedResponses()
        document.getElementById("message").value = ""
    }, [messages])

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
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
        <>
            <h2>Cart</h2>
            <div>
                {
                    items.map(item => {
                        return <CartCard key={item.id} items={item} />
                    })
                }

            </div>
            <h2>Requested Orders</h2>
            <Container>
                {
                    requests.concat(responses).sort(compare).map(request => {
                        return <CartChat key={request.id} messages={request} />
                    })
                }
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
                            recId: 1,
                            sentUsername: localStorage.getItem("CCCL_username"),
                            message: message,
                            date: Date.now()
                        }
                    )
                    .then(setMessages())
                }}>
            Submit 
            </Button>
            </Container>
        </>
    )
}