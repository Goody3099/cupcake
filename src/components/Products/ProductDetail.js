import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductDetail = () => {
    const { deleteProduct, getProductById } = useContext(ProductContext)

    const [product, setProduct] = useState({})

    const {productId} = useParams()
    const history = useHistory()

    useEffect(() => {
        getProductById(productId)
        .then((res) => {
            setProduct(res)
        })
    }, [])

    return (
        <section className="product">
        <h3 className="productName">{product.name}</h3>
        <img className="productPicture" src={product.picture} alt={product.name}/>
        <div className="productDescription">Description:{product.description}</div>
        <div className="productPrice">${product.price}</div>
        <button hidden={!localStorage.getItem("CCCL_admin")} onClick={
            () => {
                deleteProduct(product.id)
                .then(() => {
                    history.push("/products")
                })
            }}>Delete Product
            </button>
    </section>
    )
}
