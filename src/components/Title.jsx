import React, { useState, useEffect } from "react"
import "../styles/Title.css"
import { AutoGrowInput } from "./AutoGrowInput"

export function Title(props) {
    const { titleInfo, setTitleInfo } = props

    const [fullName, setFullName] = useState(titleInfo.fullName)
    const [location, setLocation] = useState(titleInfo.location)
    const [phone, setPhone] = useState(titleInfo.phone)
    const [email, setEmail] = useState(titleInfo.email)

    useEffect(() => {
        setFullName(titleInfo.fullName)
        setLocation(titleInfo.location)
        setPhone(titleInfo.phone)
        setEmail(titleInfo.email)
    }, [titleInfo])

    const handleUpdate = () => {
        setTitleInfo({
            fullName,
            location,
            phone,
            email,
        })
    }

    return (
        <div className="title">
            <div className="left-title">
                <AutoGrowInput
                    className="title-name"
                    value={fullName}
                    onBlur={handleUpdate}
                    onChange={(e) => {
                        setFullName(e.target.value)
                    }}
                />

                <AutoGrowInput
                    className="title-location"
                    value={location}
                    onBlur={handleUpdate}
                    onChange={(e) => {
                        setLocation(e.target.value)
                    }}
                />
            </div>
            <div className="right-title">
                <AutoGrowInput
                    className="title-phone"
                    value={phone}
                    onBlur={handleUpdate}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />

                <AutoGrowInput
                    className="title-email"
                    value={email}
                    onBlur={handleUpdate}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}
