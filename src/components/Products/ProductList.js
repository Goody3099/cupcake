import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductProvider"
import { Card } from "semantic-ui-react"

export const ProductListCake = () => {
    const { products, getProductsCake, searchTerms } = useContext(ProductContext)

    useEffect(() => {
        getProductsCake()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Cakes</h2>
            <Card.Group className="products">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </Card.Group>
        </>
    )
}
export const ProductListCupcake = () => {
    const { products, getProductsCupcake, searchTerms } = useContext(ProductContext)

    useEffect(() => {
        getProductsCupcake()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Cupcakes</h2>
            <Card.Group className="products">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </Card.Group>
        </>
    )
}
export const ProductListCookie = () => {
    const { products, getProductsCookie, searchTerms } = useContext(ProductContext)

    useEffect(() => {
        getProductsCookie()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Cookies</h2>
            <Card.Group className="products">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </Card.Group>
        </>
    )
}

