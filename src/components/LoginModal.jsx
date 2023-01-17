import React from "react"
import "../styles/LoginModal.css"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

export function LoginModal(props) {
    const { setUser } = props

    const handleCreateUser = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredintial) => {
                setUser(userCredintial.user)
                document.getElementById("id01").style.display = "none"
            })
            .catch((error) => {
                const errorCode = error.code
                if (errorCode === "auth/invalid-email") {
                    alert("Invalid email format.")
                }
            })
    }
    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                document.getElementById("id01").style.display = "none"
            })
            .catch((error) => {
                const errorCode = error.code
                if (
                    errorCode === "auth/invalid-email" ||
                    errorCode === "auth/wrong-password"
                ) {
                    alert("Invalid email/password combo.")
                }
            })
    }

    return (
        <div id="id01" className="modal">
            <div className="modal-content animate">
                <span
                    onClick={() => {
                        document.getElementById("id01").style.display = "none"
                    }}
                    className="close"
                    title="Close Login"
                >
                    &times;
                </span>
                <h2 className="modal-heading">Account</h2>
                <div className="modal-input">
                    <input
                        type="text"
                        className="input-field"
                        data-email
                        required
                    />
                    <label className="input-label">Email</label>
                </div>
                <div className="modal-input">
                    <input
                        type="password"
                        className="input-field"
                        data-password
                        required
                    />
                    <label className="input-label">Password</label>
                </div>
                <div className="buttons-container">
                    <button
                        type="button"
                        onClick={() => {
                            const email =
                                document.querySelector("[data-email]").value
                            const password =
                                document.querySelector("[data-password").value
                            handleLogin(email, password)
                        }}
                        className="modal-button"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            const email =
                                document.querySelector("[data-email]").value
                            const password =
                                document.querySelector("[data-password").value
                            handleCreateUser(email, password)
                        }}
                        className="modal-button"
                    >
                        Sign-Up
                    </button>
                </div>
            </div>
        </div>
    )
}
