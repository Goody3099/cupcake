import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form, Input, Header } from "semantic-ui-react"
import "./Login.css"

export const Register = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const conflictDialog = useRef()
    const conflictDialog1 = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const usernameCheck = () => {
        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        usernameCheck()
            .then((userExists) => {
                if (userExists) {
                    conflictDialog1.current.showModal()
                }
                else {
                    existingUserCheck()
                        .then((userExists) => {
                            if (!userExists) {
                                fetch("http://localhost:8088/users", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        email: email,
                                        firstName: `${firstName}`,
                                        lastName: `${lastName}`,
                                        username: `${username}`

                                    })
                                })
                                    .then(_ => _.json())
                                    .then(createdUser => {
                                        if (createdUser.hasOwnProperty("id")) {
                                            localStorage.setItem("CCCL_customer", createdUser.id)
                                            localStorage.setItem("CCCL_username", createdUser.username)
                                            history.push("/")
                                        }
                                    })
                            }
                            else {
                                conflictDialog.current.showModal()
                            }
                        })
                }
            })
    }

    return (
        <main>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>
            <dialog className="dialog dialog--password" ref={conflictDialog1}>
                <div>Account with that Username already exists</div>
                <button className="button--close" onClick={e => conflictDialog1.current.close()}>Close</button>
            </dialog>
            <Header size="huge">The Crazy Cupcake Lady's Cakes, Cupcakes and Cookies</Header>
            <h3>Registration</h3>
            <Form onSubmit={handleRegister}>
                <Form.Input
                    onChange={(event) => setFirstName(event.target.value)}
                    id="form-input-firstName"
                    control={Input}
                    label="First Name"
                    placeholder="First Name"
                    width={6}
                    required />
                <Form.Input
                    onChange={(event) => setLastName(event.target.value)}
                    id="form-input-lastName"
                    control={Input}
                    label="Last Name"
                    placeholder="Last Name"
                    width={6}
                    required />
                <Form.Input
                    onChange={(event) => setUsername(event.target.value)}
                    id="form-input-username"
                    control={Input}
                    label="Username"
                    placeholder="Username"
                    width={6}
                    required />
                <Form.Input
                    onChange={(event) => setEmail(event.target.value)}
                    id="form-input-email"
                    control={Input}
                    label="Email"
                    placeholder="Email"
                    width={6}
                    required />
                <Button color="purple" type="submit">
                    Register and Login
                </Button>
            </Form>
        </main>
    )
}

