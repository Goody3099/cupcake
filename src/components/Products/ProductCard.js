import React from "react"
import { Card, Image, Icon } from "semantic-ui-react"

export const ProductCard = ({ product }) => (
    <Card color="purple" >
        <Image src={product.picture} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name="dollar sign" />
                {product.price}
            </a>
        </Card.Content>
    </Card>
)