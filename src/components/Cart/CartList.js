import React, { useContext, useEffect, useState } from "react"
import { Button, Card, Form, Grid, Input, MessageList, Modal } from "semantic-ui-react"
import { CartCard } from "./CartCard"
import { CartChat } from "./CartChat"
import { CartContext } from "./CartProvider"

export const CartList = () => {

    const { items, getCart, messages, getMessages  } = useContext(CartContext)

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        getMessages()
    }, [])

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
            <h2>Placed Order</h2>
            <div>
                {
                    messages.map(message => {
                        return <CartChat key={message.id} messages={message} />
                    })
                }
            </div>
        </>
    )
}