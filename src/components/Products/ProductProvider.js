import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getProducts = () => {
        return fetch(`http://localhost:8088/products`)
        .then(res => res.json())
        .then(setProducts)
    }

    const getProductsCake = () => {
        return fetch(`http://localhost:8088/products?type=cake`)
        .then(res => res.json())
        .then(setProducts)
    }

    const getProductsCupcake = () => {
        return fetch(`http://localhost:8088/products?type=cupcake`)
        .then(res => res.json())
        .then(setProducts)
    }

    const getProductsCookie = () => {
        return fetch(`http://localhost:8088/products?type=cookie`)
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = (x) => {
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    const getProductById = (x) => {
        return fetch(`http://localhost:8088/products/${x}`)
        .then(res => res.json())
    }

    const deleteProduct = (x) => {
        return fetch(`http://localhost:8088/product/${x}`, {
            method: "DELETE"
        })
    }

    const editProduct = (id, x) => {
        return fetch(`http://localhost:8088/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    return(
        <ProductContext.Provider value={{
            products, getProducts, getProductsCake, getProductsCupcake, getProductsCookie, getProductById, addProduct, deleteProduct, editProduct, setSearchTerms, searchTerms
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}