import React from "react"
import { Link } from "react-router-dom"
import "./Product.css"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="productName">
            <Link to={`/products/detail/${product.id}`}>
                {product.name}
            </Link>
        </h3>
        <div className="productPicture">{product.picture}</div>
        <div className="productDescription">Description:{product.description}</div>
        <div className="productPrice">${product.price}</div>
    </section>
)