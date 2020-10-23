import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Card, Image, Icon, Button } from "semantic-ui-react"
import { CartContext } from "./CartProvider"
import "./Cart.css"

export const CartCard = ({ items }) => {

    const { removeFromCart } = useContext(CartContext)

    const history = useHistory()

    return (
        <Card className="cartCard" color="purple" >
            <Image src={items.picture} size="medium" />
            <Card.Content>
                <Card.Header>{items.name}</Card.Header>
                <Card.Description>{items.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="dollar sign" />
                {items.price}
            </Card.Content>
            <Button 
                onClick={e => removeFromCart(items.id)}>
                    Remove from Cart
                </Button>
        </Card>
    )
}

