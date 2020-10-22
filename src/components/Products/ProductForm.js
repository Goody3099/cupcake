import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button, Dropdown, Form, Menu, Radio } from "semantic-ui-react"
import { ProductContext } from "./ProductProvider"

export const ProductForm = () => {
    const { addProduct, getProducts, getProductById, editProduct } = useContext(ProductContext)

    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [type, setType] = useState("")
    const [value, setValue] = useState({})

    const { productId } = useParams()
    const history = useHistory()

    const handleChange = (e) => {
        const newProduct = { ...products }
        newProduct[e.target.name] = e.target.value
        setProducts(newProduct)
    }

    const handleDropdown = (e,{value}) => {
        setValue(value)
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
            editProduct(productId, {
                name: products.name,
                description: products.description,
                price: products.price,
                picture: products.picture,
                type: value
            })
        }
        else {
            addProduct({
                name: products.name,
                description: products.description,
                price: products.price,
                timeToBake: products.timeToBake,
                picture: products.picture,
                type: value
            })
                .then(() => history.push(`/`))
        }
    }

    const options= [
        {key: 1, text: "Cake", value: "cake"},
        {key: 2, text: "Cupcake", value: "cupcake"},
        {key: 3, text: "Cookie", value: "cookie"},
    ]

    return (
        <Form>
            <Form.Field width="6">
                <label>Product Name</label>
                <input
                    name="name"
                    onChange={(e) => handleChange(e)}
                    placeholder="Product Name" />
            </Form.Field>
            <Form.Field width="6">
                <label>Product Picture</label>
                <input
                    name="picture"
                    onChange={(e) => handleChange(e)}
                    placeholder="Product Picture" />
            </Form.Field>
            <Form.Field width="6">
                <label>Product Description</label>
                <input
                    name="description"
                    onChange={(e) => handleChange(e)}
                    placeholder="Product Description" />
            </Form.Field>
            <Form.Field width="6">
                <label>Product Price</label>
                <input
                    name="price"
                    onChange={(e) => handleChange(e)}
                    placeholder="Product Price" />
            </Form.Field>
            <Form.Field width="6">
                <label>Time to Bake</label>
                <input
                    name="timeToBake"
                    onChange={(e) => handleChange(e)}
                    placeholder="Time to Bake" />
            </Form.Field>
            <Dropdown
            placeholder="Choose type"
            selection
            options={options}
            onChange={handleDropdown}
            />
            <Button disabled={isLoading}
                onClick={e => {
                    e.preventDefault()
                    constructProductObject()
                }}>
                {productId ? "Save" : "Save New product"}
            </Button>
            <Button disabled={isLoading}
                onClick={e => {
                    e.preventDefault()
                    history.push("/")
                }}>
                Cancel
                    </Button>
        </Form>
    )
}