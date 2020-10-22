import React, { useState, createContext } from "react"

export const CookieContext = createContext()

export const CookieProvider = (props) => {
    const [cookies, setCookies] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getCookies = () => {
        return fetch(`http://localhost:8088/cookies`)
        .then(res => res.json())
        .then(setCookies)
    }

    const addCookie = (x) => {
        return fetch(`http://localhost:8088/cookies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    const getCookieById = (x) => {
        return fetch(`http://localhost:8088/cookies/${x}`)
        .then(res => res.json())
    }

    const deleteCookie = (x) => {
        return fetch(`http://localhost:8088/cookie/${x}`, {
            method: "DELETE"
        })
    }

    const editCookie = (id, x) => {
        return fetch(`http://localhost:8088/cookies/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(x)
        })
    }

    return(
        <CookieContext.Provider value={{
            cookies, getCookies, getCookieById, addCookie, deleteCookie, editCookie, setSearchTerms, searchTerms
        }}>
            {props.children}
        </CookieContext.Provider>
    )
}