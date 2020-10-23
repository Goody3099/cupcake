import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Card, Image, Icon, Button, Modal, Form, Input } from "semantic-ui-react"
import { CartContext } from "./CartProvider"
import "./Cart.css"


export const CartCard = ({ items }) => {

    const { removeFromCart, getMessages, addMessage } = useContext(CartContext)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [comments, setComments] = useState("")

    const handlePlaceOrderDate = (d) => {
        setDate(d)
    }

    const handlePlaceOrderTime = (t) => {
        setTime(t)
    }

    const handlePlaceOrderComments = (c) => {
        setComments(c)
    }

    const chatAdmin = (d, t, c, i) => {
        console.log(i)
        addMessage({
            sentId: parseInt(localStorage.getItem("CCCL_customer")),
            sentUsername: localStorage.getItem("CCCL_username"),
            recId: 1,
            message: ` Hi, I would like the ${i.description} on ${d} at ${t}. Comments/Questions: ${c}`
        })
    }

    const history = useHistory()

    return (
        <Card className="cartCard" color="purple" >
            <Image src={items.picture} size="medium" />
            <Card.Content>
                <Card.Header>{items.name}</Card.Header>
                <Card.Description>{items.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="dollar sign" />
                {items.price}
            </Card.Content>
            <Button
                onClick={e => removeFromCart(items.id)}>
                Remove from Cart
                </Button>
            <Button
                onClick={e => {
                    e.preventDefault()
                    setOpen(true)
                }}>
                Place Order
            </Button>

            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <Input
                                label="Request Date."
                                type="date"
                                onChange={e => handlePlaceOrderDate(e.target.value)}></Input>
                        </Form.Field>
                        <Form.Field>
                            <Input
                                label="Request Time."
                                type="time"
                                onChange={e => handlePlaceOrderTime(e.target.value)}></Input>
                        </Form.Field>
                        <Form.Field>
                            <Input
                                label="Theme"
                                placeholder="Example: Batman for six year old."
                                onChange={e => handlePlaceOrderComments(e.target.value)}
                            ></Input>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        content="Place Order"
                        labelPosition='right'
                        icon='checkmark'
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            if (date === "") { window.alert("Please select a date.") }
                            else if (time === "") { window.alert("Please select a time.") }
                            else {
                                setOpen(false)
                                chatAdmin(date, time, comments, items)
                            }
                        }}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </Card>
    )
}

