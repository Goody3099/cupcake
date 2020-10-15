import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ProductList } from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"

export const ApplicationViews = () => {
    return(
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}