import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Button, Card, Icon } from "semantic-ui-react"
import "./Message.css"
import { MessageContext } from "./MessageProvider"

export const MessageCard = ({ message }) => {

    const { deleteMessage } = useContext(MessageContext)

    const history = useHistory()

    const hideDelete = () => {
        if (parseInt(localStorage.getItem("CCCL_customer")) === message.userId) {
            return false
        }
        if (localStorage.getItem("CCCL_admin")) {
            return false
        }
        else { return true }
    }

    const hideEdit = () => {
        if (parseInt(localStorage.getItem("CCCL_customer")) === message.userId) {
            return false
        }
        else {
            return true
        }
    }

    return (

        <Card>
            <Card.Content>
                <Card.Header>{message.user.username}</Card.Header>
                {/* <Card.Meta>{message.date}</Card.Meta> */}
                <Card.Description>{message.message}</Card.Description>
            </Card.Content>

            <Button.Group>
            {hideDelete() ? "" : <Button
                
                icon
                className="messageDeleteBtn"
                onClick={event => {
                    event.preventDefault()
                    deleteMessage(message.id)
                }}>
                    <Icon name="trash" />
            </Button>}

            {hideEdit() ? "" : <Button
                icon
                className="messageEditBtn"
                onClick={() => {
                    history.push(`/edit/${message.id}`)
                }}>
                    <Icon name="edit" />
            </Button>}
            </Button.Group>
        </Card>
    )
}