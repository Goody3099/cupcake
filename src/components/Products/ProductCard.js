import React from "react"
import { Link } from "react-router-dom"
import "./Product.css"
import { Card } from "semantic-ui-react"

export const ProductCard = ({ product }) => (
    <Card  color="red" className="product">
        <h3 className="productName">
            <Link to={`/products/detail/${product.id}`}>
                {product.name}
            </Link>
        </h3>
        <img className="productPicture" src={product.picture} alt={product.name}/>
        <div className="productDescription">Description:{product.description}</div>
        <div className="productPrice">${product.price}</div>
    </Card>
)