import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { CookieContext } from "./CookieProvider"

export const CookieForm = () => {
    const { addCookie, getCookies, getCookieById, editCookie } = useContext(CookieContext)

    const [cookies, setCookies] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { cookieId } = useParams()
    const history = useHistory()

   const handleChange = (e) => {
        const newCookie = { ...cookies }
        newCookie[e.target.name] = e.target.value
        setCookies(newCookie)
    }

    useEffect(() => {
        getCookies()
            .then(() => {
                if (cookieId) {
                    getCookieById(cookieId)
                        .then(cookie => {
                            setCookies(cookie)
                            setIsLoading(false)
                        })
                }
                else {
                    setIsLoading(false)
                }
            })
    }, [])

    const constructCookieObject = () => {
        if (cookieId) {
            editCookie(cookieId,{
                name: cookies.name,
                description: cookies.description,
                price: cookies.price,
                picture: cookies.picture
            })
        }
        else 
        {
            addCookie({
                name: cookies.name,
                description: cookies.description,
                price: cookies.price,
                timeToBake: cookies.timeToBake,
                picture: cookies.picture
            })
                .then(() => history.push(`/cookies`))
        }
    }

    return (
        <form className="cookieForm">
            <h2 className="cookieFormTitle">{cookieId ? "Edit Cookie" : "Add New Cookie"}</h2>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cookieName">Cookie Name: </label>
                    <input type="text" id="cookieName" name="name" required autoFocus className="formControl"
                    placeholder="Cookie Name"
                    onChange={handleChange}
                    defaultValue={cookies.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cookiePicture">Cookie Picture: </label>
                    <input type="text" id="cookiePicture" name="picture" required className="formControl"
                    placeholder="Cookie Picture"
                    onChange={handleChange}
                    defaultValue={cookies.picture}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cookieDescription">Cookie Description: </label>
                    <input type="text" id="cookieDescription" name="description" required className="formControl"
                    placeholder="Cookie Description"
                    onChange={handleChange}
                    defaultValue={cookies.description}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cookiePrice">Cookie Price: </label>
                    <input type="text" id="cookiePrice" name="price" required className="formControl"
                    placeholder="Cookie Price"
                    onChange={handleChange}
                    defaultValue={cookies.price}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                    <label htmlFor="cookieTimeToBake">Time to Bake: </label>
                    <input type="text" id="cookieTimeToBake" name="timeToBake" required className="formControl"
                    placeholder="Time to Bake"
                    onChange={handleChange}
                    defaultValue={cookies.timeToBake}/>
                </div>
            </fieldset>
            <button className="btn btnPrimary"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                constructCookieObject()
            }}>
                {cookieId ? "Save" : "Save new Cookie"}
            </button>
            <button className="cancelBtn"
            disabled={isLoading}
            onClick={e => {
                e.preventDefault()
                history.push("/cookies")
            }}>Cancel
            </button>
        </form>
    )
}