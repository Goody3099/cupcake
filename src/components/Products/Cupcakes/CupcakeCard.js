import React from "react"
import { Card, Image, Icon } from "semantic-ui-react"

export const CupcakeCard = ({ cupcake }) => (
    <Card color="purple" >
        <Image src={cupcake.picture} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{cupcake.name}</Card.Header>
            <Card.Description>{cupcake.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name="dollar sign" />
                {cupcake.price}
            </a>
        </Card.Content>
    </Card>
)