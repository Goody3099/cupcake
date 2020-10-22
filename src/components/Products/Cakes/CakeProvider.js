import React, { useState, createContext } from "react"

export const CakeContext = createContext()

export const CakeProvider = (props) => {
    const [cakes, setCakes] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getCakes = () => {
        return fetch(`http://localhost:8088/cakes`)
        .then(res => res.json())
        .then(setCakes)
    }

    const addCake = (x) => {
        return fetch(`http://localhost:8088/cakes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    const getCakeById = (x) => {
        return fetch(`http://localhost:8088/cakes/${x}`)
        .then(res => res.json())
    }

    const deleteCake = (x) => {
        return fetch(`http://localhost:8088/cake/${x}`, {
            method: "DELETE"
        })
    }

    const editCake = (id, x) => {
        return fetch(`http://localhost:8088/cakes/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    return(
        <CakeContext.Provider value={{
            cakes, getCakes, getCakeById, addCake, deleteCake, editCake, setSearchTerms, searchTerms
        }}>
            {props.children}
        </CakeContext.Provider>
    )
}