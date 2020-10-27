import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Card, Image, Icon, Button } from "semantic-ui-react"
import { ProductContext } from "./ProductProvider"

export const ProductCard = ({ product }) => {

    const { deleteProduct } = useContext(ProductContext)

    const history = useHistory()

    const addToCart = (x) => {
        return fetch(`http://localhost:8088/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }
    return (
        <Card color="purple" >
            <Image src={product.picture} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{product.name}</Card.Header>
                <Card.Description>{product.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="dollar sign" />
                {product.price}
                {localStorage.getItem("CCCL_admin") ?
                    <Button
                    onClick={e => {deleteProduct(product.id)
                    .then(history.push("/"))}}
                    >Delete Product</Button>
                    :
                    <Button
                        onClick={e => addToCart({
                            price: product.price,
                            picture: product.picture,
                            name: product.name,
                            description: product.description,
                            userId: parseInt(localStorage.getItem("CCCL_customer"))
                        }).then(history.push("/cart"))}>
                        Add to Cart
                </Button>}
            </Card.Content>
        </Card>
    )
}