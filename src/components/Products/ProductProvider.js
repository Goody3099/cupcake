import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [searchTerms, setSearchTerms] =useState("")

    const getProducts = () => {
        return fetch(`http://localhost:8088/products`)
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
        return fetch(`http://localhost:8088/products/${x}`, {
            method: "DELETE"
        })
    }

    const editProduct = (x) => {
        return fetch(`http://localhost:8088/products/${x}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    return(
        <ProductContext.Provider value={{
            products, getProducts, getProductById, addProduct, deleteProduct, editProduct, setSearchTerms, searchTerms
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}