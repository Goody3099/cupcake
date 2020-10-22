import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CupcakeCard } from "./CupcakeCard"
import { CupcakeContext } from "./CupcakeProvider"
import { Card } from "semantic-ui-react"

export const CupcakeList = () => {
    const {cupcakes, getCupcakes, searchTerms} = useContext(CupcakeContext)

    useEffect(() => {
        getCupcakes()
    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Cupcakes</h2>
        <button  hidden={!localStorage.getItem("CCCL_admin")} onClick={() => {
                history.push("/cupcakes/create")}
            }>
            Add New Cupcake
        </button>

        <Card.Group className="cupcakes">
            {cupcakes.map(cupcake => {
                return <CupcakeCard key={cupcake.id} cupcake={cupcake} />
            })}
        </Card.Group>
        </>
    )
}

