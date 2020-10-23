import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { Button, Form, Header, Input } from "semantic-ui-react";
import "./Login.css"

export const Login = props => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        console.log(email)
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(user => {
                if (user[0].username === username) {
                    return user[0]
                }
                else { return false }
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("CCCL_username", exists.username)
                    localStorage.setItem("CCCL_customer", exists.id)
                    if (!!exists.admin) {
                        localStorage.setItem("CCCL_admin", exists.admin)
                    }
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <Header size="huge">The Crazy Cupcake Lady's Cakes, Cupcakes and Cookies</Header>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Input
                    onChange={(event) => setUsername(event.target.value)}
                    id="form-input-username"
                    control={Input}
                    label="username"
                    placeholder="username"
                    width={6} 
                    required/>
                <Form.Input
                    onChange={(event) => setEmail(event.target.value)}
                    id="form-input-email"
                    control={Input}
                    label="email"
                    placeholder="email"
                    width={6} 
                    required/>
                <Button color="purple" type="submit">
                    Login
                </Button>
            </Form>
            <br></br>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}