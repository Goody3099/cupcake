import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CakeContext } from "./CakeProvider"

export const CakeForm = () => {
    const { addCake, getCakes, getCakeById, editCake } = useContext(CakeContext)

    const [cakes, setCakes] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { cakeId } = useParams()
    const history = useHistory()

   const handleChange = (e) => {
        const newCake = { ...cakes }
        newCake[e.target.name] = e.target.value
        setCakes(newCake)
    }

    useEffect(() => {
        getCakes()
            .then(() => {
                if (cakeId) {
                    getCakeById(cakeId)
                        .then(cake => {
                            setCakes(cake)
                            setIsLoading(false)
                        })
                }
                else {
                    setIsLoading(false)
                }
            })
    }, [])

    const constructCakeObject = () => {
        if (cakeId) {
            editCake(cakeId,{
                name: cakes.name,
                description: cakes.description,
                price: cakes.price,
                picture: cakes.picture
            })
        }
        else 
        {
            addCake({
                name: cakes.name,
                description: cakes.description,
                price: cakes.price,
                timeToBake: cakes.timeToBake,
                picture: cakes.picture
            })
                .then(() => history.push(`/cakes`))
        }
    }

    return (
        <form className="cakeForm">
            <h2 className="cakeFormTitle">{cakeId ? "Edit Cake" : "Add New Cake"}</h2>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cakeName">Cake Name: </label>
                    <input type="text" id="cakeName" name="name" required autoFocus className="formControl"
                    placeholder="Cake Name"
                    onChange={handleChange}
                    defaultValue={cakes.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cakePicture">Cake Picture: </label>
                    <input type="text" id="cakePicture" name="picture" required className="formControl"
                    placeholder="Cake Picture"
                    onChange={handleChange}
                    defaultValue={cakes.picture}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cakeDescription">Cake Description: </label>
                    <input type="text" id="cakeDescription" name="description" required className="formControl"
                    placeholder="Cake Description"
                    onChange={handleChange}
                    defaultValue={cakes.description}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cakePrice">Cake Price: </label>
                    <input type="text" id="cakePrice" name="price" required className="formControl"
                    placeholder="Cake Price"
                    onChange={handleChange}
                    defaultValue={cakes.price}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cakeTimeToBake">Time to Bake: </label>
                    <input type="text" id="cakeTimeToBake" name="timeToBake" required className="formControl"
                    placeholder="Time to Bake"
                    onChange={handleChange}
                    defaultValue={cakes.timeToBake}/>
                </div>
            </fieldset>
            <button className="btn btnPrimary"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                constructCakeObject()
            }}>
                {cakeId ? "Save" : "Save new Cake"}
            </button>
            <button className="cancelBtn"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                history.push("/cakes")
            }}>Cancel
            </button>
        </form>
    )
}