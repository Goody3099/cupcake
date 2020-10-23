import React from "react"
import { Card, Image, Icon, Button } from "semantic-ui-react"



export const ProductCard = ({ product }) => {

    const addToCart = (x) => {
        return fetch(`http://localhost:8088/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }
    return(
    <Card color="purple" >
        <Image src={product.picture} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
                <Icon name="dollar sign" />
                {product.price}
                <Button 
                onClick={e => addToCart({
                    price: product.price,
                    picture: product.picture,
                    name: product.name,
                    userId: parseInt(localStorage.getItem("CCCL_customer"))
                    })}>
                    Add to Cart
                </Button>
        </Card.Content>
    </Card>
)}