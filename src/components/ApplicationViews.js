import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { MessageProvider } from "./Messages/MessageProvider"
import { MessageList } from "./Messages/MessageList"
import { CakeList } from "./Products/Cakes/CakeList"
import { CakeForm } from "./Products/Cakes/CakeForm"
import { CakeProvider } from "./Products/Cakes/CakeProvider"
import { CookieList } from "./Products/Cookies/CookieList"
import { CookieForm } from "./Products/Cookies/CookieForm"
import { CookieProvider } from "./Products/Cookies/CookieProvider"
import { CupcakeList } from "./Products/Cupcakes/CupcakeList"
import { CupcakeForm } from "./Products/Cupcakes/CupcakeForm"
import { CupcakeProvider } from "./Products/Cupcakes/CupcakeProvider"

export const ApplicationViews = () => {
    return (
        <>
            <MessageProvider>
                <Route exact path="/">
                    <Home />
                    <MessageList />
                </Route>
            </MessageProvider>

            <CakeProvider>
                <Route exact path="/cakes">
                    <CakeList />
                </Route>
            </CakeProvider>

            <CakeProvider>
                <Route exact path="/cakes/create">
                    <CakeForm />
                </Route>
            </CakeProvider>

            <CakeProvider>
                <Route exact path="/cakes/edit/:productId(\d+)">
                    <CakeForm />
                </Route>
            </CakeProvider>

            <CookieProvider>
                <Route exact path="/cookies">
                    <CookieList />
                </Route>
            </CookieProvider>

            <CookieProvider>
                <Route exact path="/cookies/create">
                    <CookieForm />
                </Route>
            </CookieProvider>

            <CookieProvider>
                <Route exact path="/cookies/edit/:productId(\d+)">
                    <CookieForm />
                </Route>
            </CookieProvider>

            <CupcakeProvider>
                <Route exact path="/cupcakes">
                    <CupcakeList />
                </Route>
            </CupcakeProvider>

            <CupcakeProvider>
                <Route exact path="/cupcakes/create">
                    <CupcakeForm />
                </Route>
            </CupcakeProvider>

            <CupcakeProvider>
                <Route exact path="/cupcakes/edit/:productId(\d+)">
                    <CupcakeForm />
                </Route>
            </CupcakeProvider>
        </>
    )
}