import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Card, Icon, Modal } from "semantic-ui-react"
import "./Message.css"
import { MessageContext } from "./MessageProvider"

export const MessageCard = ({ message }) => {

    const { deleteMessage, editMessage } = useContext(MessageContext)
    const [editMessageInfo, setEditMessageInfo] = useState("")
    const [open, setOpen] = useState(false)

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
        <>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >

                <Modal.Content>
                    <textarea
                        onChange={e => setEditMessageInfo(e.target.value)}
                        rows="5"
                        defaultValue={message.message}>

                    </textarea>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Cancel
          </Button>
                    <Button
                        content="Save"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => {
                            editMessage(message.id, { message: editMessageInfo })
                            setOpen(false)

                        }}
                        positive
                    />
                </Modal.Actions>
            </Modal>

            <Card className="messageCard">
                <Card.Content>
                    <Card.Header>{message.user.username}</Card.Header>
                    <Card.Description
                        content={message.message}
                    >
                    </Card.Description>
                </Card.Content>

                <div>
                    <span>
                    {hideDelete() ? "" : <Button
                        icon
                        className="messageBtn"
                        onClick={event => {
                            event.preventDefault()
                            deleteMessage(message.id)
                        }}>
                        <Icon name="trash" />
                    </Button>}
                    {hideEdit() ? "" : <Button
                        icon
                        className="messageBtn"
                        onClick={event => {
                            event.preventDefault()
                            setEditMessageInfo(message.message)
                            setOpen(true)
                        }}>
                        <Icon name="edit" />
                    </Button>}
                    </span>
                </div>
            </Card>
        </>
    )
}