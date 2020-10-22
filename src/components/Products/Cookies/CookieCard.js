import React from "react"
import { Card, Image, Icon } from "semantic-ui-react"

export const CookieCard = ({ cookie }) => (
    <Card color="purple" >
        <Image src={cookie.picture} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{cookie.name}</Card.Header>
            <Card.Description>{cookie.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name="dollar sign" />
                {cookie.price}
            </a>
        </Card.Content>
    </Card>
)