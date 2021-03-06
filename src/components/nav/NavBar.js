import React from "react"
import { NavLink } from "react-router-dom"
import { Menu, Sticky } from "semantic-ui-react"
import "./NavBar.css"

export const NavBar = (props) => {

    const checkAdmin = () => {
        if (!!localStorage.getItem("CCCL_admin")) {
            return (
                <>
                    <Menu.Item
                        color="purple"
                        as={NavLink} to="/products/create"
                        name='Add Product'
                    />

                    <Menu.Item
                        color="purple"
                        as={NavLink} to="/requests"
                        name='Requests'
                    />
                </>
            )
        }
        else {
            return (
                <Menu.Item
                    color="purple"
                    as={NavLink} to="/cart"
                    name='Cart'
                />)
        }

    }

    return (
        <Sticky>
            <Menu className="navBar" inverted>
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
                    as={NavLink} to="/products/cupcakes"
                    name='cupcakes'
                >
                    Cupcakes
                </Menu.Item>

                <Menu.Item
                    color="purple"
                    as={NavLink} to="/products/cakes"
                    name='cakes'
                >
                    Cakes
                </Menu.Item>

                <Menu.Item
                    color="purple"
                    as={NavLink} to="/products/cookies"
                    name='cookies'
                >
                    Cookies
                </Menu.Item>

                {checkAdmin()}

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
        </Sticky>
    )
}