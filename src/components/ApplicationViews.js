import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ProductList } from "./Products/ProductList"
import { ProductProvider } from "./Products/ProductProvider"
import { ProductForm } from "./Products/ProductForm"
import { ProductDetail } from "./Products/ProductDetail"
import { MessageProvider } from "./Messages/MessageProvider"
import { MessageList } from "./Messages/MessageList"
import { MessageEdit } from "./Messages/MessageEdit"


export const ApplicationViews = () => {
    return (
        <>
            <MessageProvider>
                <Route exact path="/">
                    <Home />
                    <MessageList />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/edit/:messageId(\d+)">
                    <MessageEdit />
                </Route>
            </MessageProvider>

            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/create">
                    <ProductForm />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/detail/:productId(\d+)">
                    <ProductDetail />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/edit/:productId(\d+)">
                    <ProductForm />
                </Route>
            </ProductProvider>
        </>
    )
}