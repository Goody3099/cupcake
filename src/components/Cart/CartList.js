import React, { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Grid, Sticky } from "semantic-ui-react"
import { CartCard } from "./CartCard"
import { CartContext } from "./CartProvider"

export const CartList = () => {

    const { items, getCart } = useContext(CartContext)

    const [item, setItem] = useState({})

    useEffect(() => {
        getCart()
    }, [])

    const buyItem = () => {

    }

    return (
        <>
            <h2>Cart</h2>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <div>
                            <Card.Group>
                            {
                                items.map(item => {
                                    return <CartCard key={item.id} items={item} />
                                })
                            }
                            </Card.Group>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button
                            onClick={e => {
                                e.preventDefault()
                                buyItem()
                            }}>
                            Buy
                    </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}