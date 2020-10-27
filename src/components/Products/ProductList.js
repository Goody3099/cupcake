import React, { useContext, useEffect } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductProvider"
import { Card } from "semantic-ui-react"

export const ProductListCake = () => {
    const { products, getProductsCake, searchTerms } = useContext(ProductContext)

    useEffect(() => {
        getProductsCake()
    }, [])

    return (
        <div className="text">
            <h2>Cakes</h2>
            <Card.Group className="products">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </Card.Group>
        </div>
    )
}
export const ProductListCupcake = () => {
    const { products, getProductsCupcake, searchTerms } = useContext(ProductContext)

    useEffect(() => {
        getProductsCupcake()
    }, [])

    return (
        <div className="text">
            <h2>Cupcakes</h2>
            <Card.Group className="products">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </Card.Group>
        </div>
    )
}
export const ProductListCookie = () => {
    const { products, getProductsCookie, searchTerms } = useContext(ProductContext)

    useEffect(() => {
        getProductsCookie()
    }, [])

    return (
        <div className="text">
            <h2>Cookies</h2>
            <Card.Group className="products">
                {products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </Card.Group>
        </div>
    )
}

