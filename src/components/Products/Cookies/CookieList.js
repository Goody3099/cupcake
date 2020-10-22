import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CookieCard } from "./CookieCard"
import { CookieContext } from "./CookieProvider"
import { Card } from "semantic-ui-react"

export const CookieList = () => {
    const {cookies, getCookies, searchTerms} = useContext(CookieContext)

    useEffect(() => {
        getCookies()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Cookies</h2>
        <button  hidden={!localStorage.getItem("CCCL_admin")} onClick={() => {
                history.push("/cookies/create")}
            }>
            Add New Cookie
        </button>

        <Card.Group className="cookies">
            {cookies.map(cookie => {
                return <CookieCard key={cookie.id} cookie={cookie} />
            })}
        </Card.Group>
        </>
    )
}

