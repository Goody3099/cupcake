import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductForm = () => {
    const { addProduct, getProducts, getProductById, editProduct } = useContext(ProductContext)

    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { productId } = useParams()
    const history = useHistory()

   const handleChange = (e) => {
        const newProduct = { ...products }
        newProduct[e.target.name] = e.target.value
        setProducts(newProduct)
    }

    useEffect(() => {
        getProducts()
            .then(() => {
                if (productId) {
                    getProductById(productId)
                        .then(product => {
                            setProducts(product)
                            setIsLoading(false)
                        })
                }
                else {
                    setIsLoading(false)
                }
            })
    }, [])

    const constructProductObject = () => {
        if (productId) {
            editProduct({
                id: products.id,
                name: products.name,
                description: products.description,
                price: products.price,
                picture: products.picture
            })
                .then(() => history.push(`/products/detail/${products.id}`))
        }
        else 
        {
            addProduct({
                name: products.name,
                description: products.description,
                price: products.price,
                timeToBake: products.timeToBake,
                picture: products.picture
            })
                .then(() => history.push(`/products`))
        }
    }

    return (
        <form className="productForm">
            <h2 className="productFormTitle">{productId ? "Edit Product" : "Add New Product"}</h2>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="productName">Product Name: </label>
                    <input type="text" id="productName" name="name" required autoFocus className="formControl"
                    placeholder="Product Name"
                    onChange={handleChange}
                    defaultValue={products.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="productPicture">Product Picture: </label>
                    <input type="text" id="productPicture" name="picture" required className="formControl"
                    placeholder="Product Picture"
                    onChange={handleChange}
                    defaultValue={products.picture}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="productDescription">Product Description: </label>
                    <input type="text" id="productDescription" name="description" required className="formControl"
                    placeholder="Product Description"
                    onChange={handleChange}
                    defaultValue={products.description}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="productPrice">Product Price: </label>
                    <input type="text" id="productPrice" name="price" required className="formControl"
                    placeholder="Product Price"
                    onChange={handleChange}
                    defaultValue={products.price}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="productTimeToBake">Time to Bake: </label>
                    <input type="text" id="productTimeToBake" name="timeToBake" required className="formControl"
                    placeholder="Time to Bake"
                    onChange={handleChange}
                    defaultValue={products.timeToBake}/>
                </div>
            </fieldset>
            <button className="btn btnPrimary"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                constructProductObject()
            }}>
                {productId ? "Save edited Product" : "Save new Product"}
            </button>
        </form>
    )
}