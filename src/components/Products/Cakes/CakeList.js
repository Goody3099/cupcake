import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CakeCard } from "./CakeCard"
import { CakeContext } from "./CakeProvider"
import { Card } from "semantic-ui-react"

export const CakeList = () => {
    const {cakes, getCakes, searchTerms} = useContext(CakeContext)

    useEffect(() => {
        getCakes()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Cakes</h2>
        <button  hidden={!localStorage.getItem("CCCL_admin")} onClick={() => {
                history.push("/cakes/create")}
            }>
            Add New Cake
        </button>

        <Card.Group className="cakes">
            {cakes.map(cake => {
                return <CakeCard key={cake.id} cake={cake} />
            })}
        </Card.Group>
        </>
    )
}

