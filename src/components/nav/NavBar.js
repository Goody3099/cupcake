import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export const NavBar = (props) => {

        return (
            <Menu>
                <Menu.Item
                    as={NavLink} to="/"
                    exact
                    name='home'
                    >
                    Home 
                </Menu.Item>

                <Menu.Item
                    as={NavLink} to="/products"
                    name='products'
                    >
                    Products 
                </Menu.Item>

                <Menu.Item
                    as={NavLink} to="/cart"
                    name='cart'
                    >
                    Cart
                </Menu.Item>
            </Menu>
        )
    }