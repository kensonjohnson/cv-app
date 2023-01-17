import React from "react"
import "../styles/AuthButton.css"
import { getAuth, signOut } from "firebase/auth"

export function AuthButton(props) {
    const { user, setUser } = props

    const handleSignOut = () => {
        setUser(null)
        const auth = getAuth()
        signOut(auth).then(() => {
            alert("Successfully signed out.")
        })
    }
    if (user) {
        return (
            <div className="cell">
                <button
                    className="auth-button"
                    onClick={() => {
                        handleSignOut()
                    }}
                >
                    Sign Out
                </button>
            </div>
        )
    }
    return (
        <div className="cell">
            <button
                className="auth-button"
                onClick={() => {
                    document.getElementById("id01").style.display = "flex"
                }}
            >
                Login / Sign-Up
            </button>
        </div>
    )
}
