import React, { useContext, useEffect, useState } from "react"
import { Button, Card, Divider, Grid, Input } from "semantic-ui-react"
import { useInterval } from "../../useInterval"
import { CartCard } from "./CartCard"
import { CartChat } from "./CartChat"
import { CartContext } from "./CartProvider"

export const CartList = () => {

    const { items, getCart, requests, getRequestedOrders, responses, getRequestedResponses, addMessage } = useContext(CartContext)

    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])

    useInterval(getRequestedOrders, 3000)
    useInterval(getRequestedResponses, 3000)

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        getRequestedOrders()
        getRequestedResponses()
        document.getElementById("message").value = ""
    }, [messages])

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
            <Grid>
                <Grid.Column floated="left" width={4}>
                    <h2>Cart Items</h2>

                    <Card.Group>
                        {
                            items.map(item => {
                                return <CartCard key={item.id} items={item} />
                            })
                        }

                    </Card.Group>
                </Grid.Column>
                <Grid.Column floated="right" width={11}>
                    <h2>Chat with the CrazyCupCakeLady about your order.</h2>
                    <div className="messages">
                        {
                            requests.concat(responses).sort(compare).map(request => {
                                return <CartChat key={request.id} messages={request} />
                            })
                        }
                    </div>
                    <Divider hidden />
                    <Input type="text"
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
                                .then(e => setMessages(Date.now()))
                        }}>
                        Submit
            </Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}