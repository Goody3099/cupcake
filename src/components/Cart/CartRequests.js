import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, Container, Divider } from "semantic-ui-react"
import { CartChat } from "./CartChat"
import { CartContext } from "./CartProvider"



export const CartRequests = () => {

    const { getUsers, messages, getMessages } = useContext(CartContext)
    const [x, setX] = useState([])

    useEffect(() => {
        getMessages().then(y => {
            getUsers().then(users => {
                setX(users.map(user => {
                    console.log(user, y)
                    let find = y.find(message => (user.id === message.sentId))
                    return find
                }))
            })
        })
    }, [])

    return (
        <>
        {console.log(x)}
            {x.filter(e => e !== undefined).filter(e => e.sentId !== 1).map(user => {
                return (
                    <Card>
                        <Card.Header>
                            <Link to={`/requests/${user.sentId}`}>{user.sentUsername}</Link>
                        </Card.Header>
                    </Card>
                )
            })}
        </>
    )
}