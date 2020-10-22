import React from "react"
import { Card, Image, Icon } from "semantic-ui-react"

export const CakeCard = ({ cake }) => (
    <Card color="purple" >
        <Image src={cake.picture} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{cake.name}</Card.Header>
            <Card.Description>{cake.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name="dollar sign" />
                {cake.price}
            </a>
        </Card.Content>
    </Card>
)