import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { MessageProvider } from "./Messages/MessageProvider"
import { MessageList } from "./Messages/MessageList"
import { ProductListCake, ProductListCookie, ProductListCupcake } from "./Products/ProductList"
import { ProductForm } from "./Products/ProductForm"
import { ProductProvider } from "./Products/ProductProvider"
import { CartProvider } from "./Cart/CartProvider"
import { CartList } from "./Cart/CartList"
import { CartRequests } from "./Cart/CartRequests"
import { CartRequestDetail } from "./Cart/CartRequestDetail"

export const ApplicationViews = () => {
    return (
        <>
            <MessageProvider>
                <Route exact path="/">
                    <Home />
                    <MessageList />
                </Route>
            </MessageProvider>

            <ProductProvider>
                <Route exact path="/products/cakes">
                    <ProductListCake />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/cupcakes">
                    <ProductListCupcake />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/cookies">
                    <ProductListCookie />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/create">
                    <ProductForm />
                </Route>
            </ProductProvider>

            <ProductProvider>
                <Route exact path="/products/edit/:productId(\d+)">
                    <ProductForm />
                </Route>
            </ProductProvider>

            <CartProvider>
                <Route exact path="/cart">
                    <CartList />
                </Route>
            </CartProvider>

            <CartProvider>
                <Route exact path="/requests">
                    <CartRequests />
                </Route>
            </CartProvider>

            <CartProvider>
                <Route exact path="/requests/:userId(\d+)">
                    <CartRequestDetail />
                </Route>
            </CartProvider>

        </>
    )
}