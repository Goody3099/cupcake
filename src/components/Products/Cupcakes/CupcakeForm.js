import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CupcakeContext } from "./CupcakeProvider"

export const CupcakeForm = () => {
    const { addCupcake, getCupcakes, getCupcakeById, editCupcake } = useContext(CupcakeContext)

    const [cupcakes, setCupcakes] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { cupcakeId } = useParams()
    const history = useHistory()

   const handleChange = (e) => {
        const newCupcake = { ...cupcakes }
        newCupcake[e.target.name] = e.target.value
        setCupcakes(newCupcake)
    }

    useEffect(() => {
        getCupcakes()
            .then(() => {
                if (cupcakeId) {
                    getCupcakeById(cupcakeId)
                        .then(cupcake => {
                            setCupcakes(cupcake)
                            setIsLoading(false)
                        })
                }
                else {
                    setIsLoading(false)
                }
            })
    }, [])

    const constructCupcakeObject = () => {
        if (cupcakeId) {
            editCupcake(cupcakeId,{
                name: cupcakes.name,
                description: cupcakes.description,
                price: cupcakes.price,
                picture: cupcakes.picture
            })
        }
        else 
        {
            addCupcake({
                name: cupcakes.name,
                description: cupcakes.description,
                price: cupcakes.price,
                timeToBake: cupcakes.timeToBake,
                picture: cupcakes.picture
            })
                .then(() => history.push(`/cupcakes`))
        }
    }

    return (
        <form className="cupcakeForm">
            <h2 className="cupcakeFormTitle">{cupcakeId ? "Edit Cupcake" : "Add New Cupcake"}</h2>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cupcakeName">Cupcake Name: </label>
                    <input type="text" id="cupcakeName" name="name" required autoFocus className="formControl"
                    placeholder="Cupcake Name"
                    onChange={handleChange}
                    defaultValue={cupcakes.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cupcakePicture">Cupcake Picture: </label>
                    <input type="text" id="cupcakePicture" name="picture" required className="formControl"
                    placeholder="Cupcake Picture"
                    onChange={handleChange}
                    defaultValue={cupcakes.picture}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cupcakeDescription">Cupcake Description: </label>
                    <input type="text" id="cupcakeDescription" name="description" required className="formControl"
                    placeholder="Cupcake Description"
                    onChange={handleChange}
                    defaultValue={cupcakes.description}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cupcakePrice">Cupcake Price: </label>
                    <input type="text" id="cupcakePrice" name="price" required className="formControl"
                    placeholder="Cupcake Price"
                    onChange={handleChange}
                    defaultValue={cupcakes.price}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cupcakeTimeToBake">Time to Bake: </label>
                    <input type="text" id="cupcakeTimeToBake" name="timeToBake" required className="formControl"
                    placeholder="Time to Bake"
                    onChange={handleChange}
                    defaultValue={cupcakes.timeToBake}/>
                </div>
            </fieldset>
            <button className="btn btnPrimary"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                constructCupcakeObject()
            }}>
                {cupcakeId ? "Save" : "Save new Cupcake"}
            </button>
            <button className="cancelBtn"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                history.push("/cupcakes")
            }}>Cancel
            </button>
        </form>
    )
}