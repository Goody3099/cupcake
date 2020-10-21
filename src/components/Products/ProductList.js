import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductProvider"
import "./Product.css"
import { Card } from "semantic-ui-react"

export const ProductList = () => {
    const {products, getProducts, searchTerms} = useContext(ProductContext)
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Products</h2>
        <button  hidden={!localStorage.getItem("CCCL_admin")} onClick={() => {
                history.push("/products/create")}
            }>
            Add New Product
        </button>

        <Card.Group className="products">
            {products.map(product => {
                return <ProductCard key={product.id} product={product} />
            })}
        </Card.Group>
        </>
    )
}

