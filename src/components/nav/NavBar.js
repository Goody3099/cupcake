import React from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import "./NavBar.css"

export const NavBar = (props) => {

        return (
            <Menu inverted>
                <Menu.Item
                    color="purple"
                    as={NavLink} to="/"
                    exact
                    name='home'
                    >
                    Home 
                </Menu.Item>

                <Menu.Item
                    color="purple"
                    as={NavLink} to="/products"
                    name='products'
                    >
                    Products 
                </Menu.Item>

                <Menu.Item
                    color="purple"
                    as={NavLink} to="/cart"
                    name='cart'
                    >
                    Cart
                </Menu.Item>
                
                <Menu.Menu position="right">
                    <Menu.Item
                    color="purple"
                    name='logout'
                    as={NavLink} to="/login"
                    onClick={() => {
                        localStorage.clear()
                    }}>
                        Logout
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }