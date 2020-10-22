import React, { useState, createContext } from "react"

export const CupcakeContext = createContext()

export const CupcakeProvider = (props) => {
    const [cupcakes, setCupcakes] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getCupcakes = () => {
        return fetch(`http://localhost:8088/cupcakes`)
        .then(res => res.json())
        .then(setCupcakes)
    }

    const addCupcake = (x) => {
        return fetch(`http://localhost:8088/cupcakes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    const getCupcakeById = (x) => {
        return fetch(`http://localhost:8088/cupcakes/${x}`)
        .then(res => res.json())
    }

    const deleteCupcake = (x) => {
        return fetch(`http://localhost:8088/cupcake/${x}`, {
            method: "DELETE"
        })
    }

    const editCupcake = (id, x) => {
        return fetch(`http://localhost:8088/cupcakes/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    return(
        <CupcakeContext.Provider value={{
            cupcakes, getCupcakes, getCupcakeById, addCupcake, deleteCupcake, editCupcake, setSearchTerms, searchTerms
        }}>
            {props.children}
        </CupcakeContext.Provider>
    )
}