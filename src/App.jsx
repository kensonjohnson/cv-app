import React, { useEffect, useState } from "react"
import "./styles/App.css"
import { LoginModal } from "./components/LoginModal"
import { Header } from "./components/Header"
import { Title } from "./components/Title"
import { Description } from "./components/Description"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { exampleCV } from "./utils/exampleCV"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase, ref, set, child, get } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDabusPbCaV7Z84BiD6dXVptj9GPQqmQQY",
    authDomain: "cv-app-c3185.firebaseapp.com",
    projectId: "cv-app-c3185",
    storageBucket: "cv-app-c3185.appspot.com",
    messagingSenderId: "650714302228",
    appId: "1:650714302228:web:49f4c6396261f52dc0e401",
    measurementId: "G-XFPQYGG9J5",
    databaseURL: "https://cv-app-c3185-default-rtdb.firebaseio.com/",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const localCopy = recalLocalStorage()

function App() {
    const [user, setUser] = useState(null)
    const [titleInfo, setTitleInfo] = useState(localCopy.titleInfo)
    const [objective, setObjective] = useState(localCopy.objective)
    const [experience, setExperience] = useState(localCopy.experience)
    const [education, setEducation] = useState(localCopy.education)

    useEffect(() => {
        if (user) {
            get(child(ref(database), user.uid))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const storedResume = snapshot.val()
                        setTitleInfo(storedResume.titleInfo)
                        setObjective(storedResume.objective)
                        setExperience(storedResume.experience)
                        setEducation(storedResume.education)
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            const storedResume = recalLocalStorage()
            setTitleInfo(storedResume.titleInfo)
            setObjective(storedResume.objective)
            setExperience(storedResume.experience)
            setEducation(storedResume.education)
        }
    }, [user])

    useEffect(() => {
        const updatedResume = { titleInfo, objective, experience, education }
        storeLocal(titleInfo, objective, experience, education)
        if (user) {
            storeCloudDatabase(user.uid, updatedResume)
        }
    }, [titleInfo, objective, experience, education])

    return (
        <div className="app">
            <LoginModal setUser={setUser} />
            <Header user={user} setUser={setUser} />
            <div className="page">
                <Title titleInfo={titleInfo} setTitleInfo={setTitleInfo} />
                <Description
                    objective={objective}
                    setObjective={setObjective}
                />
                <Experience
                    experience={experience}
                    setExperience={setExperience}
                />
                <Education education={education} setEducation={setEducation} />
            </div>
        </div>
    )
}

// This closes the LoginModal when the user clicks outside of it.
const modal = document.getElementById("id01")
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

function recalLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem("resume"))
    if (!storedData || storedData === "") {
        return exampleCV
    }
    return storedData
}

function storeLocal(titleInfo, objective, experience, education) {
    const resume = {
        titleInfo,
        objective,
        experience,
        education,
    }
    const resumeJSON = JSON.stringify(resume)
    localStorage.setItem("resume", resumeJSON)
}

function storeCloudDatabase(userId, resume) {
    set(ref(database, userId), resume)
}

export default App
