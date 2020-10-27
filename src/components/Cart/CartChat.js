import React from "react"
import { Card } from "semantic-ui-react"

export const CartChat = ({ messages }) => {
    
    return (
        <>
            <Card className="messageCard">
                <Card.Content>
                    <Card.Header content={messages.sentUsername} />
                    <Card.Description content={messages.message} />
                </Card.Content>
            </Card>
        </>
    )
}