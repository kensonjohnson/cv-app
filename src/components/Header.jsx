import React from "react"
import "../styles/Header.css"
import { AuthButton } from "./AuthButton"

export function Header(props) {
    const { user, setUser } = props
    return (
        <div className="header">
            <div className="cell">Click on a field to edit it.</div>
            <div className="cell">{user ? "Signed In" : "Welcome Guest!"}</div>
            <AuthButton user={user} setUser={setUser} />
        </div>
    )
}
