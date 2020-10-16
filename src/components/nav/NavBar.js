import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbarItem active">
                <Link className="navbarLink" to="/">Home</Link>
            </li>
            <li className="navbarItem">
                <Link className="navbarLink" to="/products">Products</Link>
            </li>
            <li className="navbarItem">
                <Link className="navbarLink" to="/cart">Cart</Link>
            </li>
        </ul>
    )
}