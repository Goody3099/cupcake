import React, { useContext, useState } from "react"
import { Card, Button, Modal, Form, Input, TextArea } from "semantic-ui-react"

export const CartChat = ({ messages }) => {
    
    return (
        <>
            <Card>
                <Card.Content>
                    <Card.Header content={messages.sentUsername} />
                    <Card.Description content={messages.message} />
                </Card.Content>
            </Card>
        </>
    )
}